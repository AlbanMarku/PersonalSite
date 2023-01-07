const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config({ path: './.env' });

const app = express();
const port = process.env.PORT || 8080;
app.listen(port);

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(express.json({ limit: '1mb', strict: true }));

console.log(`API server is listening on port:${port}`);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

app.post('/sendMail', async (req, res) => {});
