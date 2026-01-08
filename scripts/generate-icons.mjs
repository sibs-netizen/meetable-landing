import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const publicDir = path.resolve('public');
const assetDir = path.join(publicDir, 'assets');

const svg = `
<svg width="768" height="768" viewBox="0 0 768 768" xmlns="http://www.w3.org/2000/svg">
  <rect width="768" height="768" rx="112" fill="#01687a"/>
  <g transform="translate(224 152)">
    <path d="M0 0h320l-144 196v168h-32V196L0 0z" fill="#004855"/>
    <rect x="120" y="364" width="80" height="12" rx="6" fill="#004855"/>
    <rect x="132" y="312" width="56" height="64" fill="#005b6b" rx="8"/>
    <path d="M64 28h192l-20 28H84L64 28z" fill="#ffffff" opacity="0.9"/>
  </g>
</svg>
`;

async function generate() {
  await mkdir(publicDir, { recursive: true });
  await mkdir(assetDir, { recursive: true });

  const basePng = path.join(publicDir, 'icon-512.png');
  await sharp(Buffer.from(svg))
    .resize(512, 512)
    .png()
    .toFile(basePng);

  const outputs = [
    { file: 'apple-touch-icon.png', size: 180 },
    { file: 'favicon-32x32.png', size: 32 },
    { file: 'favicon-16x16.png', size: 16 },
    { file: 'favicon-48x48.png', size: 48 },
    { file: 'icon-96.png', size: 96 },
    { file: 'icon-192.png', size: 192 },
  ];

  await Promise.all(
    outputs.map(({ file, size }) =>
      sharp(basePng)
        .resize(size, size)
        .png()
        .toFile(path.join(publicDir, file))
    )
  );

  const icoBuffer = await pngToIco([
    path.join(publicDir, 'favicon-16x16.png'),
    path.join(publicDir, 'favicon-32x32.png'),
    path.join(publicDir, 'favicon-48x48.png'),
  ]);

  await writeFile(path.join(publicDir, 'favicon.ico'), icoBuffer);

  console.log('Icons generated in /public');
}

generate().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
