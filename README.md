# Reconcil Ritase (Catatan Ritase)

Aplikasi PWA offline untuk **catatan ritase harian dump truck**, rekap KM, dan **perkiraan gaji** (sesuai pola slip CKB / Weda Bay).

**Versi aplikasi:** v63  
**Service worker:** `ritase-v63`

Live: https://zs8cdstrpy-cmd.github.io/Reconsil-Ritase/

---

## Isi paket

| File | Keterangan |
|------|------------|
| `index.html` | Aplikasi lengkap |
| `sw.js` | Service worker offline + update cache |
| `manifest.json` | PWA (Add to Home Screen) |
| `icon-192.png` / `icon-512.png` / `apple-touch-icon.png` | Ikon app |
| `README.md` | Dokumentasi ini |

---

## Fitur utama

### Catat ritase
- 3 slot per hari, shift DS / NS / OFF
- Loading & dumping + BD di jalan / lanjutan BD
- **Jarak patokan terkunci:** loading biasa → POS12 **43 km** · FENI **55 km** · Parkiran KR **30 km** (TOS6 PP & Parkiran KR khusus)
- Foto bukti timesheet (kamera / galeri), simpan IndexedDB
- Autosave ke perangkat

### Periode buku
- Buka **tanggal 29** · tutup **tanggal 28**
- **Tutup buku otomatis** jika hari ini sudah lewat tanggal tutup
- Tetap bisa **Buka kembali**
- Cadangan JSON otomatis (opsional) saat tutup buku / update app

### Gaji & slip
- Gaji pokok, insentif, **Daily allowance default Rp 900.000**
- Travel allowance On / Off (default On = Rp 540.000)
- Ritase = KM × tarif (default Rp 2.566/km)
- BPJS, PPh 21 (auto % atau nominal)
- Bandingkan gaji rekening → saran PPh
- Generate slip gaji (cetak / PDF browser)

### Lainnya
- Tab Lokasi, Rekap, Saran (WhatsApp)
- Import/export CSV & cadangan JSON
- Multi-perangkat: data lokal per HP (tidak saling timpa)

---

## Cara update

1. Ganti `index.html` + `sw.js` (versi cache naik)
2. Commit ke `main`
3. Di HP: online → **Perbarui aplikasi**
4. Disarankan unduh cadangan sebelum update besar

---

## Data

Data tersimpan di **browser HP**. Hapus data situs / ganti HP tanpa cadangan = data hilang.

Bukan dokumen resmi perusahaan; hitungan gaji bersifat perkiraan.
