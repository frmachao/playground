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

function bubleSort(arr) {
    for (let i = 0; i < arr.length /*i代表轮数*/; i++) {
        for (let j = 0; j < arr.length - i /*j代表当前轮选中的元素下标*/; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] /*交换元素*/
            }
        }
    }
}
