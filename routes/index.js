var express = require('express');
var router = express.Router();
var sleep = require('sleep');
var multiparty = require('multiparty')

/* GET home page. */
router.get('/weather.json', (req, res, next) => {
	sleep.sleep(5)
	res.json({'temperature': '11'})
})

router.post('/users', (req, res, next) => {
	// var form = new multiparty.Form()
	// form.parse(req, (err, fields, files)=> {
	// 	console.log(fields)
	// 	res.sendStatus(200)
	// })
	console.log(req.body)
	res.sendStatus(200)
})


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
