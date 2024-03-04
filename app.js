const express = require('express');
const bodyParser = require('body-parser');
const route = require('./src/route/route');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/whoami', route);

app.get('/', (req, res) => {
    res.send('<h1>Halo, Selamat Datang!</h1>');
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});