require('colors');
require('dotenv').config();// Sintaxis para conf variables de entorno
const express = require('express')
const hbs = require('hbs');// Requiriendo haldlerbars para utilizar partial
const app = express();
const port = process.env.PORT;


//handlebars

app.set('view engine', 'hbs');// Utilizando handlebars
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('./public'))

// Reenderizar vistas con handlebars

app.get('/', (req, res) => {// reenderizando vista home.hbs con handlebars
    res.render('home', {
        nombre: 'Antonio',
        titulo: 'Curso de Node'// definiendo argumentos para utilizar en el html
    });
})
app.get('/home', (req, res) => {// reenderizando vista home.hbs con handlebars
    res.render('home', {
        nombre: 'Antonio Santana',
        titulo: 'Ejemplo Servidor Node Utilizando express & handlebars Templates'// definiendo argumentos para utilizar en el html
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Antonio Santana',
        titulo: 'Ejemplo Servidor Node Utilizando express & handlebars Templates'// definiendo argumentos para utilizar en el html
    })
})
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Antonio Santana',
        titulo: 'Ejemplo Servidor Node Utilizando express & handlebars Templates'// definiendo argumentos para utilizar en el html
    })
})
app.get('*', (req, res) => {
    res.render('404', {})
})

app.listen(port, () => {
    console.log(`Server funcionando correctamente en http://localhost:${port}`.green)
})