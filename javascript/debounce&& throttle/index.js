// 防抖函数： 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件被触发，则重新计算时间
// 思路：每次触发事件都取消之前的延时调用方法
/*
 fn: 需要防抖的函数
 wait: 延迟毫秒数
 return: 函数
 */
 // 延迟执行
 function debounce(fn, wait) {
    var timer; // 全局的定时器 id
    return function () {
      var that = this; // 将函数被调用时的 this 保存
      var args = arguments; // 保存函数的参数，arguments对象是所有（非箭头）函数中都可用的局部变量。
      if (timer) {
        clearTimeout(timer); // 清除 wait 时间内频繁调用函数产生的定时器
      }
      timer = setTimeout(() => {
        fn.apply(that, args); // 将传递进来的 fn 使用 apply 调用，将 this 指向改为保存的 that，同时进行传参
      }, wait);
    };
  }
function sayHi() {
    console.log('this3', this)
    console.log('防抖成功');
}

var inp = document.getElementById('debounce');
inp.addEventListener('click', debounce(sayHi, 1000));

// 节流函数：高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
// 思路：每次触发事件时都判断当前是否有等待执行的延时函数
// 定时器版本
function throttle(fn) {
    let canRun = true; // 通过闭包保存一个标记
    return function () {
      if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
      canRun = false; // 立即设置为false
      setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
        fn.apply(this, arguments);
        // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
        canRun = true;
      }, 500);
    };
  }
  function sayHi2(e) {
    console.log(e.target.innerWidth, e.target.innerHeight);
  }
  window.addEventListener('resize', throttle(sayHi2));

// 时间戳版
function throttle2(fn, wait) {
    let previous = 0;
    return function () {
      const that = this;
      const args = arguments;
      let now = Date.now();
      if (now - previous > wait) {
        fn.apply(that, args);
        previous = now;
      }
    };
  }