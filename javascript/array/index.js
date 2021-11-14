var array = [{ value: 1200303 }, { value: 0 }, { value: 0 }]
array.reduce((pre, cur) =>
    pre + cur.value, 0)

var initialValue = 0;
var sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x
    , initialValue
);

console.log(sum) // logs 6