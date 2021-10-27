var array = [1, 1, '1', '1'];
// 双层循环法
function unique0(array) {
    // res用来存储结果
    var res = [];
    for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
        for (var j = 0, resLen = res.length; j < resLen; j++ ) {
            // 如果 array[i] 的值跟 res[j] 的值相等，就跳出循环
            if (array[i] === res[j]) {
                break;
            }
        }
        // 如果array[i]是唯一的，那么执行完循环，j等于resLen
        if (j === resLen) {
            res.push(array[i])
        }
    }
    return res;
}

console.log(unique0(array)); // [1, "1"]

// indexOf

function unique1(array){
    var res = [];
    for (var i = 0, len = array.length; i < len; i++) {
        var current = array[i];
        // 如果不存在就推进数组里
        if (res.indexOf(current) === -1) {
            res.push(current)
        }
    }
    return res;
}
console.log(unique1(array));

// filter 版本
function unique2(array) {
    var res = array.filter(function(item, index, array){
        // 如果索引值相同 则是唯一的元素
        return array.indexOf(item) === index;
    })
    return res;
}
console.log(unique2(array));

// es6 版本 Set 和 Map 数据结构
function unique3(array) {
    return Array.from(new Set(array));
 }
 
 console.log(unique3(array)); // [1, 2, "1"]

 function unique4(arr) {
    const seen = new Map()
    return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
}
console.log(unique4(array)); // [1, 2, "1"]