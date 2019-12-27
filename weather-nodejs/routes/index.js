/*var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/

let url    = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22'
let appId  = 'appid=YOUR API KEY';

let units  = '&units=metric'; 

var request = require('request');

router.get('/', function(req, res, next) {

 res.render('index', {'body':'', forecast: ''});

});
router.post('/weather', function(req, res, next){

  let city = req.body.city;

  url = url+city+"&"+appId;

 request(url, function (error, response, body) {

      body = JSON.parse(body);

      if(error && response.statusCode != 200){

        throw error;

      }

    let country = (body.sys.country) ? body.sys.country : '' ;

    let forecast = "For city "+city+', country '+country;

    res.render('index', {body : body, forecast: forecast});

   });

});