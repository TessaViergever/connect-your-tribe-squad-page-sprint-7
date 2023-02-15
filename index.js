import express from 'express' // Importeer express uit de node_modules map

// const url ='https://whois.fdnd.nl/api/v1/member/tessaviergever' //info ophalen uit API
// const data = await fetch(url).then((response) => response.json()) 

const url ='https://whois.fdnd.nl/api/v1/squad/squat-c-2022?orderBy=name&direction=ASC' 
const data = await fetch(url).then((response) => response.json()) 

console.log(data.squad.members)

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


//////////////////////////////////////////////////////////////////////////////////////////////


// // Importeer express uit de node_modules map
// import express from 'express'                         

// const url = 'https://whois.fdnd.nl/api/v1/squad/'

// // Maak een nieuwe express app
// const app = express()

// // Stel in hoe we express gebruiken (stel ejs in als template enige en geef de 'views' map door)
// app.set('view engine', 'ejs')
// app.set('views', './views')
// app.use(express.static('public'))

// // Gebruik de map 'public' voor statische resources
// app.use(express.static('public'))

// // Maak een route voor de index
// app.get('/', (request, response) => {
//   console.log(request.query.squad)

//   let slug = request.query.squad || 'squad-a-2022'
//   let orderBy = request.query.orderBy || 'name'
//   let squadUrl = url + slug + '?orderBy=' + orderBy + '&direction=ASC'

//   fetchJson(squadUrl).then((data) => {
//     response.render('index', data)
//   })
// })

// // app.get('/members', (request, response) => {
// //   response.send('Joepie!!')
// // })

// // Stel het poortnummer in en start express
// app.set('port', process.env.PORT || 8000)
// app.listen(app.get('port'), function () {
//   console.log(`Application started on http://localhost:${app.get('port')}`)
// })

// /**
//  * Wraps the fetch api and returns the response body parsed through json
//  * @param {*} url the api endpoint to address
//  * @returns the json response from the api endpoint
//  */
// async function fetchJson(url) {
//   return await fetch(url)
//     .then((response) => response.json())
//     .catch((error) => error)
// }

//////////////////////////////////////////////////////////////////////////////////////////////


// Datamap inladen 

// var map = new Datamap(
//   {
//       element: document.getElementById('container'),
//       fills: {
//           purple: 'purple',
//           defaultFill: 'hotpink' // Any hex, color name or rgb/rgba value
//       },
//       data: {
//           IRL: {
//               fillKey: 'purple', // Any hex, color name or rgb/rgba value
//               classmatesVisited: [
//                   'Rosa',
//                   'Michelle',
//                   'Stefan'
//               ]
//           },
//           USA: {
//               fillKey: 'purple',
//               classmatesVisited: [
//                   'Tessa', // Any name (later: change to student id uit WHOIS API)
//                   'Cyd',

//               ]
//           }
//       },
//       geographyConfig: {
//           popupTemplate: function (geo, data) {
//               let classmateNames = '';
//               data.classmatesVisited.forEach((classmate, index) => {
//                   if (index == data.classmatesVisited.length -1) {
//                       classmateNames += classmate
//                   } else {
//                       classmateNames += classmate + ", "
//                   }
//               })

//               return `
//           <div class="hoverinfo">
//               <strong>
//                   ${geo.properties.name}
//               </strong>
//               <p>Zoveel klasgenoten zijn hier geweest: ${data.classmatesVisited.length}</p>
//               <p>Dit zijn hun namen: ${classmateNames}</p>
//           </div>`
//           }
//       }
//   });

