const express = require('express');
const favicon = require('express-favicon');
var secure = require('express-force-https');
var sslRedirect = require('heroku-ssl-redirect');
var cors = require('cors');
const path = require('path');
const port = process.env.PORT || 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = express();

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, 'build')));

app.use(secure);
app.options("*", cors({ origin: 'https://www.jakubjirak.com', optionsSuccessStatus: 200 }));

app.use(cors({ origin: "https://www.jakubjirak.com", optionsSuccessStatus: 200 }));
app.use(sslRedirect());

app.get('*', function(req, res, next) {
    if (req.headers.host.slice(0, 3) != 'www') {
        res.redirect('http://www.' + req.headers.host + req.url, 301);
    } else {
        next();
    }
});

app.use((req, res, next) => {
    const hostname = req.hostname !== 'www.jakubjirak.com' ? 'jakubjirak.com' : req.hostname;

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

