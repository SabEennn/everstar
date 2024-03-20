const express = require('express')
const app = express()
const path = require('path')
const hbs = require('express-hbs')
const bikedata = require('./db/data')

// Serve static files
app.use(express.static(path.join(__dirname, 'public')))

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine(
  'hbs',
  hbs.express4({
    partialsDir: ['views/partials', 'views/pages'],
    layoutsDir: 'views/layouts',
  }),
)

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

// Define routes
app.get('/', (req, res) => {
  res.render('pages/index', { title: 'Home Page', layout: 'mainLayout', bikedata: bikedata })
})

app.get('/bikes/:gears', (req, res) => {
  res.send('Hey, here are your gears')
})

app.get('/:bike', (req, res) => {
  // Send the HTML file as the response
  const filtered = bikedata.filter((e) => {
    return e.id == req.params.bike
  })
  res.render('pages/individualBike', {
    title: filtered[0].name,
    layout: 'mainLayout',
    bikedata: filtered[0],
  })
})

// Start the server
const PORT = 5500
app.listen(PORT, msg)
function msg() {
  console.log(`Server is running on port 5500`)
}
