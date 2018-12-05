/*
 * 範例如何連線至Mysql或Mariadb
 * 請先下以下指令安裝需要的module
 * 1. npm install
 */

// 引入mysql套件
const mysql = require('mysql');

// 設定連線資訊
const con = mysql.createConnection({
    host: "35.236.164.78",
    port: 33060,
    user: "yzdemo",
    password: "yzdemo_password"
});

// 測試連線
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

con.end();