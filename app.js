const express = require('express')
const https = require('https')
const axios = require('axios');
const app = express()
const port = 3000

app.use(express.urlencoded({
    extended: true
})) // Body-parser Atual
app.use(express.static(__dirname + '/public')) // Tem que colocar arquivos estáticos como HTML e CSS em uma pasta publica para poder usá-los

var config = {
    method: 'get',
    url: 'https://v3.football.api-sports.io/teams?name=santos&country=Brazil',
    headers: {
  //   'x-rapidapi-key': 'a006da154ee1667cd0931924a0db85c0',
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(process.env.PORT || port, () => {
    console.log(`app listening at port:${port}`)
})