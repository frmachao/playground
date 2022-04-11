const array = [10, 11, 3, 66, 2, 9, 10, 1];
const array2 = [
  { id: 111, name: 'jack', type: 'office',time:'2021-02-11T08:06:06.630Z' },
  { id: 222, name: 'rose', type: 'dep',time:'2022-02-11T08:06:06.630Z'},
  { id: 333, name: 'nate', type: 'group',time:'2023-02-11T08:06:06.630Z' }
]
// const res1= array.sort(compare)
const res2 = array.sort(compareNumbers)
function compare(a, b) {
  console.log('a===',a)
  console.log('b===',a)
  if (a.time < b.time) { // a<b ，那么 a 会被排列到 b 之前
    return -1; // 降序
  }
  if (a.time > b.tim) {//  a>b ， b 会被排列到 a 之前
    return 1;// 升序
  }
  // a must be equal to b//  等于 0 ， a 和 b 的相对位置不变。
  return -1;
}
function compareNumbers(a, b) {
  return a - b;
}
// 自定义排序
// 含有publishAt值的放到前面
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

array2.sort(compare)
console.log('array2==',array2)