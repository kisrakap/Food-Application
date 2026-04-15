# Arsitektur Aplikasi

Dokumen ini menjelaskan arsitektur dan struktur aplikasi Food Application.

## Overview

Food Application adalah aplikasi web single-page application (SPA) yang dibangun menggunakan Vue.js 3. Aplikasi ini menggunakan arsitektur komponen dengan state management menggunakan Vuex dan routing menggunakan Vue Router.

## Struktur Aplikasi

```
Food-Application/
├── public/                 # Asset publik
│   ├── index.html         # Template HTML utama
│   └── img/               # Gambar statis
├── src/                   # Source code
│   ├── assets/            # Asset aplikasi (CSS, gambar)
│   ├── components/        # Komponen reusable
│   │   └── Breadcumbs.vue # Komponen breadcrumb
│   ├── router/            # Konfigurasi routing
│   │   └── index.js       # Definisi routes
│   ├── store/             # Vuex store
│   │   └── index.js       # State management
│   ├── views/             # Halaman utama
│   │   ├── HomeView.vue   # Halaman utama
│   │   ├── AboutView.vue  # Halaman detail bahan
│   │   └── MealDetail.vue # Halaman detail resep
│   ├── App.vue            # Root component
│   └── main.js            # Entry point
├── docs/                  # Dokumentasi
├── babel.config.js        # Konfigurasi Babel
├── jsconfig.json          # Konfigurasi JavaScript
├── package.json           # Dependencies dan scripts
├── vue.config.js          # Konfigurasi Vue CLI
└── README.md              # Dokumentasi utama
```

## Arsitektur Komponen

### Root Component (App.vue)

- Mengelola layout global (header, footer, breadcrumb)
- Menggunakan router-view untuk rendering halaman aktif
- Menggunakan Bootstrap untuk styling

### Views

- **HomeView**: Halaman utama dengan pencarian dan daftar bahan
- **AboutView**: Halaman detail bahan (digunakan untuk route /meal/:id)
- **MealDetail**: Halaman detail resep dengan video

### Components

- **Breadcumbs**: Komponen navigasi breadcrumb

## State Management (Vuex)

Aplikasi menggunakan Vuex untuk mengelola state global:

### State

- `ings`: Array bahan makanan
- `meals`: Array resep hasil pencarian
- `meal`: Object detail resep tunggal
- `temp`: Array sementara untuk filtering
- `loading`: Status loading

### Mutations

- `setIngs`: Set daftar bahan
- `setSearchIngs`: Filter bahan berdasarkan query
- `setMeals`: Set daftar resep
- `reset`: Reset ke daftar bahan asli
- `setLoading`: Set status loading

### Actions

- `fetchIng`: Fetch daftar bahan dari API
- `search`: Cari resep berdasarkan bahan
- `searchIng`: Filter bahan lokal
- `fetchMeals`: Fetch resep berdasarkan bahan

## Routing

Menggunakan Vue Router dengan history mode:

- `/`: HomeView - Halaman utama
- `/meal/:id`: AboutView - Detail bahan (parameter: id bahan)
- `/mealDetail/:iddetail`: MealDetail - Detail resep (parameter: id resep)

## Data Flow

1. **Inisialisasi**: App dimuat, fetch daftar bahan dari API
2. **Pencarian**: User input query, filter bahan atau cari resep
3. **Navigasi**: Klik bahan -> route ke detail bahan
4. **Detail**: Klik resep -> fetch detail dari API dan tampilkan

## Dependencies Utama

- **Vue.js 3**: Framework utama
- **Vue Router 4**: Routing
- **Vuex 4**: State management
- **Axios**: HTTP client
- **Bootstrap 5**: CSS framework
- **jQuery**: Untuk komponen Bootstrap (meskipun Vue biasanya tidak memerlukan)
- **Video Embed Libraries**: Untuk embedding video YouTube

## Build dan Deployment

- **Development**: `npm run serve` - Hot reload server
- **Production**: `npm run build` - Build untuk production
- **PWA**: Menggunakan Vue CLI PWA plugin untuk progressive web app

## Performa

- **Lazy Loading**: Routes menggunakan dynamic import untuk code splitting
- **Pagination**: Membatasi jumlah item per halaman (50 items)
- **Caching**: Browser caching untuk asset statis
- **API Optimization**: Fetch data sesuai kebutuhan, hindari over-fetching

## Keamanan

- Tidak ada autentikasi user
- API calls ke TheMealDB (HTTPS)
- Input sanitization melalui Vue.js reactive binding
- CSP headers melalui Vue CLI configuration

## Testing

Saat ini belum ada test suite. Rekomendasi untuk implementasi:

- Unit tests dengan Vue Test Utils
- E2E tests dengan Cypress
- API mocking untuk tests

## Future Improvements

- Implementasi caching untuk API responses
- Offline support dengan service worker
- User authentication dan favorites
- Advanced search filters
- Recipe sharing functionality
