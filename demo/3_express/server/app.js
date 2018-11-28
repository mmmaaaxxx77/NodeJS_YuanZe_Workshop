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
// TODO 如何回傳網頁

// TODO 如何回傳json

// TODO 如何url裡帶參數

// TODO form html畫面
// TODO 如何操作post, 實作 post method
router.route('/form')
    .get(function(req, res) {
        res.render('form', {"message": ""});
    });

module.exports = app;