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
const Message = require('./Message');

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
// 回傳網頁 url為根路徑
router.route('/')
    .get(function(req, res) {
        res.render('index');
    });

// 回傳網頁 url為/form
router.route('/form')
    .get(function(req, res) {
        res.render('form');
    });

// 如何回傳json, url為 /api/json
router.route('/api/user')
    .get(async function(req, res) {
        const allUser = await User.findAll();
        res.json(allUser);
    });

router.route('/api/message')
    .get(async function(req, res) {
        const messages = await Message.findLast();
        res.json(messages);
    })
    .put(async function(req, res){
        const name=req.body.name;
        const message=req.body.message;

        const result = await Message.newMessage(name, message);
        res.json({ok:"ok"});
    });    

module.exports = app;