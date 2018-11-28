/*
 * 範例如何引用自定義的module
 */

// TODO 引入User module

console.log("#### findAll ####");
// 呼叫所有使用者function
console.log(User.findAll());

console.log("#### findUserById ####");
// 呼叫id找使用者function
console.log(User.findUserById(1));