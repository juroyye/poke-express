const express = require('express');
const app = express();

const port = 3006;


app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App</h1>')
})














app.listen(3006, function(req, res){
    console.log('listening on port 3006')
})