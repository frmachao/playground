const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => {
        // 箭头函数 是根据外层（函数或者全局）作用域（词法作用域）来决定this。
        // 这里箭头函数是 shape 对象的一个属性，那么它的作用域就是 shape 的上层，即全局。
        console.log('this==', this)
        return 2 * Math.PI * this.radius
    }
};
console.log(shape.diameter()); // 20
console.log(shape.perimeter());// NaN