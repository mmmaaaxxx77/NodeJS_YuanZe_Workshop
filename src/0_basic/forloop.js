/*
 * 範例幾種常見的loop方式
 */

const userList = [
    { id: '688589314503444', name: '呂秀蓮' },
    { id: '137801030331889', name: '邱文祥' },
    { id: '600540963315152', name: '丁守中' },
    { id: '136845026417486', name: '柯文哲' },
    { id: '1380211668909443', name: '姚文智' },
    { id: '1912587195640543', name: '林義豐' },
    { id: '1863023523934803', name: '韓國瑜' }
];

// for loop 最常見
console.log("###### FOR LOOP 1 ######");
for (let i = 0; i < userList.length; i++) {
    console.log(i + ", " + userList[i]['name']);
}

// for loop 另一種寫法
console.log("###### FOR LOOP 2 ######");
for (indx in userList) {
    console.log(indx + ", " + userList[indx]['name']);
}

// for each 寫法
console.log("###### FOR LOOP 3 ######");
userList.forEach(function(item, indx) {
    console.log(indx + ", " + item['name']);
});