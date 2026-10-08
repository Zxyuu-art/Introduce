# IntroDuce

Profil pribadi Muhammad Hayal Zahri, dibuat dengan Java 25, Spring Boot, dan Thymeleaf. Konten profil tersedia dalam bahasa Inggris dan Indonesia; tombol bahasa mengganti deskripsi secara langsung tanpa layanan terjemahan eksternal.

## Menjalankan secara lokal

Prasyarat: JDK 25 atau lebih baru dan Maven 3.9+.

```powershell
mvn spring-boot:run
```

Buka `http://localhost:8080`.

Untuk membuat dan menjalankan JAR:

```powershell
mvn clean package
java -jar target/introduce-0.0.1-SNAPSHOT.jar
```

## Kontak profil

- WhatsApp: https://wa.me/6282179671166
- Instagram: https://www.instagram.com/zxyuu.21
- TikTok: https://www.tiktok.com/@z.xyuu?_r=1&_t=ZS-9AO1VzYzSaK

Foto pada halaman adalah foto konteks kolaborasi belajar dari Unsplash, bukan foto pemilik profil. Google Fonts dan foto memerlukan koneksi internet; konten dan tautan utama tetap disajikan oleh aplikasi.

## Deploy

Aplikasi ini adalah server Spring Boot. Vercel cocok untuk frontend statis dan fungsi serverless, tetapi tidak menjalankan server Spring Boot sebagai proses web persisten secara langsung. Untuk menerapkan aplikasi ini tanpa mengubah arsitektur, gunakan layanan hosting Java seperti Render atau Railway: hubungkan repositori, gunakan perintah build `mvn clean package`, lalu perintah start `java -jar target/introduce-0.0.1-SNAPSHOT.jar`. Aplikasi membaca port dari variabel lingkungan `PORT` dan memakai port 8080 secara lokal.

Jika Vercel merupakan persyaratan mutlak, frontend perlu dipisah menjadi situs statis dan backend Java dipindahkan ke hosting Java terpisah; konfigurasi tersebut belum termasuk dalam proyek ini.

## Struktur

- `src/main/java`: aplikasi Spring Boot dan route halaman profil.
- `src/main/resources/templates`: template Thymeleaf.
- `src/main/resources/static`: stylesheet dan interaksi bahasa/animasi.