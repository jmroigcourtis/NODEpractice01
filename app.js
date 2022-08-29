const express = require('express');
const hbs = require('hbs');
require('dotenv').config();



const app = express()
const PORT = process.env.PORT


//Handlebars
app.set('view engine', 'hbs') 
hbs.registerPartials(__dirname + '/views/partials', (error) => {
    console.error(`Error ${error}`)
})

// Ejemplo de contenido estatico

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        titulo: 'Curso de Node',
        nombre: 'Juan'
    });
})


app.get('/elements', (req, res) => {
    res.render('elements', {
        title: 'Elements',
        name: 'Juanito'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        title: 'Elements',
        name: 'Juanito'
    })
})


app.listen(PORT)
console.log(`Server running on port ${PORT}`)