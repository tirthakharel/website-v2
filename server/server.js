const express = require('express');
const next = require('next');
const sslRedirect = require('heroku-ssl-redirect');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(sslRedirect());

  server.get('/resume', (req, res) => {
    res.download('./public/TirthaKharel-Resume-Fall-2020.pdf');
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
