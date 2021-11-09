let arr = randomArr(10000, 100)
console.time('bubleSort')
bubleSort(arr)
console.timeEnd('bubleSort')

function randomArr(arrLen = 100, maxValue = 1000) {
    let arr = []
    for (let i = 0; i < arrLen; i++) {
        arr[i] = Math.floor((maxValue + 1) * Math.random())
    }
    return arr
}

function bubbleSort(arr) {
    var length = arr.length,
        i = 0;
    // 遍历次数为length-1次
    for (; i < length - 1; i++) {
        // 当前遍历的比较次数为length - 当前遍历次数
        for (var j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = [arr[j + 1], arr[j + 1] = arr[j]][0];
            };
        };
    };
    return arr;
};
