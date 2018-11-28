/*
 * 範例如何引用自定義的module
 */

// 引入User module
const User = require('./User');

console.log("#### findUserById ####");
// 呼叫id找使用者function
console.log(User.findUserById(1));

console.log("#### findAll ####");
// 呼叫所有使用者function
console.log(User.findAll());