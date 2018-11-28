/*
 * 範例Promise如何使用, 與會發生不同步的問題
 */

function sleep(name, ms) {
    return new Promise(resolve => {
        setTimeout(function(){
        	resolve();
        	console.log(name + "睡醒了");
        }, ms)        
    })
}

console.log("開始");
sleep("小柯", 1000 * 5);
sleep("丁丁", 1000 * 3);
console.log("結束");