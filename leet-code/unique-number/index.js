const array = [1, 3, 17, 3, 1];
const singleNumber = (array) => {
    for (let i = 0; i < array.length; i++) {
        let found = false;
        for (let j = 0; j < array.length; j++) {
            // 如果两个数相同 且不是同一个数
            if (array[j] === array[i] && i != j) {
                found = true;
                break;
            }
        }
        if (!found) return array[i];
    }
}
console.log('==', singleNumber(array))