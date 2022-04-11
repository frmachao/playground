const str=dayjs().format();
console.log('str==',str)
// 2022-10-21 09:30

const format=dayjs('2022-03-22T06:05:42.997Z').format('YYYY-MM-DD HH:mm');
console.log('format==',format)


function formatString(str=''){
    if(str.length>25){
        return `${str.slice(0, 25 - 3)}...`;
    }
    return str
}
const test= formatString('blocklet-registry-service1');
console.log('ytest==',test)