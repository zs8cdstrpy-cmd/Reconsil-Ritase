# Reconcil Ritase (Catatan Ritase)

Aplikasi PWA offline untuk **catatan ritase harian dump truck**, rekap KM, dan **perkiraan gaji** (sesuai pola slip CKB / Weda Bay).

**Versi aplikasi:** v64  
**Service worker:** `ritase-v64`

Live: https://zs8cdstrpy-cmd.github.io/Reconsil-Ritase/

---

## Fitur utama

### Catat ritase
- 3 slot per hari, shift DS / NS / OFF
- Jarak patokan: POS12 **43 km** · FENI **55 km** · Parkiran KR **30 km** (TOS6 PP khusus)
- Foto timesheet, autosave

### Periode buku
- Buka **29** · tutup **28**
- Tutup buku otomatis jika lewat tanggal tutup (bisa dibuka kembali)

### Gaji & slip
- Daily allowance default **Rp 900.000**
- Travel allowance: **1 bulan (540.000)** · **Triwulan (1.620.000)** · **Tidak ada (0)** — default Tidak ada
- Ritase = KM × tarif (default 2.566)
- BPJS, PPh 21, bandingkan gaji rekening, slip gaji

### Lainnya
- Cadangan JSON, multi-device lokal, PWA offline

---

## Update

Upload `index.html` + `sw.js` (versi cache naik) → commit main → di HP ketuk **Perbarui aplikasi**.
