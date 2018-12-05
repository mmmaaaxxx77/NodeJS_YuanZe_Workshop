/*
 * User model module
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

// User model
function User(data) {
    this.id = data['id'];
    this.name = data['name'];
    this.email = data['email'];

    this.printDetail = function() {
        now = moment().format("YYYY-MM-DD HH:mm");
        console.log(
            now + "  " +
            "id:" + this.id +
            ", name: " +
            this.name +
            ", email:" +
            this.email
        );
    }
}

// 回傳所有使用者, 使用者為User物件
this.findAll = async function() {
    let users = [];

    const query = "SELECT * from user";

    // TODO 透過await query Promise function 建立查詢

    return users;
}

module.exports = this;