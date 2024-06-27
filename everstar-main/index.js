const express = require('express')
const app = express()
const path = require('path')
const hbs = require('express-hbs')
const bikedata = require('./db/data')

// Define a Handlebars helper to perform multiplication
hbs.registerHelper('multiply', function (num1, num2) {
  return num1 * num2
})
hbs.registerHelper('beautifyNumber', (usd) => {
  const nrs = usd * 133.76
  const priceSymbol = ['K', 'L', 'Cr']
  if (nrs >= 1000 && nrs < 100000) {
    return parseFloat(nrs / 1000).toFixed(2) + ' ' + priceSymbol[0]
  } else if (nrs >= 100000 && nrs < 10000000) {
    return parseFloat(nrs / 100000).toFixed(2) + ' ' + priceSymbol[1]
  }

  return parseFloat(nrs).toFixed(2)
})

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
  res.send('Hey, I am amreet')
})

app.get('/:bike', (req, res) => {
  // Send the HTML file as the response
  const filtered = bikedata.filter((e) => {
    return e.id == req.params.bike
  })
  res.render('pages/IndividualBike', {
    title: filtered[0].name,
    layout: 'mainLayout',
    bikedata: filtered[0],
    variant: req.query.variant,
  })
})

// Start the server
const PORT = 5500
app.listen(PORT, msg)
function msg() {
  console.log(`Server is running on port 5500`)
}
