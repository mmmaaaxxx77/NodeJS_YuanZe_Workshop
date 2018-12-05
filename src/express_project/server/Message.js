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
    let messages = [];

    const query = "SELECT * from message ORDER BY id DESC LIMIT 10";

    const dbMessages = await queryObject(query);
    for (indx in dbMessages) {
        const msg = dbMessages[indx];
        messages.push(new Message(msg));
    }    

    return messages;
}

// 新增訊息
this.newMessage = async function(name, message) {
    const sql = "INSERT INTO message(name,message) VALUES(?,?)";
    const param = [name, message];

    const result = await queryObject(sql, param);

    return result;

}

module.exports = this;