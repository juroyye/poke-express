// import Pokemon from './models/pokemon';
// import Index from './views/Index.jsx';
const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon')
const Index = require('./views/Index')


// app.get('/pokemon', (req, res) => {
//     res.json(Pokemon); 
// });




const port = 3006;




app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App</h1>')
})




app.get('/pokemon', (req, res) => {
    res.send(`<h1></h1>`)
})


// app.get('/pokemon', (req, res) => {
//     res.send(`<h1>${pokemon}</h1>`)
// })

app.listen(port, function(req, res){
    console.log('listening on port 3006')
})