# PowerShell script untuk push andhikawidy19.github.io ke GitHub
param(
    [string]$Token = ""
)

$PSScriptRoot = Split-Path -Parent -Path $MyInvocation.MyCommand.Definition

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "  Push ke GitHub: andhikawidy19.github.io" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan

# Jalankan proxy DNS jika ada kendala koneksi
$proxyCode = @"
const http = require('http');
const net = require('net');
const dns = require('dns');

const resolver = new dns.Resolver();
resolver.setServers(['8.8.8.8', '1.1.1.1']);

const server = http.createServer((req, res) => {
  res.writeHead(500);
  res.end('HTTPS CONNECT only.');
});

server.on('connect', (req, clientSocket, head) => {
  const parts = req.url.split(':');
  const host = parts[0];
  const port = parseInt(parts[1] || '443', 10);
  
  resolver.resolve4(host, (err, addresses) => {
    if (err || !addresses || addresses.length === 0) {
      clientSocket.write('HTTP/1.1 502 Bad Gateway\r\n\r\n');
      clientSocket.end();
      return;
    }
    const ip = addresses[0];
    const serverSocket = net.connect(port, ip, () => {
      clientSocket.write('HTTP/1.1 200 Connection Established\r\n\r\n');
      if (head && head.length > 0) serverSocket.write(head);
      clientSocket.pipe(serverSocket);
      serverSocket.pipe(clientSocket);
    });
    serverSocket.on('error', () => clientSocket.end());
    clientSocket.on('error', () => serverSocket.end());
  });
});

server.listen(8080, '127.0.0.1');
"@

$proxyPath = Join-Path $PSScriptRoot "temp_proxy.js"
Set-Content -Path $proxyPath -Value $proxyCode

$proxyProcess = Start-Process node -ArgumentList $proxyPath -NoNewWindow -PassThru
Start-Sleep -Milliseconds 1500

try {
    if ($Token) {
        $remoteUrl = "https://andhikawidy19:$Token@github.com/andhikawidy19/andhikawidy19.github.io.git"
    } else {
        $remoteUrl = "https://github.com/andhikawidy19/andhikawidy19.github.io.git"
    }

    Write-Host "Mengunggah (push) ke GitHub..." -ForegroundColor Yellow
    git -c http.proxy=http://127.0.0.1:8080 push -u $remoteUrl main --force

    Write-Host "`n[SUKSES] Berhasil di-push ke GitHub!" -ForegroundColor Green
    Write-Host "Website Anda akan live dalam 1-2 menit di: https://andhikawidy19.github.io" -ForegroundColor Green
} catch {
    Write-Error "Terjadi kendala saat push: $_"
} finally {
    Stop-Process -Id $proxyProcess.Id -Force -ErrorAction SilentlyContinue
    if (Test-Path $proxyPath) {
        Remove-Item $proxyPath -Force
    }
}
