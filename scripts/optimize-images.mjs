import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const assetDir = path.resolve('public/assets');

const images = [
  {
    file: 'hero.jpg',
    formats: [
      { width: 1600, quality: 68 },
      { width: 2400, quality: 62 },
    ],
  },
  {
    file: 'pexels-taryn-elliott-6790327.jpg',
    formats: [
      { width: 640, quality: 70 },
      { width: 960, quality: 68 },
      { width: 1400, quality: 62 },
    ],
  },
  {
    file: 'pexels-olly-3762925.jpg',
    formats: [
      { width: 640, quality: 70 },
      { width: 960, quality: 68 },
      { width: 1400, quality: 62 },
    ],
  },
  {
    file: 'pexels-marlein-16021268.jpg',
    formats: [
      { width: 640, quality: 70 },
      { width: 960, quality: 68 },
      { width: 1400, quality: 62 },
    ],
  },
  {
    file: 'pexels-cottonbro-5018987.jpg',
    formats: [
      { width: 640, quality: 70 },
      { width: 960, quality: 68 },
      { width: 1400, quality: 62 },
    ],
  },
  {
    file: 'pexels-sebastian-coman-photography-1598188-3755083.jpg',
    formats: [
      { width: 640, quality: 70 },
      { width: 960, quality: 68 },
      { width: 1400, quality: 62 },
    ],
  },
  {
    file: 'grow-your-circle.jpg',
    formats: [
      { width: 640, quality: 70 },
      { width: 960, quality: 68 },
      { width: 1280, quality: 64 },
    ],
  },
  {
    file: 'thoughtfully-curated-tables.jpg',
    formats: [
      { width: 640, quality: 70 },
      { width: 960, quality: 68 },
      { width: 1280, quality: 64 },
    ],
  },
  {
    file: 'real-life-connection.jpg',
    formats: [
      { width: 640, quality: 70 },
      { width: 960, quality: 68 },
      { width: 1280, quality: 64 },
    ],
  },
  {
    file: 'meetable-logo.png',
    formats: [{ width: 512, quality: 80 }],
  },
];

async function fileExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function generate() {
  await mkdir(assetDir, { recursive: true });

  for (const image of images) {
    const inputPath = path.join(assetDir, image.file);
    const inputExists = await fileExists(inputPath);
    if (!inputExists) {
      console.warn(`⚠️  Skipping ${image.file} because it does not exist.`);
      continue;
    }

    for (const variant of image.formats) {
      const baseName = path.parse(image.file).name.replace(/\s+/g, '-').toLowerCase();
      const outputName = `${baseName}-${variant.width}.webp`;
      const outputPath = path.join(assetDir, outputName);

      const alreadyThere = await fileExists(outputPath);
      if (alreadyThere) {
        continue;
      }

      await sharp(inputPath)
        .resize({
          width: variant.width,
          withoutEnlargement: true,
        })
        .webp({
          quality: variant.quality,
          effort: 5,
        })
        .toFile(outputPath);

      console.info(`Optimized ${image.file} -> ${outputName}`);
    }
  }
}

generate().catch((error) => {
  console.error('Image optimization failed:', error);
  process.exitCode = 1;
});
