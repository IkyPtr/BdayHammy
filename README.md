# Relationship Website Mobile
Sebuah website untuk hubungan LDR (menghitung hari sejak jadian, isi pesan tertentu dengan beberapa kenangan berupa foto dan beberapa lagu) dan ucapan ulang tahun
## 🚀 Instalasi

### 1️⃣ Clone Repo

```bash
git clone https://github.com/rheinatamara/relationship_website_mobile.git
cd relationship_website_mobile
```

### 2️⃣ Instal Dependensi

Pastikan kamu sudah install **[Node.js](https://nodejs.org/)** Lalu, jalankan:

```bash
npm install
```

### 3️⃣ cara dev server (PAKAI NPM)

```bash
npm run dev
```

### 4️⃣ Akses 

Buka browsermu **[http://localhost:5173/](http://localhost:5173/)** untuk lihat hasil

---

### ** Menambahkan Gambar & Pesan Pribadi**
Untuk menambahkan gambar Anda sendiri, letakkan di **`src/assets/`** sesuai dengan subfolder yang benar:

📌 **Gambar Pesan** (digunakan pada halaman Rekap Pesan):
- Lokasi: `src/assets/`
- Format penamaan: `MessageImage1.png`, `MessageImage2.png`, `MessageImage3.png`, dan seterusnya.

📌 **Galeri Gambar** (digunakan pada halaman Rekap Gambar):
- Lokasi: `src/assets/`
- Format penamaan: `Picture1.png`, `Picture2.png`, `Picture3.png`, dan seterusnya.

📌 **Sampul Album Musik** (digunakan pada halaman Rekap Musik):
- Lokasi: `src/assets/music/`
- Format penamaan: `1.png`, `2.png`, `3.png`, dan seterusnya.
- **Urutan gambar mengikuti daftar dalam `config.js` dari bawah ke atas.**
- **Contoh:**
- Lagu terakhir dalam `config.js` (`Sunsetz - Cigarettes After Sex`) harus menjadi `1.png`
- Lagu kedua terakhir (`Kiss Me Thru The Phone - Soulja Boy, Sammie`) menjadi `2.png`
- Lagu ketiga terakhir (`Sparks - Coldplay`) menjadi `3.png`

📌 **Gambar Latar & Dekorasi**
- `src/assets/fireworks.png` → Latar belakang untuk halaman penutup.
- `src/assets/christmas.png` → Dekorasi untuk halaman penutup.

Jika Anda menambahkan gambar baru, **pertahankan format yang benar** agar aplikasi dapat memuatnya dengan baik! 🎉

---

## 🖌️ Styling
Proyek ini menggunakan **[Tailwind CSS][https://tailwindcss.com/)\*\*](https://tailwindcss.com/**) untuk styling.
- Anda dapat mengubah gaya di `tailwind.config.js`
- Tambahkan atau hapus kelas Tailwind di file `.jsx`
- Semuanya sepenuhnya responsif dan **mobile-first** 🎨✨

---

## ⚠️ Pengaturan Lanjutan (Untuk Developer)
> **JANGAN DIUBAH KECUALI ANDA TAHU APA YANG ANDA LAKUKAN** ⚠️

Konfigurasi tertentu **sebaiknya tidak diubah** kecuali Anda sedang memodifikasi struktur aplikasi:

---

## 📜 Kesimpulan
Proyek ini dirancang agar **mudah dikustomisasi dan digunakan**! 🎉 Cukup:
1️⃣ **Edit `config.js`** untuk mempersonalisasi teks
2️⃣ **Tambahkan gambar Anda sendiri** ke `src/assets/`
3️⃣ **Jalankan proyek** dan nikmati!
For any questions, **open an issue** on the repository. 🚀

