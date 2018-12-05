/*
 * 範例如何連線至Mysql或Mariadb
 * 請先下以下指令安裝需要的module
 * 1. npm install
 */

// 引入mysql套件
const mysql = require('mysql');

// 設定連線資訊
const con = mysql.createConnection({
    host: "demodb.johnnyplanet.com",
    port: 33061,
    user: "yzdemo",
    password: "yzdemo_password"
});

// 連線
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

// 結束連線
con.end();