# Dokumentasi API

Aplikasi Food Application menggunakan TheMealDB API untuk mendapatkan data resep dan bahan makanan. Berikut adalah dokumentasi endpoint API yang digunakan dalam aplikasi.

## TheMealDB API

TheMealDB adalah database resep makanan gratis yang menyediakan API untuk pengembang.

### Endpoint yang Digunakan

#### 1. Daftar Bahan Makanan

- **URL**: `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
- **Method**: GET
- **Deskripsi**: Mendapatkan daftar semua bahan makanan yang tersedia.
- **Response**:
  ```json
  {
    "meals": [
      {
        "idIngredient": "1",
        "strIngredient": "Chicken",
        "strDescription": "Chicken is a type of poultry...",
        "strType": null
      }
      // ... lebih banyak bahan
    ]
  }
  ```

#### 2. Cari Resep berdasarkan Bahan

- **URL**: `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}`
- **Method**: GET
- **Parameter**: `i` - Nama bahan makanan (contoh: "chicken")
- **Deskripsi**: Mendapatkan daftar resep yang menggunakan bahan tertentu.
- **Response**:
  ```json
  {
    "meals": [
      {
        "strMeal": "Chicken Curry",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/...",
        "idMeal": "52839"
      }
      // ... lebih banyak resep
    ]
  }
  ```

#### 3. Detail Resep

- **URL**: `https://www.themealdb.com/api/json/v2/1/lookup.php?i={id}`
- **Method**: GET
- **Parameter**: `i` - ID resep (contoh: "52839")
- **Deskripsi**: Mendapatkan detail lengkap resep berdasarkan ID.
- **Response**:
  ```json
  {
    "meals": [
      {
        "idMeal": "52839",
        "strMeal": "Chicken Curry",
        "strDrinkAlternate": null,
        "strCategory": "Chicken",
        "strArea": "Indian",
        "strInstructions": "Instructions for cooking...",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/...",
        "strTags": "Curry,Chicken",
        "strYoutube": "https://www.youtube.com/watch?v=...",
        "strIngredient1": "Chicken",
        "strMeasure1": "500g",
        "strIngredient2": "Onion",
        "strMeasure2": "1",
        // ... hingga strIngredient20 dan strMeasure20
        "strSource": "https://www.bbcgoodfood.com/recipes/...",
        "strImageSource": null,
        "strCreativeCommonsConfirmed": null,
        "dateModified": null
      }
    ]
  }
  ```

### Struktur Data

#### Bahan (Ingredient)

- `idIngredient`: ID unik bahan
- `strIngredient`: Nama bahan
- `strDescription`: Deskripsi bahan (opsional)
- `strType`: Tipe bahan (opsional)

#### Resep (Meal)

- `idMeal`: ID unik resep
- `strMeal`: Nama resep
- `strCategory`: Kategori makanan
- `strArea`: Asal daerah
- `strInstructions`: Instruksi memasak
- `strMealThumb`: URL gambar thumbnail
- `strTags`: Tag terkait (dipisahkan koma)
- `strYoutube`: URL video YouTube
- `strIngredient1-20`: Bahan-bahan (hingga 20)
- `strMeasure1-20`: Takaran bahan (hingga 20)
- `strSource`: URL sumber resep

### Error Handling

API dapat mengembalikan response kosong atau null jika data tidak ditemukan. Pastikan untuk menangani kasus ini dalam kode aplikasi.

### Rate Limiting

TheMealDB API tidak memiliki rate limiting yang ketat, tetapi gunakan dengan bijak untuk menghindari overload server.

### Lisensi

Data dari TheMealDB tersedia secara gratis untuk penggunaan non-komersial. Periksa [situs resmi](https://www.themealdb.com/) untuk informasi lisensi terbaru.
