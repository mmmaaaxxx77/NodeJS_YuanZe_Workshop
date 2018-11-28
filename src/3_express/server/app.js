/**********************
 * import express lib
 ***********************/
const express = require('express');
const bodyParser = require('body-parser');

/**********************
 * import other lib
 ***********************/
const path = require('path');

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
// 如何回傳網頁
router.route('/')
    .get(function(req, res) {
        res.render('index');
    });

// 如何回傳json
router.route('/api/json')
    .get(function(req, res) {
        res.json({ "test": "hello" });
    });

// 如何url裡帶參數
router.route('/api/json/:id')
    .get(function(req, res) {
        var id = req.params.id;

        res.json({ "id": id });
    });

// 如何操作post
router.route('/form')
    .get(function(req, res) {
        res.render('form', {"message": ""});
    })
    .post(function(req, res){
        var name = req.body.name;
        res.render('form', {"message": "你好" + name});
    });

module.exports = app;