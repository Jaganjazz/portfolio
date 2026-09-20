const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function enhancePortrait() {
  const inputPath = '/home/soldier57/.gemini/antigravity-ide/brain/f6245f7d-e4b5-467a-a4eb-c6b986cf6ca8/.user_uploaded/media_1789912855651.jpg';
  const outputPngPath = path.join(__dirname, '../public/assets/jagan-profile.png');
  const outputJpgPath = path.join(__dirname, '../public/assets/jagan-profile-original.jpg');

  console.log('Reading 1024x1024 input image...');
  // Copy original high-res JPEG
  fs.copyFileSync(inputPath, outputJpgPath);

  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  const alpha = new Uint8Array(width * height);
  alpha.fill(255);

  const visited = new Uint8Array(width * height);
  const queue = [];

  // Seed flood fill from outer borders
  // Top border
  for (let x = 0; x < width; x++) {
    queue.push(x, 0);
    visited[x] = 1;
  }
  // Left border
  for (let y = 0; y < height; y++) {
    queue.push(0, y);
    visited[y * width] = 1;
  }
  // Right border
  for (let y = 0; y < height; y++) {
    queue.push(width - 1, y);
    visited[y * width + (width - 1)] = 1;
  }
  // Bottom border outside the person (x < 280 or x > 950)
  for (let x = 0; x < 280; x++) {
    queue.push(x, height - 1);
    visited[(height - 1) * width + x] = 1;
  }
  for (let x = 950; x < width; x++) {
    queue.push(x, height - 1);
    visited[(height - 1) * width + x] = 1;
  }

  function isStudioWhite(cx, cy) {
    const idx = (cy * width + cx) * 3;
    const r = data[idx], g = data[idx + 1], b = data[idx + 2];
    return r > 235 && g > 235 && b > 235;
  }

  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];
    const cIdx = cy * width + cx;

    if (isStudioWhite(cx, cy)) {
      alpha[cIdx] = 0;

      const neighbors = [
        [cx + 1, cy],
        [cx - 1, cy],
        [cx, cy + 1],
        [cx, cy - 1]
      ];

      for (const [nx, ny] of neighbors) {
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const nIdx = ny * width + nx;
          if (!visited[nIdx]) {
            visited[nIdx] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }
  }

  // Smooth edges and defringe semi-transparent border pixels
  const rgba = Buffer.alloc(width * height * 4);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const rgbIdx = idx * 3;
      const rgbaIdx = idx * 4;

      let r = data[rgbIdx];
      let g = data[rgbIdx + 1];
      let b = data[rgbIdx + 2];
      let a = alpha[idx];

      if (a > 0) {
        let transparentNeighbors = 0;
        let totalNeighbors = 0;
        for (let dy = -2; dy <= 2; dy++) {
          for (let dx = -2; dx <= 2; dx++) {
            const nx = x + dx, ny = y + dy;
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              totalNeighbors++;
              if (alpha[ny * width + nx] === 0) {
                transparentNeighbors++;
              }
            }
          }
        }

        if (transparentNeighbors > 0) {
          const whiteness = Math.min(r, Math.min(g, b));
          if (whiteness > 210) {
            const factor = (255 - whiteness) / 45;
            a = Math.min(a, Math.round(255 * factor * (1 - transparentNeighbors / totalNeighbors)));
          }
          if (a > 0 && a < 255) {
            const alphaFactor = a / 255;
            r = Math.max(0, Math.min(255, Math.round((r - (1 - alphaFactor) * 255) / alphaFactor)));
            g = Math.max(0, Math.min(255, Math.round((g - (1 - alphaFactor) * 255) / alphaFactor)));
            b = Math.max(0, Math.min(255, Math.round((b - (1 - alphaFactor) * 255) / alphaFactor)));
          }
        }
      }

      rgba[rgbaIdx] = r;
      rgba[rgbaIdx + 1] = g;
      rgba[rgbaIdx + 2] = b;
      rgba[rgbaIdx + 3] = a;
    }
  }

  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(outputPngPath);

  console.log('Successfully generated high-resolution transparent portrait:', outputPngPath);
}

enhancePortrait().catch(err => {
  console.error('Error enhancing portrait:', err);
  process.exit(1);
});
