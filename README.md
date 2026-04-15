# Food Application

Aplikasi web Vue.js untuk mencari dan menjelajahi resep makanan berdasarkan bahan-bahan. Aplikasi ini memanfaatkan API TheMealDB untuk menyediakan informasi resep, bahan, dan video tutorial.

## Dokumentasi

- [Dokumentasi API](docs/API.md) - Detail endpoint API yang digunakan
- [Arsitektur Aplikasi](docs/ARCHITECTURE.md) - Struktur dan arsitektur kode

## Fitur Utama

- **Pencarian Bahan Makanan**: Cari bahan makanan untuk menemukan resep yang relevan.
- **Daftar Bahan**: Lihat daftar bahan makanan dengan gambar.
- **Detail Resep**: Lihat detail lengkap resep termasuk instruksi, bahan, dan video YouTube.
- **Pagination**: Navigasi mudah melalui daftar bahan.
- **Responsive Design**: Desain yang responsif menggunakan Bootstrap.

## Teknologi yang Digunakan

- **Vue.js 3**: Framework JavaScript untuk membangun antarmuka pengguna.
- **Vue Router**: Untuk routing dan navigasi halaman.
- **Vuex**: Untuk manajemen state aplikasi.
- **Axios**: Untuk melakukan HTTP requests ke API.
- **Bootstrap 5**: Untuk styling dan komponen UI.
- **TheMealDB API**: Sumber data resep dan bahan makanan.

## Persyaratan Sistem

- Node.js (versi 14 atau lebih tinggi)
- npm atau yarn

## Instalasi

1. Clone repository ini:

   ```
   git clone https://github.com/kisrakap/cmlabs-frontend-fulltime-test.git
   ```

2. Masuk ke direktori proyek:

   ```
   cd cmlabs-frontend-fulltime-test
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Menjalankan Aplikasi

### Development Mode

```
npm run serve
```

Aplikasi akan berjalan di `http://localhost:8080`.

### Production Build

```
npm run build
```

Build akan tersimpan di folder `dist`.

## Struktur Proyek

```
src/
├── assets/          # Asset statis (gambar, dll.)
├── components/      # Komponen Vue reusable
├── router/          # Konfigurasi routing
├── store/           # Vuex store
├── views/           # Halaman utama aplikasi
│   ├── HomeView.vue     # Halaman utama dengan pencarian bahan
│   ├── AboutView.vue    # Halaman detail bahan (belum diimplementasi penuh)
│   └── MealDetail.vue   # Halaman detail resep
├── App.vue          # Komponen root
└── main.js          # Entry point aplikasi
```

## API yang Digunakan

Aplikasi ini menggunakan TheMealDB API:

- `https://www.themealdb.com/api/json/v1/1/list.php?i=list` - Mendapatkan daftar bahan.
- `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}` - Mencari resep berdasarkan bahan.
- `https://www.themealdb.com/api/json/v2/1/lookup.php?i={id}` - Mendapatkan detail resep berdasarkan ID.

## Penggunaan

1. Buka aplikasi di browser.
2. Di halaman utama, masukkan nama bahan makanan di kolom pencarian.
3. Klik "Search" untuk mencari resep yang menggunakan bahan tersebut.
4. Klik pada bahan untuk melihat resep terkait.
5. Klik pada resep untuk melihat detail lengkap termasuk instruksi dan video.

## Kontribusi

1. Fork repository ini.
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`).
3. Commit perubahan Anda (`git commit -m 'Add some AmazingFeature'`).
4. Push ke branch (`git push origin feature/AmazingFeature`).
5. Buat Pull Request.

## Lisensi

Proyek ini menggunakan lisensi ISC.

## Kontak

- GitHub: [kisrakap](https://github.com/kisrakap)
- Repository: [cmlabs-frontend-fulltime-test](https://github.com/kisrakap/cmlabs-frontend-fulltime-test)

## Catatan Pengembang

Aplikasi ini dibuat sebagai bagian dari tes frontend fulltime di CMLabs. Beberapa fitur mungkin belum diimplementasi sepenuhnya atau memerlukan perbaikan lebih lanjut.
