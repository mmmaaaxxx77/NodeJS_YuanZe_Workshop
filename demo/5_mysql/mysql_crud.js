/*
 * 範例如何連線至Mysql或Mariadb, 並操作CRUD（create, read, update, delete）
 * 請先下以下指令安裝需要的module
 * 1. npm install
 */

const readline = require('readline');
// 引入mysql套件
const mysql = require('mysql');

// 設定連線資訊
const con = mysql.createConnection({
    host: "demodb.johnnyplanet.com",
    port: 33061,
    user: "yzdemo",
    password: "yzdemo_password",
    database: "yzdemo"
});

// 連線
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

// 讀取資料function
function readData() {
    con.query("SELECT * from user", function(err, result) {
        if (err) throw err;
        for (indx in result) {
            const user = result[indx];
            console.log(user['id'] + ", " + user['name'] + "," + user['email']);
        }
    });
}

// 建立資料function
function createData(name, email) {
    // TODO 建立 INSERT SQL, 並有兩個變數
    var addSql = '';    
    var addSqlParams = [name, email];

    con.query(addSql, addSqlParams, function(err, result) {
        if (err) throw err;
        const userId = result['insertId'];
        console.log("new user id is " + userId);
    });
}

// 更新資料function
function updateData(id, email) {
    // TODO 完成更新使用者email功能, by id
}

// 刪除資料function
function deleteData(id) {
    // TODO 完成刪除使用者功能, by id
}

// 指令方式操作
const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('0:跳出, 1:Read, 2:Create, 3:Update, 4:Delete> ');
rl.prompt();

// 等待鍵盤打字enter
rl.on('line', function(line) {
    switch (line.trim()) {
        case '0':
            rl.close();
            break;
        case '1':
            readData();
            break;
        case '2':
            createData("demo", "demo@demo.com");
            break;
        case '3':
            updateData(2, "new@demo.demo");
            break;
        case '4':
            deleteData(4);
            break;
        default:
            console.log('没有找到命令！');
            break;
    }
    rl.prompt();
});

// 結束等待
rl.on('close', function() {
    console.log('bye bye!');
    con.end();
    process.exit(0);
});