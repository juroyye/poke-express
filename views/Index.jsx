const express = require('express');
const app = express();

app.get('/pokemon', (req, res) => {
    res.send('<h1>See all the Pokemon</h1>')
})

module.exports = Index;