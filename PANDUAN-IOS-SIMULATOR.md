# Coba BCLinnk iOS di Windows (Codemagic + Appetize)

Alur: **Laptop → GitHub → Codemagic (build di Mac cloud) → Appetize (iPhone virtual di browser)**
Semua gratis, tanpa Mac dan tanpa akun Apple Developer.

## Langkah 1 – Upload proyek ke GitHub (pakai GitHub Desktop)
1. Daftar akun di https://github.com (jika belum punya).
2. Download & install **GitHub Desktop**: https://desktop.github.com → login dengan akun GitHub.
3. Menu **File → Add local repository** → pilih folder `C:\Users\amert\Downloads\BCLinnk App`.
   - Muncul tulisan *"This directory does not appear to be a Git repository"* → klik **create a repository** → Name: `BCLinnk-IOS-V2` → **Create repository**.
4. Klik **Publish repository** → **centang "Keep this code private"** → **Publish**.

> File rahasia (keystore, password, backup kunci) dan folder besar (`.tools`, `node_modules`) **otomatis tidak ikut** karena sudah diatur di `.gitignore`. Sebelum publish, pastikan di daftar file kiri **tidak ada** `keystore`, `.jks`, `keystore.properties`, atau `BACKUP-KUNCI`.

## Langkah 2 – Build di Codemagic
1. Buka https://codemagic.io/signup → **Sign up with GitHub**.
2. **Add application** → pilih **GitHub** → pilih repo `BCLinnk-IOS-V2` → project type: **Ionic Capacitor App** (atau "Other") → **Finish**.
3. Codemagic otomatis membaca file `codemagic.yaml`. Klik **Start new build** → pilih branch `main` → workflow **iOS Simulator (untuk Appetize)** → **Start new build**.
4. Tunggu ±5–10 menit sampai status hijau ✅.
5. Di halaman build, bagian **Artifacts** → download **`BCLinnk-simulator.zip`** (jangan di-extract).

## Langkah 3 – Coba di Appetize
1. Buka https://appetize.io → **Sign up** (gratis).
2. Klik **Upload** → pilih `BCLinnk-simulator.zip` → platform otomatis terdeteksi **iOS**.
3. Setelah selesai, klik aplikasi → **Tap to play** → aplikasi jalan di iPhone virtual.
4. Di pengaturan device bisa ganti model (iPhone 15/16, iPad) dan versi iOS.
5. Link aplikasi bisa dibagikan ke tim untuk ikut mencoba.

## (Opsional) Upload otomatis ke Appetize
1. Appetize → **Account → API token** → buat & copy token.
2. Codemagic → app `bclinnk-app` → **Environment variables** → Name `APPETIZE_TOKEN`, Value = token, Group `appetize`, centang **Secret** → Add.
3. Di `codemagic.yaml`, hapus tanda `#` pada baris `# groups:` dan `#   - appetize`, lalu commit & push lewat GitHub Desktop.
4. Build berikutnya otomatis ter-upload; link ada di log langkah "Upload otomatis ke Appetize" (`publicURL`).

## Catatan
- Versi simulator **hanya untuk tes**, tidak bisa diinstall di iPhone asli atau dikirim ke App Store.
- Untuk iPhone asli (TestFlight) & App Store nanti dibutuhkan **Apple Developer Program (USD 99/tahun)** – workflow-nya bisa ditambahkan di file `codemagic.yaml` yang sama.
- Kuota gratis: Codemagic ±500 menit build/bulan, Appetize ±100 menit pemakaian/bulan.
