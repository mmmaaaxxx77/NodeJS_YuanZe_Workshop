/*
 * 範例建立一個模擬資料庫的User module
 */

// 加入套件
const moment = require('moment');

// 建立使用者資料
this.users = [
    { 'id': 0, 'name': 'johnny', 'email': 'johnny@demo.com' },
    { 'id': 1, 'name': 'aji', 'email': 'aji@demo.com' },
    { 'id': 2, 'name': 'james', 'email': 'james@demo.com' },
    { 'id': 3, 'name': 'block', 'email': 'block@demo.com' }
]

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
// TODO findAll
// this.findAll = 

// 用id找使用者, 並回傳User物件
// TODO findUserById
// this.findUserById = 

module.exports = this;