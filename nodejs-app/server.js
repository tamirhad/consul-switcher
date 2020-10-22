'use strict';

const express = require('express');
const path = require('path');
const exphbs  = require('express-handlebars');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) =>
    res.render('index', {
    title: 'tamir'
}));

app.use('/backend', require('./routes/backend'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
