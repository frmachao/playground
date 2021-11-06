const array = [10, 11, 3, 66, 2, 9, 10, 1];
const array2 = [
  { id: 111, name: 'jack', type: 'office' },
  { id: 222, name: 'jack', type: 'dep' },
  { id: 333, name: 'jack', type: 'group' }
]
// const res1= array.sort(compare)
const res2 = array.sort(compareNumbers)
function compare(a, b) {
  if (a < b) {
    return -1; // 小于 0 ，那么 a 会被排列到 b 之前
  }
  if (a > b) {
    return 1;//  大于 0 ， b 会被排列到 a 之前
  }
  // a must be equal to b//  等于 0 ， a 和 b 的相对位置不变。
  return 0;
}
function compareNumbers(a, b) {
  return a - b;
}

const sort = (array, orderBy) => {
  array.sort((a, b) => a.type.localeCompare(b.type))
  const index = array.findIndex(item => item.type === orderBy)
  if (index !== -1 && index !== 0) { // 优化，如果 orderBy 已经在第一位不用调整顺序
    console.log(1)
    array.unshift(array[index])
    array.splice(index + 1, 1)
  }
  return array
}
console.log(sort(array2))