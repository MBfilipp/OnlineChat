const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;

mongoose.connect('mongodb://localhost/onlinechat', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

app.use(bodyParser.json());
app.use('/api', require('./api'));

app.listen(PORT, () => {
    console.log('server start on port - ' + PORT );
});