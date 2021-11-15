[toc]
## 什么是异步

与异步对应的就是同步，对于同步我们很好理解，就是代码顺序执行。但是一到异步代码，很多人多少有些理不清。异步，从功能上讲，就是在背后偷偷的执行，不堵塞当前运行的代码；

## js 中的异步

```js
function synchronizedCode() {
  var last = new Date().getTime();
  var count = 0;
  while (true) {
    var now = new Date().getTime();
    if (now - last > 1000 * 2) {
      last = now;
      count++;
      console.log("the %dth count.", count);
    }
    if (count > 9) {
      console.log("exist while.");
      break;
    }
  }
}
(function () {
  setTimeout(function () {
    console.log("setTimeout 0 occured first.");
  }, 0);
  setTimeout(function () {
    console.log("setTimeout 0 occured second.");
  }, 0);

  synchronizedCode();
})();
```

上面代码执行后的输出是这个样子的：

```js
the 1th count.
the 2th count.
the 3th count.
the 4th count.
the 5th count.
exist while.
setTimeout 0 occured first.
setTimeout 0 occured second.
```

while 循环明明运行了 5 秒钟，为何在这期间那两个 setTimeout 一直没有运行呢？这就和 js 代码的异步机制有关了。js 代码中有帧的概念，对于同步代码是在当前帧运行的，异步代码是在下一帧运行的。我们给代码运行画一幅图的话，应该是这样的：
![2021-11-14-fie3Ua](https://cdn.jsdelivr.net/gh/frmachao/images@blog/uPic/2021-11-14-fie3Ua.jpg)

那么为什么是第一个 setTimeout 先触发，第二个后触发呢，难道仅仅由于先后顺序？我们把第一个`setTimeout`改为`setTimeout(function() {console.log('setTimeout 0 occured first.');},100);`,那么输出的时候就会是先输出`setTimeout 0 occured second.`,在输出`setTimeout 0 occured first.`。也就是说在第二帧`setTimeout`的回调的执行顺序不仅与代码顺序有关还和延迟时间有关。

## Event loop

```js
setTimeout(function timeout() {
  console.log("Timed out!");
}, 0);
Promise.resolve(1).then(function resolve() {
  console.log("Resolved!");
});

// 'Resolved!'
// 'Timed out!
```

为什么 promise 会先输出？

与异步 JS 相关的问题可以通过研究事件循环来回答。我们回顾一下异步 JS 工作方式的主要组成部分。

![2021-11-15-YHjp4J](https://cdn.jsdelivr.net/gh/frmachao/images@blog/uPic/2021-11-15-YHjp4J.jpg)

调用堆栈是一个 LIFO(后进先出)结构，它存储在代码执行期间创建的执行上下文。简单地说，调用堆栈执行这些函数。

`Web api`是异步操作`(fetch 请求、promise、计时器)及其回调等待完成的地方。

`task queue （任务队列）`是一个`FIFO(先进先出)`结构，它保存准备执行的异步操作的回调。例如，超时的 setTimeout()的回调函数或准备执行的单击按钮事件处理程序都在任务队列中排队。

`job queue （作业队列）`是一个`FIFO(先入先出)`结构，它保存准备执行的 promise 的回调。例如，已完成的承诺的 resolve 或 reject 回调被排在作业队列中。

最后，事件循环永久监听调用堆栈是否为空。如果调用堆栈为空，则事件循环查看作业队列或任务队列，并将准备执行的任何回调分派到调用堆栈中。

### 作业队列和任务队列

我们从事件循环的角度来看这个实验，我将对代码执行进行一步一步的分析。

A）调用堆栈执行 setTimeout(..., 0)并计划一个计时器， timeout()回调存储在 Web API 中：

![2021-11-15-2N4v9K](https://cdn.jsdelivr.net/gh/frmachao/images@blog/uPic/2021-11-15-2N4v9K.jpg)

![2021-11-15-7GOUz8](https://cdn.jsdelivr.net/gh/frmachao/images@blog/uPic/2021-11-15-7GOUz8.jpg)
B）调用堆栈执行 Promise.resolve(true).then(resolve)并安排一个 promise 解决方案。 resolved()回调存储在 Web API 中：
![2021-11-15-uUy7G1](https://cdn.jsdelivr.net/gh/frmachao/images@blog/uPic/2021-11-15-uUy7G1.jpg)

![2021-11-15-xxLMBw](https://cdn.jsdelivr.net/gh/frmachao/images@blog/uPic/2021-11-15-xxLMBw.jpg)

C)promise 立即被解析，同时计时器也立即执行。这样，定时器回调 timeout()进入任务队列，promise 回调 resolve()进入作业队列

![2021-11-15-lcRT7z](https://cdn.jsdelivr.net/gh/frmachao/images@blog/uPic/2021-11-15-lcRT7z.jpg)

D）现在是有趣的部分：作业队列(微任务)优先级高于任务队列(宏任务)。 事件循环从作业队列中取出 promise 回调 resolve()并将其放入调用堆栈中。 然后，调用堆栈执行 promise 回调 resolve()：

![2021-11-15-EAGN6x](https://cdn.jsdelivr.net/gh/frmachao/images@blog/uPic/2021-11-15-EAGN6x.jpg)

E）最后，事件循环将计时器回调 timeout()从任务队列中出队到调用堆栈中。 然后，调用堆栈执行计时器回调 timeout()：

![2021-11-15-ZVw1RC](https://cdn.jsdelivr.net/gh/frmachao/images@blog/uPic/2021-11-15-ZVw1RC.jpg)

### 为什么立即解决的 promise 比立即执行定时器处理得更快？

由于事件循环优先级的存在，因此与任务队列（存储超时的 setTimeout()回调）相比，作业队列（用于存储已实现的 Promise 回调）的优先级更高。

## 参考

- [js 异步之惑](https://blog.whyun.com/posts/js/#2-js%E4%B8%AD%E7%9A%84%E5%BC%82%E6%AD%A5)
- [为什么 Promise 比 setTimeout() 快？](https://segmentfault.com/a/1190000038769853)
