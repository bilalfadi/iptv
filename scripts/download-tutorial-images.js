const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE = 'https://iptvusa4k.com/wp-content/uploads/';
const OUT = path.join(__dirname, '..', 'public', 'tutorial-iptvusa4k');

const files = [
  '2024/02/firestick1.webp', '2024/02/fire-2.png', '2024/02/fire3.png', '2024/02/fire4.png',
  '2024/02/fre5.webp', '2024/02/fi7.webp', '2024/02/fi8.webp', '2024/02/fire8.webp', '2024/02/fire9.webp',
  '2024/02/10.webp', '2024/02/11.webp', '2024/02/12.webp', '2024/02/13.webp', '2024/02/14.webp',
  '2024/02/155.webp', '2024/02/16.webp', '2024/02/17.webp', '2024/02/18.webp', '2024/02/19.webp',
  '2024/02/TV1.webp', '2024/02/a.webp',
  '2024/03/an1.webp', '2024/03/an2.webp',
  '2024/03/ma1.png', '2024/03/ma2.png', '2024/03/ma3.png', '2024/03/ma4.png', '2024/03/ma5.jpg',
];

function download(url) {
  return new Promise((resolve, reject) => {
    const outPath = path.join(OUT, url.replace(BASE, '').replace(/\//g, path.sep));
    const dir = path.dirname(outPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const file = fs.createWriteStream(outPath);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(outPath);
        return download(res.headers.location).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(outPath); });
    }).on('error', (err) => { file.close(); fs.unlinkSync(outPath); reject(err); });
  });
}

(async () => {
  for (const f of files) {
    const url = BASE + f;
    try {
      await download(url);
      console.log('OK:', f);
    } catch (e) {
      console.error('FAIL:', f, e.message);
    }
  }
})();
