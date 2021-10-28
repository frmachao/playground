## 事件冒泡

> 一个元素的事件触发了，该事件会在该元素的所有的祖先元素中依次触发（从里到外），这个过程就称为事件冒泡

> 说白了就是：当我们触发了子元素的某个事件后，父元素对应的事件也会触发，事件要对应。冒泡一直到 document。

### 事件冒泡的好处

事件冒泡可以将多个事件委托给一个父元素去执行，实现事件委托。

### 阻止冒泡

1. 要先确定事件传播到谁那里停止，（一般是当前触发的那个元素居多，或者是祖先元素）
2. 需要阻止什么事件传递给它就注册该事件
3. 在事件处理函数里面接受事件对象，并添加上 e.stopPropagation()

```js
document.onclick = function () {
  box.style.display = "none";
};
box.onclick = function () {
  e.stopPropagation();
};
//在box这里阻止冒泡，后面不会冒到document
```

## 事件捕获

一个元素的事件触发了，该事件会在该元素的祖先元素中依次向内部触发（从外到内）

```js
addEventListener(type,func,useCapture)

第一个参数：事件的类型，click，mousemove
第二个参数：函数，监听者，每次点击，这个函数就执行
第三个参数：是否使用捕获，默认为false，表示冒泡
捕获的话最后一个参数得是true
btn.addEventListener('click',function(){
    console.log('我是事件捕获');
},true)

```

## 事件流

```
阶段一：捕获阶段
阶段二：目标阶段 触发事件的事件源
阶段三：冒泡阶段
可以使用addEventListener的第三个参数来决定元素的事件是在冒泡还是捕获阶段触发， true： 捕获阶段触发
```
![2021-10-28-xYF9RN](https://cdn.jsdelivr.net/gh/frmachao/images@blog/uPic/2021-10-28-xYF9RN.jpg)

![2021-10-28-3j8zc4](https://cdn.jsdelivr.net/gh/frmachao/images@blog/uPic/2021-10-28-3j8zc4.jpg)