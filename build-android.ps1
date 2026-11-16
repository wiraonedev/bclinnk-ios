# Build Android APK + AAB untuk BCLinnk
# Jalankan:  powershell -ExecutionPolicy Bypass -File .\build-android.ps1
$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
$tools = Join-Path $root ".tools"
$jdk = Get-ChildItem $tools -Directory -Filter "jdk-*" | Select-Object -First 1
$env:JAVA_HOME = $jdk.FullName
$env:ANDROID_HOME = Join-Path $tools "sdk"
$env:ANDROID_SDK_ROOT = $env:ANDROID_HOME
$env:Path = "$env:JAVA_HOME\bin;$env:Path"

Set-Location $root
& npx.cmd cap sync android
if ($LASTEXITCODE -ne 0) { throw "cap sync gagal" }

Set-Location (Join-Path $root "android")
"sdk.dir=$($env:ANDROID_HOME -replace '\\','\\')" | Set-Content -Encoding ascii local.properties
& .\gradlew.bat assembleRelease bundleRelease --no-daemon
if ($LASTEXITCODE -ne 0) { throw "Gradle build gagal" }

$dist = Join-Path $root "dist"
New-Item -ItemType Directory -Force $dist | Out-Null
Remove-Item "$dist\CM-BCLinnk.*" -Force -ErrorAction SilentlyContinue
Copy-Item "app\build\outputs\apk\release\app-release.apk" "$dist\BCLinnk.apk" -Force
Copy-Item "app\build\outputs\bundle\release\app-release.aab" "$dist\BCLinnk.aab" -Force
Write-Host "`nSelesai! File ada di: $dist" -ForegroundColor Green
Get-ChildItem $dist
