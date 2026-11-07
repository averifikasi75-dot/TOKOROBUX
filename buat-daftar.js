// Membuat testi/daftar.json otomatis dari semua foto di folder "testi" (termasuk subfolder).
// Dijalankan Netlify setiap kali website di-deploy dari GitHub (lihat netlify.toml).
// Bisa juga dijalankan manual:  node buat-daftar.js
const fs = require("fs");
const path = require("path");

const FOLDER = process.argv[2] || "testi";
const EXT = /\.(jpe?g|png|webp|gif|avif)$/i;

function scan(dir, pre = "") {
  let out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".")) continue;
    if (e.isDirectory()) out = out.concat(scan(path.join(dir, e.name), pre + e.name + "/"));
    else if (EXT.test(e.name)) out.push(pre + e.name);
  }
  return out;
}

const list = scan(FOLDER).sort((a, b) =>
  a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
);
fs.mkdirSync(FOLDER, { recursive: true });
fs.writeFileSync(path.join(FOLDER, "daftar.json"), JSON.stringify(list, null, 2) + "\n");
console.log(`daftar.json dibuat: ${list.length} foto di folder "${FOLDER}"`);
