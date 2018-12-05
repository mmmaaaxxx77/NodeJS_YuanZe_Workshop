/**********************
 * import express lib
 ***********************/
const express = require('express');
const bodyParser = require('body-parser');

/**********************
 * import other lib
 ***********************/
const path = require('path');
const User = require('./User');

/**********************
 * express setting
 ***********************/
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// template 設定
app.set('views', path.join(__dirname, '..', 'web'));
app.engine('html', require('ejs').renderFile);
app.set('view options', {
    delimiter: '@'
});
app.set('view engine', 'html');
// router
const router = express.Router();
// 加入static靜態檔案連結
app.use('/static', express.static(path.resolve(__dirname, '..', 'web/static/')));
// 加入router
app.use('/', router);

/**********************
 * router
 ***********************/
// 回傳網頁 url為根目錄
router.route('/')
    .get(function(req, res) {
        res.render('index');
    });

// 如何回傳json, url為 /api/json
router.route('/api/user')
    .get(function(req, res) {
        const allUser = User.findAll();
        res.json(allUser);
    })
    .put(function(req, res){
    	const name=req.body.name;
    	const email=req.body.email;
    	const newUser = User.newUser(name, email);
    	res.json(newUser);
    });

module.exports = app;