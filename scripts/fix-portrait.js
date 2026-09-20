const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function fixPortrait() {
  const masterJpg = '/home/soldier57/.gemini/antigravity-ide/brain/f6245f7d-e4b5-467a-a4eb-c6b986cf6ca8/.user_uploaded/media_1789912855651.jpg';
  const maskPng = '/home/soldier57/.gemini/antigravity-ide/brain/f6245f7d-e4b5-467a-a4eb-c6b986cf6ca8/.user_uploaded/media_1789901230728.png';
  const outputPath = path.join(__dirname, '../public/assets/jagan-profile.png');

  console.log('Loading 1024x1024 master photo and reference mask...');

  // 1. Get 1024x1024 master RGB
  const { data: masterRgb, info: masterInfo } = await sharp(masterJpg)
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height } = masterInfo; // 1024, 1024

  // 2. Resize reference mask to 1024x1024 using Lanczos3
  const { data: maskData } = await sharp(maskPng)
    .resize(width, height, { fit: 'fill', kernel: 'lanczos3' })
    .raw()
    .toBuffer({ resolveWithObject: true });

  // 3. Create clean 1024x1024 RGBA
  const rgba = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const rgbIdx = idx * 3;
      const rgbaIdx = idx * 4;

      let r = masterRgb[rgbIdx];
      let g = masterRgb[rgbIdx + 1];
      let b = masterRgb[rgbIdx + 2];

      // Alpha from reference mask (channel 3)
      let a = maskData[rgbaIdx + 3];

      // OUTFIT FIX (y > 330: neck, collar, shirt, suit, hands):
      // The outfit is 100% solid fabric. Ensure full opacity wherever the mask has the person.
      if (y > 330) {
        if (a > 40) {
          // Inside person's body/outfit -> strictly 100% opaque!
          a = 255;
        } else {
          a = 0;
        }
      } else {
        // HAIR FIX (y <= 330: hair and upper forehead):
        // Remove white halo ("little bit witey") around dark curls:
        if (a < 30) {
          a = 0;
        } else if (a < 250) {
          // Boundary hair pixel
          // If the pixel has white background contamination (high RGB in dark hair):
          const brightness = (r + g + b) / 3;
          if (brightness > 100) {
            // Darken the fringe towards hair color
            const factor = Math.max(0, (255 - brightness) / 155);
            r = Math.round(r * factor * 0.4 + 20 * (1 - factor));
            g = Math.round(g * factor * 0.4 + 20 * (1 - factor));
            b = Math.round(b * factor * 0.4 + 25 * (1 - factor));
            // Choke alpha slightly so the white edge doesn't spill into dark background
            a = Math.round(a * 0.85);
          }
        }
      }

      rgba[rgbaIdx] = r;
      rgba[rgbaIdx + 1] = g;
      rgba[rgbaIdx + 2] = b;
      rgba[rgbaIdx + 3] = a;
    }
  }

  console.log('Upscaling to 2048x2048 with Lanczos3 and unsharp masking...');

  // 4. Upscale to 2048x2048 with Lanczos3 and apply unsharp masking for ultra-crisp details
  const finalBuffer = await sharp(rgba, { raw: { width, height, channels: 4 } })
    .resize(2048, 2048, {
      kernel: sharp.kernel.lanczos3,
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .sharpen({
      sigma: 1.2,
      m1: 2.0,
      m2: 0.6
    })
    .png({
      compressionLevel: 8,
      adaptiveFiltering: true
    })
    .toBuffer();

  await sharp(finalBuffer).toFile(outputPath);
  console.log('Successfully saved perfected portrait to:', outputPath);
}

fixPortrait().catch(err => {
  console.error('Error fixing portrait:', err);
  process.exit(1);
});
