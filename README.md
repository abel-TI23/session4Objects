# Tugas: Understanding More About Object and Function
**Mata Kuliah:** Pemrograman Berbasis Platform  
**Nama:** Abel Hendrik  

Repositori ini berisi implementasi 8 studi kasus (2 kasus per level) seputar manipulasi objek, methods, koleksi data, rekursi deep clone, dan validasi skema data pada JavaScript.

---

## Daftar Kasus yang Diselesaikan

### Level 1: Object Basics
* **Case 1 (Student Object):** Membuat objek mahasiswa dengan atribut `name`, `age`, dan `major`, lalu menampilkan nilai tiap properti ke konsol.
* **Case 4 (Dynamic Property Access):** Membuat objek buku dan fungsi utilitas `getProperty(object, key)` yang mengekstrak nilai properti secara dinamis menggunakan *bracket notation*.

### Level 2: Methods and Nested Objects
* **Case 1 (Rectangle Calculator):** Objek persegi panjang dengan method `getArea()` dan `getPerimeter()` yang memanfaatkan kata kunci `this`.
* **Case 2 (Bank Account Manager):** Objek rekening bank dengan method `deposit(amount)` dan `withdraw(amount)` dilengkapi guard clause untuk menolak input nominal negatif dan penarikan melebihi saldo (*overdraft*).

### Level 3: Object Collections and Transformations (Video 1)
* **Case 1 (Inventory Summary):** Menghitung total nilai inventaris (`price * stock`) dari array produk menggunakan `reduce()`, serta memfilter nama produk yang memiliki sisa stok di bawah 5.
* **Case 2 (Group Students by Major):** Mengelompokkan array data mahasiswa berdasarkan jurusannya (*group by major*) menghasilkan objek kamus (*dictionary-like*).

### Level 4: Object Design and Data Integrity (Video 2)
* **Case 1 (Deep Clone Function):** Mengimplementasikan algoritma kloning mendalam (`deepClone`) rekursif murni tanpa `JSON.stringify` atau `structuredClone`, dan membuktikan mutasi pada objek hasil klon tidak mempengaruhi objek asli.
* **Case 2 (Object Validator):** Fungsi `validate(object, schema)` yang mengevaluasi kelayakan objek berdasarkan aturan `required`, validasi tipe data (`typeof`), dan batas nilai minimal (`min`) pada tipe number, mengembalikan daftar error secara terperinci.

---

## Cara Menjalankan

Jalankan seluruh program sekaligus:
```bash
node index.js
```

Atau jalankan per level:
```bash
node level1_exercise.js
node level2_exercise.js
node level3_exercise.js
node level4_exercise.js
```
