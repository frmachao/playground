// "use strict";
(function () {
    function f1() {

        var n = 999;

        function f2() {
            console.log(n)
        }

        return f2;

    }

    var result = f1();

    result(); // 999
})();
(function () {
    function f1() {

        var n = 999;

        nAdd = function () { n += 1 }

        function f2() {
            alert(n);
        }

        return f2;

    }

    var result = f1();

    result(); // 999

    nAdd();

    result(); // 1000
})()

// var data = [];

// for (var i = 0; i < 3; i++) {
//     data[i] = () => {
//         console.log(i);// i 去上层作用域去找 ，找到了 
//     };
// }
// // 为什么都是3
// data[0]();//3 
// data[1]();//3
// data[2]();//3

// 破解经典前端面试题
// for (var i = 0; i < 5; i++) {
//     ((j)=>{setTimeout(function () {
//         console.log(new Date, j);
//     }, 1000)})(i);
// }

// console.log(new Date, i);

// es6 版本
const tasks = [];
const output = (i) => new Promise((resolve) => {
    console.log('我执行了吗？')
    setTimeout(() => {
        console.log(new Date, i)
        resolve()
    }, 1000 * i)
})
for (var i = 0; i < 5; i++) {
    tasks.push(output(i))
}
Promise.all(tasks).then(() => {
    setTimeout(() => {
        console.log(new Date, i)
    }, 1000)
})

// es7 版本
// 模拟实现 sleep
// 模拟其他语言中的 sleep，实际上可以是任何异步操作
// const sleep = (timeountMS) => new Promise((resolve,reject) => {
//     setTimeout(resolve, timeountMS);
// });

// (async () => {  // 声明即执行的 async 函数表达式
//     for (var i = 0; i < 5; i++) {
//         if (i > 0) {
//             await sleep(1000);
//         }
//         console.log(new Date, i);
//     }

//     await sleep(1000).catch((err)=>{console.log('err==',err)});
//     console.log(new Date, i);
// })();
