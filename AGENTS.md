# Auto Git Sync Rule

Selalu lakukan auto-sync (pull, merge, commit, dan push) secara otomatis setiap kali:
1. Ada perubahan / update pada file kode (HTML, CSS, JS, aset, dsb.).
2. Pengguna mengetik atau menyebut kata "push" di chat / komentar.

### Perintah Eksekusi
Gunakan script sinkronisasi yang sudah tersedia:
```powershell
powershell -ExecutionPolicy Bypass -File .\sync.ps1
```
Script tersebut secara otomatis:
1. Melakukan `git pull origin main --no-rebase` (mengambil & merge perubahan dari GitHub)
2. Melakukan `git add -A` dan commit dengan timestamp saat ini
3. Melakukan `git push origin main` via SSH ke repository GitHub `andhikawidy19/andhikawidy19.github.io`
