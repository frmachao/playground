const foo=()=>{
    return setTimeout(()=>console.log('First'))
}
const bar =()=>Promise.resolve('Second').then(data=>console.log(data));
const baz=()=>console.log('Third');
foo()
bar()
baz()