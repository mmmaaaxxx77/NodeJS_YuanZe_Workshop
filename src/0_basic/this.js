/*
 * 範例this常見問題
 * 多層的物件或方法定義中混亂了this的狀況
 */

function People(name, email) {

    // 將Prople的this instance再用self來代表
    const self = this;

    this.name = name;
    this.email = email;

    const Wallet = function() {
        this.name = "錢包";
        this.money = 1000;

        this.showWallet = function() {
            // 這裡的this代表Wallet物件的this, 所以不會show出People的name
            console.log("#### 這是用this ####");
            console.log(this.name + ", Money: " + this.money);

            // 這裡的self代表Prople定義的self, 所以可以抓到People的name
            console.log("#### 這是用self ####");
            console.log(self.name + "的" + this.name + ", Money: " + this.money);
        }
    }

    this.wallet = new Wallet();

    this.showProfile = function() {
        console.log(this.name + ", " + this.email);
    }
}

// 建立一個People物件
const p1 = new People("Johnny", "johnny@demo.com");
// show profile
p1.showProfile();
// show wallet
p1.wallet.showWallet();