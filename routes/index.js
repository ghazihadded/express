const express = require('express')
const path =require('path')

const app = express();
const port = 4000;
app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname,'public')))


function test(req, res, next) {
  console.log(req.method +'at'+req.url)
  if (req.params.d < 1 || req.params.d > 5)
    res.send("L'application web n'est disponible que pendant les heures de travail (du lundi au vendredi, de 9 à 17) ")
  else if (req.params.h < 9 || req.params.h > 17)
    res.send("L'application web n'est disponible que pendant les heures de travail (du lundi au vendredi, de 9 à 17) ")
   
  next()
}

/* app.use('/Contact_us/:d/:h', (req, res, next) => {
  
  if (req.params.d < 1 || req.params.d > 5)
    res.send("L'application web n'est disponible que pendant les heures de travail (du lundi au vendredi, de 9 à 17) ")
  else if (req.params.h < 9 || req.params.h > 17)
    res.send("L'application web n'est disponible que pendant les heures de travail (du lundi au vendredi, de 9 à 17) ")
  next()
}) */
 

app.get('/', (req, res) => {

  res.render('./accueil')
})
app.get('/nos_services/:d/:h',test, (req, res) => {

  res.render('./nosService')
})
app.get('/Contact_us/:d/:h',test,(req, res) => {

  res.render('./contactUs')
})
app.listen(port)