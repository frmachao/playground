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

// 深拷贝

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
