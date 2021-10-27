## this关键字
this在js中是一个特殊的对象，在程序运行的过程中，this的指向随时可变。

this关键字在全局作用域下指向window对象。

js中的this是指当前行为执行的主体。

函数内部this的几个特点
1. 函数在定义的时候this是不确定的，只有在调用的时候才可以确定。
2. 函数执行，首先看函数前面是否有"."，有话的，"."前面是谁，函数中的this就是谁，没有的话，this就是window。
3. 自执行函数中的this永远是window。
4. 构造函数中的this其实是一个隐式对象，所有方法和属性都挂载到了这个隐式对象身上，后续通过new关键字来调用，从而实现实例化。
5. this是谁只和它的执行主体有关系，和函数在哪定义，在哪执行没有任何关系。
6. 凡是事件处理函数，里面的this就是当前触发该函数调用的标签对象。

如果 this 在一个方法中, this 就是这个方法所属的对象
如果 this 是在一个独立的函数中, this 就是全局对象( window )

## apply、call
> call()、apply() 方法调用一个函数, 其具有一个指定的 this 值和分别地提供的参数(参数的列表)。

在 javascript 中，call 和 apply 都是为了改变某个函数运行时的上下文（context）而存在的，换句话说，就是为了改变函数体内部 this 的指向。

JavaScript 的一大特点是，函数存在「定义时上下文」和「运行时上下文」以及「上下文是可以改变的」这样的概念。

一个例子🌰
```js
function fruits() {}
fruits.prototype = {
    color: "red",
    say: function() {
        console.log("My color is " + this.color);
    }
}
var apple = new fruits;
apple.say();    //My color is red
```
但是如果我们有一个对象,我们不想对它重新定义 say 方法，那么我们可以通过 call 或 apply 用 apple 的 say 方法：
```js
banana = {
    color: "yellow"
}
apple.say.call(banana);     //My color is yellow
apple.say.apply(banana);    //My color is yellow
```
所以，可以看出 call 和 apply 是为了动态改变 this 而出现的，当一个 object 没有某个方法（本栗子中banana没有say方法），但是其他的有（本栗子中apple有say方法），我们可以借助call或apply用其它对象的方法来操作。

## apply、call 的区别
对于 apply、call 二者而言，作用完全一样，只是接受参数的方式不太一样。call()方法接受的是若干个参数的列表，而apply()方法接受的是一个包含多个参数的数组

例如，有一个函数定义如下：
```js
var func = function(arg1, arg2) {
     
};
```
就可以通过如下方式来调用：
```js
func.call(this, arg1, arg2);
func.apply(this, [arg1, arg2])
```

## 常见用法
### 获取数组中的最大值和最小值
> number 本身没有 max 方法，但是 Math 有，我们就可以借助 call 或者 apply 使用其方法。

```js
var  numbers = [5, 458 , 120 , -215 ]; 
var maxInNumbers = Math.max.apply(Math, numbers),   //458
    maxInNumbers = Math.max.call(Math,5, 458 , 120 , -215); //458
```
### 伪数组使用数组方法
```js
// slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变
var domNodes = Array.prototype.slice.call(document.getElementsByTagName("*"));
```
Javascript中存在一种名为伪数组的对象结构。比较特别的是 arguments 对象，还有像调用 getElementsByTagName , document.childNodes 之类的，它们返回NodeList对象都属于伪数组。不能应用 Array下的 push , pop 等方法。

但是我们能通过 Array.prototype.slice.call 转换为真正的数组的带有 length 属性的对象，这样 domNodes 就可以应用 Array 下的所有方法了。

## bind()
> bind() 方法会创建一个新函数，当这个新函数被调用时，它的 this 值是传递给 bind() 的第一个参数，传入bind方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。

语法：fun.bind(thisArg[, arg1[, arg2[, ...]]])
```js
var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    return {
		value: this.value,
		name: name,
		age: age
    }
};

bar.call(foo, "Jack", 20); // 直接执行了函数
// {value: 1, name: "Jack", age: 20}

var bindFoo1 = bar.bind(foo, "Jack", 20); // 返回一个函数
bindFoo1();
// {value: 1, name: "Jack", age: 20}

var bindFoo2 = bar.bind(foo, "Jack"); // 返回一个函数
bindFoo2(20);
// {value: 1, name: "Jack", age: 20}
```

## js 箭头函数中 this 指向

大部分情况下可以用一句话来概括，this总是指向调用该函数的对象。

但是对于箭头函数并不是这样，是根据外层（函数或者全局）作用域（词法作用域）来决定this。

可以理解成箭头函数中本身没有 this，this 的指向是当前定义的这个函数所处上下文的 this。

箭头函数有几个使用注意点。

- 函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。
- 不可以当作构造函数，也就是说，不可以使用 new 命令，否则会抛出一个错误。
- 不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
- 箭头函数没有 prototype 属性。
- 箭头函数的this无法通过bind，call，apply来直接修改（可以间接修改）
- 改变作用域中this的指向可以改变箭头函数的this。
```js
function closure(){()=>{code }}
```
在此例中，我们通过改变闭包环境`closure.bind(another)()`来改变箭头函数this的指向。

## apply、call、bind比较
- apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
- apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
- apply 、 call 、bind 三者都可以利用后续参数传参；
- bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。