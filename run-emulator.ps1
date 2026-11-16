# Jalankan Android Emulator + install APK CM BCLinnk
# Pakai:  powershell -ExecutionPolicy Bypass -File .\run-emulator.ps1
$ErrorActionPreference = "Stop"
$root  = $PSScriptRoot
$tools = Join-Path $root ".tools"
$jdk   = Get-ChildItem $tools -Directory -Filter "jdk-*" | Select-Object -First 1
$env:JAVA_HOME        = $jdk.FullName
$env:ANDROID_HOME     = Join-Path $tools "sdk"
$env:ANDROID_SDK_ROOT = $env:ANDROID_HOME
$env:ANDROID_AVD_HOME = Join-Path $tools "avd"
$env:Path = "$env:JAVA_HOME\bin;$env:ANDROID_HOME\platform-tools;$env:Path"
$avd = "BCLinnk_Pixel"
$adb = Join-Path $env:ANDROID_HOME "platform-tools\adb.exe"

# Buat HP virtual sekali saja
if (-not (Test-Path (Join-Path $env:ANDROID_AVD_HOME "$avd.ini"))) {
    New-Item -ItemType Directory -Force $env:ANDROID_AVD_HOME | Out-Null
    "no" | & "$env:ANDROID_HOME\cmdline-tools\latest\bin\avdmanager.bat" create avd -n $avd `
        -k "system-images;android-35;google_apis;x86_64" -d "pixel_7" --force
    $cfg = Join-Path $env:ANDROID_AVD_HOME "$avd.avd\config.ini"
    Add-Content $cfg "hw.keyboard=yes`nhw.ramSize=3072`nhw.gpu.enabled=yes`nhw.gpu.mode=auto"
}

# Nyalakan emulator jika belum jalan
$running = (& $adb devices) -match "emulator-"
if (-not $running) {
    Start-Process (Join-Path $env:ANDROID_HOME "emulator\emulator.exe") -ArgumentList "-avd $avd -no-snapshot-save -no-boot-anim"
    Write-Host "Menunggu emulator menyala..."
    & $adb wait-for-device
    do { Start-Sleep 3; $boot = (& $adb shell getprop sys.boot_completed 2>$null) } while ($boot -notmatch "1")
}

Write-Host "Install APK..."
& $adb install -r (Join-Path $root "dist\BCLinnk.apk")
& $adb shell monkey -p com.bclinnk.cm -c android.intent.category.LAUNCHER 1 | Out-Null
Write-Host "Aplikasi BCLinnk sudah dibuka di emulator." -ForegroundColor Green
