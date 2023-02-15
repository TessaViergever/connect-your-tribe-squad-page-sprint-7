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







// Importeer express uit de node_modules map
import express from 'express'

const url ='https://whois.fdnd.nl/api/v1/member/tessaviergever'
const data = await fetch(url).then((response) => response.json())

// console.log(data.member.name)

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

// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
