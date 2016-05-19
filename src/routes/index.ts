/// <reference path="../../typings/index.d.ts" />

import * as express from 'express';
import * as marked from 'marked';

const router = express.Router();
const sleep = require('sleep');
const multiparty = require('multiparty')



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
	console.log(req.body.username)
	res.sendStatus(200)
})

router.get('/write', (req, res, next) => {
	res.render('write');
})

router.post('/show', (req, res, next) => {
	res.render('show', {text: marked(req.body.text)})
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
