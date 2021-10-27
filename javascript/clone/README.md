[toc]
参考：[https://muyiy.cn/blog/4/4.1.html](https://muyiy.cn/blog/4/4.1.html)
## 赋值
> 赋值是将某一数值或对象赋给某个变量的过程，分为下面 2 部分

- 基本数据类型：赋值，赋值之后两个变量互不影响
- 引用数据类型：赋址，两个变量具有相同的引用，指向同一个对象，相互之间有影响

对基本类型进行赋值操作，两个变量互不影响。
```js
let a = "muyiy";
let b = a;
console.log(b);
// muyiy

a = "change";
console.log(a);
// change
console.log(b);
// muyiy
```
对引用类型进行赋址操作，两个变量指向同一个对象，改变变量 a 之后会影响变量 b，哪怕改变的只是对象 a 中的基本类型数据。
```js
let a = {
    name: "muyiy",
    book: {
        title: "You Don't Know JS",
        price: "45"
    }
}
let b = a;
console.log(b);
// {
// 	name: "muyiy",
// 	book: {title: "You Don't Know JS", price: "45"}
// } 

a.name = "change";
a.book.price = "55";
console.log(a);
// {
// 	name: "change",
// 	book: {title: "You Don't Know JS", price: "55"}
// } 

console.log(b);
// {
// 	name: "change",
// 	book: {title: "You Don't Know JS", price: "55"}
// } 
```
通常在开发中并不希望改变变量 a 之后会影响到变量 b，这时就需要用到浅拷贝和深拷贝。

## 浅拷贝
### 什么是浅拷贝？
创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。

![2021-10-27-YgHjX9](https://cdn.jsdelivr.net/gh/frmachao/images@blog/uPic/2021-10-27-YgHjX9.jpg)

上图中，SourceObject 是原对象，其中包含基本类型属性 field1 和引用类型属性 refObj。浅拷贝之后基本类型数据 field2 和 filed1 是不同属性，互不影响。但引用类型 refObj 仍然是同一个，改变之后会对另一个对象产生影响。

简单来说可以理解为浅拷贝只解决了第一层的问题，拷贝第一层的基本类型值，以及第一层的引用类型地址。

### 浅拷贝的使用
- Object.assign()
- 展开语法 Spread
- Array.prototype.slice()

## 深拷贝(Deep Copy)
### 什么是很拷贝
深拷贝会拷贝所有的属性，并拷贝属性指向的动态分配的内存。当对象和它所引用的对象一起拷贝时即发生深拷贝。深拷贝相比于浅拷贝速度较慢并且花销较大。拷贝前后两个对象互不影响。

![2021-10-27-7XQaWC](https://cdn.jsdelivr.net/gh/frmachao/images@blog/uPic/2021-10-27-7XQaWC.jpg)
### 深拷贝使用场景
- JSON.parse(JSON.stringify(object))

该存在的问题：
1. 会忽略 undefined
2. 会忽略 symbol
3. 不能序列化函数
```js
let obj = {
    name: 'muyiy',
    a: undefined,
    b: Symbol('muyiy'),
    c: function() {}
}
console.log(obj);
// {
// 	name: "muyiy", 
// 	a: undefined, 
//  b: Symbol(muyiy), 
//  c: ƒ ()
// }

let b = JSON.parse(JSON.stringify(obj));
console.log(b);
// {name: "muyiy"}
```
4. 不能解决循环引用的对象
```js
let obj = {
    a: 1,
    b: {
        c: 2,
   		d: 3
    }
}
obj.a = obj.b;
obj.b.c = obj.a;
let b = JSON.parse(JSON.stringify(obj));
// Uncaught TypeError: Converting circular structure to JSON
```
5. 不能正确处理new Date()
6. 不能处理正则

## 自己实现浅拷贝
```js
// 浅拷贝
function shallowCopy(obj) {
    // 只拷贝对象
    if (typeof obj !== 'object') return;
    // 根据obj的类型判断是新建一个数组还是对象
    var newObj = obj instanceof Array ? [] : {};
    // 遍历obj，并且判断是obj的属性才拷贝
    for (var key in obj) {
        // hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键)
        // 遍历一个对象的所有自身属性
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
// 测试
var obj={a:1,b:{name:'jack'},fn:()=>{}}
var newobj= shallowCopy(obj)
obj.b.name='rose'
console.log('newobj==',newobj)// {a:1,b:{name:'rose'},fn:()=>{}}
```
## 自己实现深拷贝
```js
 function deepCopy(obj) {
    if (typeof obj !== 'object') return;
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            // 如果是对象，我们递归调用深拷贝函数
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}
// 测试
var obj2={a:1,b:{name:'jack'},fn:()=>{}}
var newobj2= deepCopy(obj2)
obj2.b.name='rose'
console.log('newobj2==',newobj2)// {a:1,b:{name:'jack'},fn:()=>{}}
```
