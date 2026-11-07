# Panduan Website Toko Robux

## Isi folder
- `index.html` : website utama
- `config.js` : nomor WhatsApp, nama toko, nama maskot (file yang sering diubah)
- `admin.html` : alat bantu ganti nomor (buka lewat `alamatwebsitekamu.netlify.app/admin`)
- `testi/` : folder foto testimoni (taruh foto di sini)
- `buat-daftar.js` : membuat daftar foto otomatis (dipakai Netlify, jangan dihapus)
- `assets/avatar.webp` : avatar maskot toko
- `netlify.toml` : pengaturan Netlify (jangan dihapus)

## Ganti nomor WhatsApp
1. Buka `alamatwebsitekamu.netlify.app/admin`
2. Ketik nomor baru (format bebas: 0877..., +62877..., 62877...)
3. Klik **Tes buka WhatsApp** untuk memastikan nomornya benar
4. Klik **Unduh config.js**
5. Ganti `config.js` lama di folder website dengan yang baru
6. Upload ulang ke Netlify (lihat di bawah)

Semua tombol "Beli", tombol WhatsApp mengambang, tombol kirim bukti bayar,
dan tulisan nomor di bagian kontak ikut berubah otomatis.

## Upload / publish di Netlify
Pertama kali:
1. Buka https://app.netlify.com/drop
2. Seret seluruh folder website (bukan zip-nya) ke halaman itu
3. Netlify memberi alamat `xxxx.netlify.app`. Nama alamatnya bisa diganti di Site configuration.

Setiap kali update (misalnya ganti nomor):
1. Masuk ke situs kamu di Netlify, buka tab **Deploys**
2. Seret lagi seluruh folder website ke area upload di halaman itu
3. Tunggu sampai statusnya **Published**

Kalau websitenya terhubung ke GitHub: cukup edit `config.js` langsung di GitHub,
Netlify akan memperbarui situs otomatis.

## Ganti avatar
Ganti file `assets/avatar.webp` dengan gambar baru bernama sama (PNG/WebP transparan paling bagus).

## Tambah foto testimoni
Taruh foto (JPG/PNG/WEBP) di folder `testi`. Subfolder boleh (misalnya `testi/Oktober`).
Pakai foto asli dari galeri/WhatsApp supaya tajam.

Foto yang sudah ada di folder `testi` sudah diperbesar 2x dan dipertajam supaya tidak burem
saat dibuka di HP layar tajam. Foto aslinya disimpan di `testi/.asli` (folder tersembunyi,
tidak dipakai website) — jangan dihapus kalau mau mengolah ulang fotonya.

- Lewat GitHub: buka folder `testi` di repository, klik **Add file**, **Upload files**, pilih foto, **Commit changes**.
  Netlify membuat daftar foto sendiri dan website langsung memuat foto baru.
- Lewat seret folder ke Netlify: buka `/admin`, bagian **Daftar foto testimoni**, pilih foto,
  unduh `daftar.json`, taruh di folder `testi`, lalu upload ulang folder website.

Link postimg lama hanya dipakai sebagai cadangan selama folder `testi` masih kosong.
