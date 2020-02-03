cd ~/.localhost_ssl
mkcert -install
mkcert localhost 127.0.0.1 192.168.1.7
mv localhost+2-key.pem server.key
mv localhost+2.pem server.crt


------------


New-Item -Path ~/.localhost_ssl -ItemType directory

use powerShell in admin
cd ~/.localhost_ssl
...delete old certs files
mkcert -install
mkcert localhost 127.0.0.1 $(ipconfig | where {$_ -match 'IPv4.+\s(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})' } | out-null; $Matches[1])
mv localhost+*-key.pem server.key
mv localhost+*.pem server.crt