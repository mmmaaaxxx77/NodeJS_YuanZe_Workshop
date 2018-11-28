/*
 * 範例物件
 */

// 定義People物件
function People(name, email) {

    var self = this;

    this.name = name;
    this.email = email;

    this.showProfile = function() {
        console.log(self.name + ", " + self.email);
    }
}

// 繼承 People
function Teacher(name, email) {

    People.call(this, name, email);
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