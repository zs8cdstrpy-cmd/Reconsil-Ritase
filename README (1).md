# Catatan Ritase

Aplikasi web untuk mencatat ritase harian dump truck: jarak loading ke dumping dihitung otomatis, ada rekap per loading dan dumping (termasuk BD di jalan), tambah lokasi sendiri, dan perkiraan gaji. Bisa dipakai tanpa sinyal setelah dibuka sekali.

## Pasang di HP
1. Buka alamat GitHub Pages repository ini di Safari (iPhone) atau Chrome (Android) saat ada sinyal.
2. iPhone: ketuk Bagikan, lalu Tambahkan ke Layar Utama. Android: menu Chrome, lalu Instal aplikasi atau Tambahkan ke layar utama.
3. Buka dari ikon di layar utama. Setelah itu aplikasi jalan tanpa sinyal.

## Periode buku
Buka buku tanggal 29 dan tutup buku tanggal 28 (bisa diubah di tab Gaji). Tiap periode punya catatan, rekap, dan hitungan gaji sendiri. Ketuk Tutup buku untuk mengunci catatan periode, dan + Periode baru untuk membuka periode berikutnya.

## Data
Semua catatan tersimpan di browser HP masing-masing, tidak dikirim ke mana pun. Unduh cadangan dari tab Gaji secara berkala. Jangan hapus data situs di pengaturan browser.

## Catatan
- Daftar lokasi dan jarak bawaan berasal dari data master PT. Weda Bay Nickel. Ubah di tab Lokasi.
- Nama, NIP, dan angka gaji dikosongkan. Isi sendiri di tab Gaji.
- Setelah mengganti file di repository, naikkan angka VERSI di `sw.js` (misalnya `ritase-v2`) supaya HP mengambil versi baru.
