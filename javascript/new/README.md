> new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。 ——（来自于 MDN）

举个 🌰

```js
function Car(color) {
  this.color = color;
}
Car.prototype.start = function () {
  console.log(this.color + " car start");
};

var car = new Car("black");
car.color; // 访问构造函数里的属性
// black

car.start(); // 访问原型里的属性
// black car start
```

可以看出 new 创建的实例有以下 2 个特性：

- 访问到构造函数里的属性
- 访问到原型里的属性

## new 关键字做了什么

当代码 new Foo(...) 执行时，会发生以下事情：

- 一个继承自 Foo.prototype 的新对象被创建。
- 使用指定的参数调用构造函数 Foo ，并将 this 绑定到新创建的对象。new Foo 等同于 new Foo()，也就是没有指定参数列表，Foo 不带任何参数调用的情况。
- 由构造函数返回的对象就是 new 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤 1 创建的对象。

## 模拟 new 关键字的实现

new 是关键词，不可以直接覆盖。这里使用 create 来模拟实现 new 的效果。

new 返回一个新对象，通过 obj.**proto** = Con.prototype 继承构造函数的原型，同时通过 Con.apply(obj, arguments)调用父构造函数实现继承，获取构造函数上的属性

```js
function create() {
	// 1、获得构造函数，同时删除 arguments 中第一个参数
    // shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
    Con = [].shift.call(arguments);
	// 2、创建一个空的对象并链接到原型，obj 可以访问构造函数原型中的属性
    var obj = Object.create(Con.prototype);
	// 3、绑定 this 实现继承，obj 可以访问到构造函数中的属性
    var ret = Con.apply(obj, arguments);
	// 4、优先返回构造函数返回的对象
	return ret instanceof Object ? ret : obj;
};
// 测试
function Car(color) {
  this.color = color;
}
Car.prototype.start = function () {
  console.log(this.color + " car start");
};

var car = create(Car, "black");
car.color;
// black

car.start();
// black car start
```
