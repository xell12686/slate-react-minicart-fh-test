

# fix on certificates when in windows 10:

    under powershell:

    cd ~/.localhost_ssl
    mkcert -install
    mkcert localhost 127.0.0.1 <YOUR_LOCAL_IP_HERE>
    mv localhost+2-key.pem server.key
    mv localhost+2.pem server.crt

# temp fix for UnhandledPromiseRejectionWarning: Error: Request failed with status code 404 

Simply update the return Axios code in the slate-analytics/index.js file.

node_modules/@shopify/slate-analytics/index.js

Update the code in line 95

return axios('https://v.shopify.com/slate/track', axiosConfig).catch(() => {});


