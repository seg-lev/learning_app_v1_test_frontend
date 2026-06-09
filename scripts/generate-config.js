const fs = require('fs');
const path = require('path');

const apiUrl = process.env.API_URL || 'http://localhost:3000';
const out = path.join(__dirname, '..', 'config.js');

fs.writeFileSync(out, `window.API_BASE = ${JSON.stringify(apiUrl)};\n`);
console.log('Wrote config.js with API_BASE =', apiUrl);
