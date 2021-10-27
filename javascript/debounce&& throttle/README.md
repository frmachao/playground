> [js节流与防抖函数封装](https://segmentfault.com/a/1190000021865872)
常见应用场景：

window的 resize 和 scroll 事件；
文字输入时的 keyup 事件；
元素拖拽、移动时的 mousemove 事件；

## 防抖
> 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时

- 定义：多次触发事件后，事件处理函数只执行一次，并且是在触发操作结束时执行
- 原理：对处理函数进行延时操作，若设定的延时到来之前，再次触发事件，则清除上一次的延时操作定时器，重新定时。
- 经典案例：百度输入内容自动搜索
```js
/**
*防抖函数
*@param fn 事件触发的操作
*@param delay 多少毫秒内连续触发事件，不会执行
*@returns {Function}
*/
function debounce(fn,delay){
    let timer = null;
    return function(){
        let self = this,
            args = arguments;
        timer && clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(self,args);
        },delay);
    }
}
window.onscroll = debounce(function(){
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(scrollTop)
},200)
```

## 节流
> 每隔一段时间，只执行一次函数。

- 定义：触发函数事件后，短时间间隔内无法连续调用，只有上一次函数执行后，过了规定的时间间隔，才能进行下一次的函数调用。
- 原理：对处理函数进行延时操作，通过设定时间片，控制事件函数间断性的触发。
- 经典案例：按钮可以多次点击发送请求问题
```js
/**
* 节流函数
* @param fn 事件触发的操作
* @param mustDelay 间隔多少毫秒需要触发一次事件
*/
function throttle(fn,mustDelay){
    let timer,
        start = 0;
    return function (){
        let now = new Date().getTime(),
            self = this,
            args = arguments;
        if(now > start + mustDelay){
            fn.apply(self,args)
            start = now;
        }
    }
}
window.onscroll =throttle(function(){
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(scrollTop)
},200)
```