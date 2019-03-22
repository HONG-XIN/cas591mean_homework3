var express = require('express');
var router = express.Router();

/* retrieve data from external API */
var Request = require("request");

let URL = "http://api.weatherunlocked.com/api/current/42.36,-71.01?app_id=6fdf098b&app_key=3fbf5b182fe26df5d5eaf744c3311d12";


const retrieveData = () => {
	return new Promise(function (resolve, reject) {

		Request.get(URL, (error, response, body) => {
			if(error) {
				resolve(console.dir(error));
			}
			resolve(JSON.parse(body));
		});
	});
};


/* GET home page. */
router.get('/', function(req, res, next) {
	retrieveData()
		.then((value) => {
			res.render('hw3', {
				title: 'Boston weather (currrent)',
				data: value
			});
		});
});

module.exports = router;
