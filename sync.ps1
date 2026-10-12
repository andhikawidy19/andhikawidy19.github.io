# Auto Sync & Merge Script for andhikawidy19.github.io
# Melakukan git pull (merge otomatis), commit perubahan lokal, dan git push via SSH

$ErrorActionPreference = "Stop"
$repoPath = $PSScriptRoot

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "  Auto Sync: andhikawidy19.github.io" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan

Set-Location -Path $repoPath

try {
    # 1. Pastikan remote mengarah ke SSH
    $currentRemote = git remote get-url origin
    if ($currentRemote -notlike "git@github.com*") {
        Write-Host "Mengubah remote URL ke SSH..." -ForegroundColor Yellow
        git remote set-url origin git@github.com:andhikawidy19/andhikawidy19.github.io.git
    }

    # 2. Fetch & Merge update terbaru dari GitHub
    Write-Host "[1/3] Mengambil & merge update terbaru dari GitHub (main)..." -ForegroundColor Cyan
    git pull origin main --no-rebase

    # 3. Cek apakah ada perubahan lokal
    $status = git status --porcelain
    if ($status) {
        Write-Host "[2/3] Perubahan lokal terdeteksi. Menambahkan dan melakukan commit..." -ForegroundColor Yellow
        git add -A
        $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        git commit -m "Auto update: $timestamp"

        # 4. Push ke GitHub
        Write-Host "[3/3] Melakukan push ke GitHub (main)..." -ForegroundColor Cyan
        git push origin main
        Write-Host "`n[SUKSES] Perubahan berhasil di-push ke GitHub!" -ForegroundColor Green
        Write-Host "Website akan terupdate otomatis di: https://andhikawidy19.github.io" -ForegroundColor Green
    } else {
        Write-Host "`n[INFO] Tidak ada perubahan lokal. Repositori sudah up-to-date." -ForegroundColor Green
    }
} catch {
    Write-Host "`n[ERROR] Terjadi kendala saat sinkronisasi: $_" -ForegroundColor Red
    Write-Host "Pastikan SSH key sudah ditambahkan ke GitHub Settings Anda." -ForegroundColor Yellow
    exit 1
}
