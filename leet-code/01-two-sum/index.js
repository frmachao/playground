/* 
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。
但是，数组中同一个元素不能使用两遍。

示例：

给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        // 数组中同一个元素不能使用两遍
    for (let j = i + 1; j < nums.length; j++) {
        if (target - nums[i] === nums[j]) {
            return [i, j];
        }
    }
}
};
const twoSum1 = (array, number) => {
    const map = new Map();
    // for (let i = 0; i < array.length; i++) {
    //     map.set(array[i], i)
    // }
    for (let j = 0; j < array.length; j++) {
        map.set(array[j], j)
       const elm= number-array[j]
       if(map.has(elm)&&map.get(elm)!==j){
           return [j,map.get(elm)]
       }
    }
}
var array=[2,7,11,15,1,8]
// console.log(twoSum(array,9))
console.log(twoSum1(array,9))
