const sharp = require('sharp');
const fs = require('fs');

const source = 'public/assets/prince.png';
const backup = 'public/assets/prince_backup.png';

if (!fs.existsSync(source)) {
  console.error('Source file not found:', source);
  process.exit(1);
}

if (!fs.existsSync(backup)) {
  fs.copyFileSync(source, backup);
  console.log('Backup created at', backup);
}

const svg = `
<svg width="1280" height="1500" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="1120" width="1280" height="320" fill="#000000" opacity="0.85" />
  <text x="640" y="1350" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="84" font-weight="700" fill="#ffffff">Name = Fayaz Singh</text>
</svg>
`;

sharp(source)
  .composite([{ input: Buffer.from(svg), blend: 'over' }])
  .toBuffer()
  .then((data) => {
    fs.writeFileSync(source, data);
    console.log('Updated prince.png text to Fayaz Singh');
  })
  .catch((err) => {
    console.error('Error updating image:', err);
    process.exit(1);
  });
