const sharp = require('sharp');

async function buildCard() {
  try {
    // Photo moved down — starts at y=80 inside the frame
    const photo = await sharp('public/assets/fayaz.jpg')
      .resize(370, 410, { fit: 'cover', position: 'top' })
      .toBuffer();

    const svgDesign = `
      <svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#0a0a0f"/>
            <stop offset="50%" stop-color="#12131c"/>
            <stop offset="100%" stop-color="#060609"/>
          </linearGradient>
          <linearGradient id="cardGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="100%" stop-color="#f8fafc"/>
          </linearGradient>
          <linearGradient id="borderGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#cbd5e1" stop-opacity="0.5"/>
            <stop offset="50%" stop-color="#cbd5e1" stop-opacity="0.2"/>
            <stop offset="100%" stop-color="#cbd5e1" stop-opacity="0.5"/>
          </linearGradient>
          <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#64b5f6" stop-opacity="0"/>
            <stop offset="50%" stop-color="#64b5f6"/>
            <stop offset="100%" stop-color="#64b5f6" stop-opacity="0"/>
          </linearGradient>
        </defs>

        <style>
          .name-text { font-family: 'Inter', 'Segoe UI', Arial, sans-serif; font-size: 26px; font-weight: 800; fill: #0f172a; text-anchor: middle; letter-spacing: 0.5px; }
          .tag-text  { font-family: 'Inter', 'Segoe UI', Arial, sans-serif; font-size: 11px; font-weight: 500; fill: #475569; text-anchor: middle; letter-spacing: 1.2px; }
        </style>

        <!-- Full canvas background wipe -->
        <rect width="1024" height="1024" fill="url(#bgGrad)" />

        <!-- ===== LEFT CARD ===== -->
        <rect x="25" y="10" width="462" height="740" rx="24" fill="url(#cardGrad)" />
        <rect x="25" y="10" width="462" height="740" rx="24" stroke="url(#borderGrad)" stroke-width="1.5" fill="none" />

        <!-- Small top spacer bar -->
        <rect x="165" y="22" width="182" height="3" rx="1.5" fill="#64b5f6" opacity="0.5" />

        <!-- Photo frame — moved DOWN to y=80 -->
        <rect x="71" y="80" width="378" height="440" rx="16" fill="#ffffff" />
        <rect x="71" y="80" width="378" height="440" rx="16" stroke="#cbd5e1" stroke-opacity="0.35" stroke-width="1.5" fill="none" />

        <!-- Accent line below photo -->
        <rect x="120" y="528" width="278" height="2" rx="1" fill="url(#accentGrad)" />

        <!-- Name box below photo (no role text) -->
        <rect x="71" y="542" width="378" height="62" rx="14" fill="#ffffff" opacity="0.95" />
        <rect x="71" y="542" width="378" height="62" rx="14" stroke="#cbd5e1" stroke-opacity="0.45" fill="none" />
        <text x="260" y="581" class="name-text">Shaik Mohammed Fayaz</text>

        <!-- Footer tag -->
        <rect x="71" y="622" width="378" height="40" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-opacity="0.25" />
        <text x="260" y="647" class="tag-text">ID: SMF-2026 • PORTFOLIO</text>

        <!-- ===== RIGHT CARD ===== -->
        <rect x="537" y="10" width="462" height="740" rx="24" fill="url(#cardGrad)" />
        <rect x="537" y="10" width="462" height="740" rx="24" stroke="url(#borderGrad)" stroke-width="1.5" fill="none" />

        <!-- Small top spacer bar -->
        <rect x="677" y="22" width="182" height="3" rx="1.5" fill="#64b5f6" opacity="0.5" />

        <!-- Photo frame — moved DOWN to y=80 -->
        <rect x="583" y="80" width="378" height="440" rx="16" fill="#ffffff" />
        <rect x="583" y="80" width="378" height="440" rx="16" stroke="#cbd5e1" stroke-opacity="0.35" stroke-width="1.5" fill="none" />

        <!-- Accent line below photo -->
        <rect x="632" y="528" width="278" height="2" rx="1" fill="url(#accentGrad)" />

        <!-- Name box below photo (no role text) -->
        <rect x="583" y="542" width="378" height="62" rx="14" fill="#ffffff" opacity="0.95" />
        <rect x="583" y="542" width="378" height="62" rx="14" stroke="#cbd5e1" stroke-opacity="0.45" fill="none" />
        <text x="772" y="581" class="name-text">Shaik Mohammed Fayaz</text>

        <!-- Footer tag -->
        <rect x="583" y="622" width="378" height="40" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-opacity="0.25" />
        <text x="772" y="647" class="tag-text">ID: SMF-2026 • PORTFOLIO</text>
      </svg>
    `;

    // Place photo inside the frame starting at top=84, matching frame y=80+4 padding
    await sharp(Buffer.from(svgDesign))
      .composite([
        { input: photo, top: 84,  left: 75  },
        { input: photo, top: 84,  left: 587 }
      ])
      .png()
      .toFile('public/assets/card_fayaz.png');

    console.log('Done! Card regenerated — photo moved down, role text removed.');
  } catch (err) {
    console.error('Error:', err);
  }
}

buildCard();
