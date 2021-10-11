const https = require('https')
const fs = require("fs");

function getRandom (n, m) {
    var num = Math.floor(Math.random() * (m - n + 1) + n)
    return num
}
const sleep = (time) => new Promise((resolve, reject) => {
    console.log(`模拟人为操作等待${time}秒后开始请求`)
    setTimeout(() => {
        resolve(true);
    }, time);
})
/**
 * 下载图片 
 * @param {*保存图片名称} name 
 */
 let updataImg = async(name) => {  
    //先访问图片
    const url=`https://cdn.jsdelivr.net/gh/frmachao/images@blog/home/${name}.jpg`
    await sleep(getRandom(1000,10000))
    https.get(url, (res) => {
        console.log(`开始请求第${name}`)        
    //用来存储图片二进制编码
        let imgData = '';        
     //设置图片编码格式
        res.setEncoding("binary");        
      //检测请求的数据
        res.on('data', (chunk) => {
            imgData += chunk;
        })        
      //请求完成执行的回调
        res.on('end', () => {            
      // 通过文件流操作保存图片
            fs.writeFile(`./img/${name}.jpg`, imgData, 'binary', (error) => {
                if (error) {                    
                            console.log('下载失败',error);
                }
            })
        })
    })
}
for (let index = 1; index < 356; index++) {
    updataImg('pub_'+index)
}