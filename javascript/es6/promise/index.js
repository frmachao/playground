const Pending = Symbol('Pending');
const Fulfilled = Symbol('Fulfilled');
const Rejected = Symbol('Rejected');

const handleValue = (promise, x, resolve, reject) => {
    console.log('x==', x)
    // 循环引用，自己等待自己完成，会出错，用reject传递出错误原因
    if (promise === x) {
        return reject(new TypeError('检测到Promise的链式循环引用'))
    }
    // 确保只传递出去一次值
    let once = false;
    if ((x !== null && typeof x === 'object') || typeof x === 'function') {
        // 防止重复去读取x.then
        let then = x.then;
        // 判断x是不是Promise
        if (typeof then === 'function') {
            //调用then实例方法处理Promise执行结果
            then.call(x, y => {
                if (once) return;
                once = true;
                // 防止Promise中Promise执行成功后又传递一个Promise过来，
                // 要做递归解析。
                handleValue(promise, y, resolve, reject);
            }, r => {
                if (once) return;
                once = true;
                reject(r);
            })
        } else {
            // 如果x是个普通对象，直接调用resolve(x)
            resolve(x);
        }
    } else {
        // 如果x是个原始值，直接调用resolve(x)
        resolve(x);
    }
}

class Promise {
    constructor(executor) {
        this.status = Pending;// 存储 Promise 的状态
        this.value = undefined;//存储executor函数中业务代码执行成功的结果
        this.reason = undefined;//存储executor函数中业务代码执行失败的原因
        this.onFulfilled = []; //executor函数中业务代码执行成功回调函数的集合
        this.onRejected = []; //executor函数中业务代码执行失败回调函数的集合
        const resolve = (value) => {
            // 只有当状态为 Pending 才会改变，来保证一旦状态改变就不会再变。
            if (this.status === Pending) {
                this.status = Fulfilled;
                this.value = value;
                // 依次调用成功回调函数
                this.onFulfilled.forEach(fn => fn());
            }
        };
        const reject = (value) => {
            // 只有当状态为 Pending 才会改变，来保证一旦状态改变就不会再变。
            if (this.status === Pending) {
                this.status = Rejected;
                this.reason = value;
                // 依次调用失败回调函数
                this.onRejected.forEach(fn => fn());
            }
        };
        // Promise 构造函数接收 executor 函数作为参数，且在其中执行 executor 函数。
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error)
        }
    }
    // 静态方法 返回一个带有拒绝原因的Promise对象。
    static reject(param){
        return new Promise((resolve,reject) =>{
            reject(param)
        })
    }
    // 静态方法 Promise.resolve返回一个解析过的Promise对象。
    static resolve(param) {
        if (param instanceof Promise){
            return param;
        }
        return new Promise((resolve,reject) =>{
            if(
                param && 
                Object.prototype.toString.call(param) === '[object Object]' && 
                typeof param.then === 'function'
            ){
                setTimeout(() =>{
                    param.then(resolve,reject)
                },0)
            }else{
                resolve(param)
            }
        })
    }
    // 迭代器中的promise都解决才会返回解决，有一个拒绝就返回拒绝。
    static all(promises) {
        //将参数promises转为一个真正的数组
        promises = Array.from(promises);
        return new Promise((resolve, reject) => {
            const length = promises.length;
            let value = [];
            if (length) {
                value = Array.apply(null, {
                    length: length
                })
                for (let i = 0; i < length; i++) {
                    Promise.resolve(promises[i]).then(
                        res => {
                            value[i] = res;
                            if (value.length == length) {
                                resolve(value);
                            }
                        },
                        err => {
                            reject(err)
                            return;
                        }
                    )
                }
            } else {
                resolve(value)
            }
        })
    }
    // 一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。
    static race(promises) {
        //将参数promises转为一个真正的数组
        promises = Array.from(promises);
        return new Promise((resolve, reject) => {
            const length = promises.length;
            if (length) {
                for (let i = 0; i < length; i++) {
                    Promise.resolve(promises[i]).then(
                        res => {
                            resolve(res);
                            return;
                        },
                        err => {
                            reject(err)
                            return;
                        }
                    )
                }
            } else {
                return
            }
        })
    }
    // then 实例方法中调用回调函数时，还要把 executor 函数中业务代码的执行结果作为参数传递进去
    // then 实例方法的业务用途应该是用来添加 Promise 状态改变时的回调函数，状态变为已成功的回调函数通过第一个参数传递进去添加，状态变为已失败的回调函数通过第二个参数传递进去添加
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
        onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };
        let promise = new Promise((resolve, reject) => {
            if (this.status === Fulfilled) {
                if (onFulfilled && typeof onFulfilled === 'function') {
                    setTimeout(() => {
                        try{
                            let x = onFulfilled(this.value);
                            handleValue(promise, x, resolve, reject);
                        }catch(error){
                            reject(error)
                        }
                    }, 0)
                }
            }
            if (this.status === Rejected) {
                if (onRejected && typeof onRejected === 'function') {
                    setTimeout(() => {
                        let x = onRejected(this.reason);
                        handleValue(promise, x, resolve, reject);
                    }, 0)
                }
            }
            if (this.status === Pending) {
                if (onFulfilled && typeof onFulfilled === 'function') {
                    this.onFulfilled.push(() => {
                        setTimeout(() => {
                            let x = onFulfilled(this.value);
                            handleValue(promise, x, resolve, reject);
                        }, 0)
                    })
                }
                if (onRejected && typeof onRejected === 'function') {
                    this.onRejected.push(() => {
                        setTimeout(() => {
                            let x = onRejected(this.reason);
                            handleValue(promise, x, resolve, reject);
                        }, 0)
                    })
                }
            }
        })
        return promise
    }
    catch(onRejected){
        this.then(null, onRejected)
    }


}
// 测试
const test = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('"执行成功"')
    }, 3000)

})
test.then().then(res =>{
    console.log(res)
})
