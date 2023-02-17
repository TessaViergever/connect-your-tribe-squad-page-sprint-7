import express from 'express' // Importeer express uit de node_modules map

// const url ='https://whois.fdnd.nl/api/v1/member/tessaviergever' //info ophalen uit API
// const data = await fetch(url).then((response) => response.json()) 

const url ='https://whois.fdnd.nl/api/v1/squad/squat-c-2022?orderBy=name&direction=ASC' 
const data = await fetch(url).then((response) => response.json()) 

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// TODO: alle landen aanvullen
const possibleCountries = ['ARG', 'AUS', 'AUT', 'BEL', 'BGR', 'BRA', 'BWA', 'CAN', 'CHN', 'DEU', 'ECU', 'FIN', 'GTM', 'NLD', 'MDG', 'MAR', 'USA', 'CAN', 'THA', 'FRA', 'IND', 'IDN', 'MEX', 'PRT', 'ZAF', 'TUR', ]
const maxFromPossibleCountries = possibleCountries.length - 1

data.squad.members.forEach(function(member) {
  if (!member.visitedCountry) {
    member.visitedCountry = []
    member.visitedCountry.push(possibleCountries[getRandomInt(maxFromPossibleCountries)])
  }
})

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine en geef de 'views' map door
app.set('view engine', 'ejs')
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', function (req, res) {
  // res.send('Hello World!')
  res.render('index', data)
})

app.get('/map', function (req, res) {
  // res.send('Hello World!')
  res.render('map', data)
})

// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})



