/// <reference path="../../typings/index.d.ts" />

import * as express from 'express';

const router = express.Router();

const sleep = require('sleep');
const multiparty = require('multiparty')

import * as marked from 'marked';

/* GET home page. */
router.get('/weather.json', (req, res, next) => {
	sleep.sleep(5)
	res.json({'temperature': '11'})
})

router.get('/write', (req, res, next) => {
	res.render('write');
})

router.post('/show', (req, res, next) => {
	res.render('show', {text: marked(req.body.text)})
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


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
