// JavaScript Promise 中的错误处理
const myPromise = new Promise((resolve, reject) => {
    let a = false;
    setTimeout(() => {
      return (a) ? resolve('a is found!'): reject('sorry, no a');
    }, 3000);
  }); 
  myPromise
  .then(a=>{console.log('a=',a)},err=>{console.log('err==',err)})// 
//   .catch(e=>{console.log('e=',e)})// 3秒后输出 e= sorry, no a

//   // Promise 的链式调用
//   const anotherPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('this is the eventual value the promise will return');
//     }, 3000);
//   });
  
//   // CONTINUATION
//   anotherPromise
//   .then(value => { console.log(value) }) // 3s 后返回成功信息：