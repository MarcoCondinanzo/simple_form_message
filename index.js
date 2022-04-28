const express = require('express')
const bodyParser = require ('body-parser');

const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')

const port = 3000

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/contacto', (req, res) => {
    const {nombre, email, telefono, mensaje} = req.body;
    
    res.status(200).json({
            statusCode: 200,
            message: 'Mensaje recibido',
            data: {
                nombre,
                email,
                telefono,
                mensaje,
                numeroTicket: parseInt( Math.random()*100)
            }
        })
  
})

app.listen(port, () => {
    console.log(`servidor escuchando`);
})