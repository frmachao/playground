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
// bar 函数在全局被调用时 this总是指向调用该函数的对象 即 全局，所以value 1
var res0=bar("Jack", 20)
console.log(res0)//{value: 2, name: "Jack", age: 20}
// call()方法调用函数时 指定了 foo 作为this ,所以 bar 函数中的this.value 就是foo 对象中的value 1
var res1=bar.call(foo, "Jack", 20); // 直接执行了函数
console.log(res1)// {value: 1, name: "Jack", age: 20}
// bind()方法调用函数 返回一个绑定了foo 作为 this  的新函数 bindFoo1 所以 value 1
var bindFoo1 = bar.bind(foo, "Jack", 20); // 返回一个函数
bindFoo1();
// {value: 1, name: "Jack", age: 20}

// 传入bind方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数
var bindFoo2 = bar.bind(foo, "Jack"); // 返回一个函数
bindFoo2(20);
// {value: 1, name: "Jack", age: 20}