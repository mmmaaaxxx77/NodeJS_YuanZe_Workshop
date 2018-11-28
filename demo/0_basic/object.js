/*
 * 範例物件
 */

// 定義People物件
// 1. 建立 name, email 參數
// 2. 建立showProfile function可以print出name, email資料
function People(name, email) {

    var self = this;
    
    this.name = name;
    // TODO email參數

    // TODO showProfile
    // this.showProfile = 
}

// Teacher物件, 繼承 People
// 1. 繼承People
function Teacher(name, email) {

    // TODO People.call

    var self = this;

    this.showProfile = function() {
        console.log(self.name + ", " + self.email + ", " + "teacher");
    }
}

// 建立一個People物件
const p1 = new People("Johnny", "johnny@demo.com");
p1.showProfile();
// 建立第二個People物件
const p2 = new People("James", "james@demo.com");
p2.showProfile();

// 建立一個Teacher物件
const t1 = new Teacher("AJI", "aji@demo.com");
t1.showProfile();