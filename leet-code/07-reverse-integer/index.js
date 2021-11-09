/* 
给定一个 32 位有符号整数，将整数中的数字进行反转。要求如下：
只翻转数字，符号位不进行翻转。
假设我们的环境只能存储 32 位有符号整数，其数值范围是\small [-2^{31}, 2^{31}-1]。如果反转后的整数溢出，则返回 0。
不能借助JS原生的 reverse 函数 
*/

//示例：
/* 
输入：x = 123
输出：321
输入：x = -123
输出：-321 
*/
// 方法1 使用 javascript 数组、字符串方法
const reverse1 = (x) => {
    const resultArr = [];
    // 转成字符串
    const intToStr = x.toString();
    // 倒序遍历字符串
    for (let i = intToStr.length - 1; i > 0; i--) {
        resultArr.push(intToStr[i]);
    }
    // 判断正负 如果是 - 就在数组头部插入 
    if (intToStr[0] == "-") {
        resultArr.unshift("-");
    } else {
        // 否则就在数组尾部推入
        resultArr.push(intToStr[0]);
    }
    // 字符串数组转整数
    // parseInt(string, radix)   解析一个字符串并返回指定基数的十进制整数
    const resultNum = parseInt(resultArr.join(""));
    // Math.pow() 函数返回基数（base）的指数（exponent）次幂，即 baseexponent
    // 如果超过32位整数 也就是整数溢出时 返回 0
    if (resultNum <= Math.pow(-2, 31) || resultNum >= Math.pow(2, 31) - 1) {
        return 0;
    }
    return resultNum;

}


console.log(reverse0(-123))
// 方法2 数学方法
// https://leetcode-cn.com/problems/reverse-integer/solution/zheng-shu-fan-zhuan-by-leetcode-solution-bccn/
const reverse2 = (x) => {
    // rev 是翻转后的数字
    let rev = 0;
    // 不使用数组 仅通过数学方法 将x中的数字倒序推入rev
    while (x !== 0) {
        // 弹出 x 的末尾数字 digit
        const digit = x % 10;
        x = ~~(x / 10);
        // 将数字 digit 推入 rev 末尾
        rev = rev * 10 + digit;
        if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
            return 0;
        }
    }
    return rev;
};
