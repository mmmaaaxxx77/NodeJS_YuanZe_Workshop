/*
 * Message model module
 */

// 加入套件
const moment = require('moment');
const mysql = require('mysql');

const pool = mysql.createPool({
    host: "demodb.johnnyplanet.com",
    port: 33061,
    user: "yzdemo",
    password: "yzdemo_password",
    database: "yzdemo"
});

// 建立db Promise function
let queryObject = function(sql, values) {
    // 返回一个 Promise
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {

                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    // release
                    connection.release()
                })
            }
        })
    })
}

// Message model
function Message(data) {
    this.id = data['id'];
    this.date = moment(data['timestamp']).format("YYYY-MM-DD HH:mm");
    this.name = data['name'];
    this.message = data['message'];
}

// 回傳所有訊息, 訊息為Message物件
this.findLast = async function() {
    // TODO 完成找出最後10筆message
}

// 新增訊息
this.newMessage = async function(name, message) {
    // TODO 完成新增一筆message

}

module.exports = this;