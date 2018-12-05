/**********************
 * import express lib
 ***********************/
const express = require('express');
const bodyParser = require('body-parser');

/**********************
 * import other lib
 ***********************/
const path = require('path');

// 加入User model
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
// 回傳網頁 url為/form
router.route('/form')
    .get(function(req, res) {
        res.render('form');
    });

// 如何回傳json, url為 /api/json
// TODO 新增PUT method, 新增使用者功能 
router.route('/api/user')
    .get(function(req, res) {
        const allUser = User.findAll();
        res.json(allUser);
    });

module.exports = app;