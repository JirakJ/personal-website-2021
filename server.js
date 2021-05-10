const express = require('express');
const favicon = require('express-favicon');
var secure = require('express-force-https');
var sslRedirect = require('heroku-ssl-redirect');
const path = require('path');
const port = process.env.PORT || 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = express();

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, 'build')));

app.use(secure);
app.use(sslRedirect());

// app.use(function(req, res, next) {
//     if (req.headers.host.match(/^www/)) res.redirect('http://' + req.headers.host.replace(/^www\./, '') + req.url, 301);
//     if (req.headers.host.match(/^http:/)) res.redirect('https://' + req.headers.host.replace(/^www\./, '') + req.url, 301);
//     else next();
// });

app.use((req, res, next) => {
    const hostname = req.hostname === 'www.jakubjirak.com' ? 'jakubjirak.com' : req.hostname;

    if (req.headers['x-forwarded-proto'] === 'http' || req.hostname === 'jakubjirak.com') {
        res.redirect(301, `https://${hostname}${req.url}`);
        return;
    }

    res.setHeader('strict-transport-security', 'max-age=31536000; includeSubDomains; preload');
    next();
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);

