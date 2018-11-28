/*
 * 範例如何引入第三方套件, 以時間套件momentjs為例
 * https://momentjs.com/
 *
 * 1. npm init 建立package檔案
 * 2. npm install moment
 */

// 加入套件
const moment = require('moment');

// moment格式化時間
now = moment().format("YYYY-MM-DD HH:mm");

console.log(now);