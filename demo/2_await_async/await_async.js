/*
 * async 與 await如何使用
 * async使function內的執行順序同步
 * 有await的function一定要加async, 否則會出錯
 */

function sleep(name, ms) {
    return new Promise(resolve => {
        setTimeout(function(){
        	resolve();
        	console.log(name + "睡醒了");
        }, ms)        
    })
}

async function wait(){
	console.log("開始");
	await sleep("小柯", 1000 * 5);
	await sleep("丁丁", 1000 * 3);
	console.log("結束");
}

wait();