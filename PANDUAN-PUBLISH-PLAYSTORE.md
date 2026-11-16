# BCLinnk – Panduan Publish ke Google Play Store

Aplikasi: **BCLinnk** · Package name: `com.bclinnk.cm` · Versi `1.0` (versionCode 1)
Proyek: `C:\Users\amert\Downloads\BCLinnk App`

## 0. File hasil build
| File | Fungsi |
|---|---|
| `dist\BCLinnk.aab` | **Di-upload ke Play Store** (wajib format AAB) |
| `dist\BCLinnk.apk` | Untuk install/test langsung di HP Android |
| `keystore\bclinnk-upload.jks` + `android\keystore.properties` | **Kunci tanda tangan (upload key)** |

> [!CAUTION]
> **Backup folder `keystore\` dan file `android\keystore.properties`** ke tempat aman (Google Drive pribadi, flashdisk). Jika hilang, Anda tidak bisa upload update tanpa proses reset kunci ke Google. Jangan dibagikan ke publik.

## 1. Test APK dulu di HP
1. Kirim `dist\BCLinnk.apk` ke HP Android (WhatsApp/Drive/kabel USB).
2. Buka file → izinkan "Install dari sumber tidak dikenal" → Install.
3. Cek: login, navigasi, tombol Back, upload file, logout, dan tampilan tanpa internet.

## 2. Buat akun Google Play Console
1. Buka https://play.google.com/console → daftar pakai akun Google.
2. Pilih jenis akun:
   - **Organisasi** (disarankan untuk perusahaan BCLinnk) – butuh **D-U-N-S Number** (gratis, urus di dnb.com, ±1–2 minggu).
   - **Personal** – lebih cepat, tapi **wajib closed testing 12 tester selama 14 hari** sebelum boleh rilis Production.
3. Bayar biaya pendaftaran **USD 25** (sekali seumur hidup).
4. Verifikasi identitas (KTP / dokumen perusahaan) dan nomor HP.

## 3. Buat aplikasi
**Play Console → Create app**
- App name: `BCLinnk`
- Default language: Indonesian (atau English)
- App or game: **App** · Free or paid: **Free**
- Centang pernyataan kebijakan → **Create app**

## 4. Lengkapi "Set up your app" (Dashboard)
| Bagian | Isian yang disarankan |
|---|---|
| **Privacy policy** | URL kebijakan privasi (wajib), mis. `https://bclinnk.com/privacy-policy` |
| **App access** | Pilih "All or some functionality is restricted" → **berikan akun demo** (username + password) agar reviewer Google bisa login. *Ini penyebab penolakan paling umum!* |
| **Ads** | No, tidak ada iklan |
| **Content rating** | Isi kuesioner → kategori Utility/Business → hasil biasanya "Everyone" |
| **Target audience** | 18+ |
| **News app** | No |
| **Data safety** | Isi sesuai data yang dikumpulkan web (email, nama, data akun). Dienkripsi saat transit: **Yes** (HTTPS). Sediakan cara hapus akun (URL/email) |
| **Government app / Financial features / Health** | No (kecuali relevan) |
| **App category** | Business · Email kontak wajib diisi |

## 5. Store listing (Main store listing)
| Aset | Ketentuan |
|---|---|
| App name | maks 30 karakter – `BCLinnk` |
| Short description | maks 80 karakter, mis. *"Kelola channel manager BCLinnk dengan mudah dari genggaman."* |
| Full description | maks 4000 karakter – jelaskan fitur dashboard |
| App icon | **512×512 PNG** → sudah tersedia: `assets\playstore-icon-512.png` |
| Feature graphic | **1024×500 PNG/JPG** |
| Phone screenshots | min. **2** (disarankan 4–8), rasio 9:16, mis. 1080×1920 |
| Tablet screenshots | opsional (wajib jika ingin tampil di tablet) |

Tips screenshot: install APK di HP, login, ambil screenshot halaman dashboard, laporan, pengaturan, dll.

## 6. Upload AAB & rilis
### Akun Personal (wajib closed testing dulu)
1. **Test and release → Testing → Closed testing → Create track**.
2. Tambah daftar tester (min. **12 email Gmail**) → simpan.
3. **Create new release** → Play App Signing: pilih **"Use Google-generated key"** (default, disarankan).
4. Upload `dist\BCLinnk.aab` → Release name `1.0` → Release notes → **Next → Save → Send for review**.
5. Bagikan link opt-in ke tester; mereka harus install & tetap ikut **14 hari berturut-turut**.
6. Setelah 14 hari → **Dashboard → Apply for production access** → jawab kuesioner → setelah disetujui buat release di **Production**.

### Akun Organisasi
1. **Test and release → Production → Create new release**.
2. Upload `dist\BCLinnk.aab` → isi release notes → **Next → Save → Send for review**.
3. Pilih negara (Countries/regions) → Indonesia atau semua.

Review biasanya **beberapa jam – 7 hari**.

> [!WARNING]
> **Risiko kebijakan "Minimum Functionality" (Webview).** Google bisa menolak aplikasi yang hanya membungkus website. Peluang lolos lebih besar karena ini dashboard khusus akun (bukan website publik), namun pastikan: akun demo berfungsi, tampilan rapi di mobile (responsif), dan deskripsi menjelaskan bahwa ini aplikasi untuk pelanggan/mitra BCLinnk.

## 7. Cara update aplikasi nanti
Karena aplikasi memuat langsung `https://cm.bclinnk.com/dashboard`, **perubahan di website otomatis tampil di aplikasi tanpa update di Play Store**.
Update APK hanya perlu bila mengganti ikon/nama/fitur native:
1. Edit `android\app\build.gradle` → naikkan `versionCode` (2, 3, …) dan `versionName` (`1.1`, …).
2. Jalankan: `powershell -ExecutionPolicy Bypass -File .\build-android.ps1`
3. Upload `dist\BCLinnk.aab` baru di Play Console.

## 8. iOS (App Store) – nanti
Folder `ios\` sudah siap. Yang dibutuhkan:
- **Mac dengan Xcode** (atau layanan cloud build seperti Codemagic / Ionic Appflow / GitHub Actions macOS).
- **Apple Developer Program** USD 99/tahun.
- Di Mac: `npm install` → `npx cap sync ios` → `npx cap open ios` → atur Team & Bundle ID `com.bclinnk.cm` → **Product → Archive → Distribute App → App Store Connect**.
- Apple lebih ketat soal webview (Guideline 4.2) – disarankan menambah fitur native (mis. push notification) sebelum submit.
