var express = require('express');
var router = express.Router();


//mongodb
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var conn = mongoose.connect('mongodb://127.0.0.1:27017/testNode');
var User = new mongoose.Schema({
    name: String,
    email: String,
    age: String
});

var myModel = conn.model('user', User);

/* GET index listing. */
router.get('/', function(req, res, next) {
    myModel.findOne({name:"zhangangs"}, function (err, user) {
        console.log(user);
        res.render('index', {title: 'Express', user: user });
        res.send(json);
    });
});

module.exports = router;
