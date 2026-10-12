# Watch & Auto-Sync Script for andhikawidy19.github.io
# Memonitor folder secara otomatis: setiap ada perubahan file, langsung di-commit, di-merge, dan di-push ke GitHub.

$repoPath = $PSScriptRoot
Set-Location -Path $repoPath

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  Auto-Watcher Active: andhikawidy19.github.io" -ForegroundColor Cyan
Write-Host "  Setiap perubahan file akan otomatis di-push & merge ke GitHub" -ForegroundColor Cyan
Write-Host "  Tekan Ctrl+C untuk menghentikan monitoring." -ForegroundColor Gray
Write-Host "==========================================================" -ForegroundColor Cyan

# Pastikan remote SSH
git remote set-url origin git@github.com:andhikawidy19/andhikawidy19.github.io.git

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $repoPath
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true
$watcher.NotifyFilter = [System.IO.NotifyFilters]'FileName, LastWrite, CreationTime'

$lastSyncTime = [DateTime]::MinValue
$lockObj = New-Object Object

function Invoke-GitSync {
    try {
        $status = git status --porcelain
        if ($status) {
            Write-Host "`n[$((Get-Date).ToString('HH:mm:ss'))] Terdeteksi update file! Memulai proses auto-sync..." -ForegroundColor Yellow
            
            # Pull & merge remote terlebih dahulu untuk mencegah conflict
            git pull origin main --no-rebase 2>$null

            git add -A
            $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
            git commit -m "Auto update: $timestamp"
            
            Write-Host "[$((Get-Date).ToString('HH:mm:ss'))] Mengunggah (push) ke GitHub..." -ForegroundColor Cyan
            $pushResult = git push origin main 2>&1
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host "[$((Get-Date).ToString('HH:mm:ss'))] [SUKSES] Berhasil sync & push ke GitHub!" -ForegroundColor Green
                Write-Host "Website live di: https://andhikawidy19.github.io" -ForegroundColor Green
            } else {
                Write-Host "[$((Get-Date).ToString('HH:mm:ss'))] [GAGAL] Push gagal: $pushResult" -ForegroundColor Red
            }
        }
    } catch {
        Write-Host "[$((Get-Date).ToString('HH:mm:ss'))] Error: $_" -ForegroundColor Red
    }
}

# Initial sync
Invoke-GitSync

# Loop monitoring dengan debounce
while ($true) {
    Start-Sleep -Seconds 3
    
    # Periksa apakah ada perubahan yang belum di-commit
    $status = git status --porcelain
    if ($status) {
        Invoke-GitSync
    }
}
