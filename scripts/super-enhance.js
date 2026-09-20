const sharp = require('sharp');
const path = require('path');

async function superEnhance() {
  const inputPng = path.join(__dirname, '../public/assets/jagan-profile.png');
  const outputPng = path.join(__dirname, '../public/assets/jagan-profile.png');

  console.log('Enhancing portrait with 2048x2048 Lanczos3 upscaling and unsharp masking...');

  // 1. Load image and apply upscale with Lanczos3
  // 2. Apply unsharp mask sharpening to bring out crisp facial details, beard, hair, and suit texture
  const enhancedBuffer = await sharp(inputPng)
    .resize(2048, 2048, {
      kernel: sharp.kernel.lanczos3,
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .sharpen({
      sigma: 1.5,   // radius of sharpening
      m1: 2.2,      // flat area threshold
      m2: 0.8       // jagged area threshold
    })
    .png({
      compressionLevel: 8,
      adaptiveFiltering: true
    })
    .toBuffer();

  await sharp(enhancedBuffer).toFile(outputPng);

  const meta = await sharp(outputPng).metadata();
  console.log('Successfully created ultra-crisp portrait:', meta.width, 'x', meta.height, meta.format, 'channels:', meta.channels);
}

superEnhance().catch(err => {
  console.error('Enhancement error:', err);
  process.exit(1);
});
