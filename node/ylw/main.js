// 请求模块（1.访问网站）
const request = require('request');
// 可以看做成node版的jQuery（2.获取页面指定数据源）
const cheerio = require("cheerio");
// node异步流程控制 异步循环（3.根据页面数据源再访问详情数据）
const async = require("async");

const fs = require("fs");
// 无头浏览器
const puppeteer = require('puppeteer-core');
// json 导出 excel
const json2xls = require('json2xls');
const sleep = (time) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true);
    }, time);
})
function getRandom (n, m) {
    var num = Math.floor(Math.random() * (m - n + 1) + n)
    return num
}
async function requestInfo(url) {
    //  url = 'http://www.yanglaocn.com/shtml/ylyxx/2016-09/yly147332375024738.html'
    console.log('开始请求详情页', url)
    //模拟人为操作 打开页面后等待3-10秒
    await sleep(getRandom(3000, 10000))
    const browser = await puppeteer.launch({
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        headless: true,
        // args: [ '--proxy-server=http://188.166.215.141:3128' ] // 用你的有效代理服务器替换
    });
    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: 'load',
        timeout: 0 // 可以等待页面加载的时间，超出就会报错请求超时 填 0 无限等待
    })
    const html = await page.content()
    // fs.writeFileSync('./test.html', html)
    const $ = cheerio.load(html);
    let info = {};
    info.机构名称 = $("#BasicInformation > .leftcontext_left > .leftcontexttitle > label").text().trim();
    info.成立时间 = $("#BasicInformation > .leftcontext_left > .leftcontexttitleT:eq(0)").text().trim();
    info.床位数量 = $("#BasicInformation > .leftcontext_left > .leftcontexttitleT:eq(1)").text().trim();
    info.占地面积 = $("#BasicInformation > .leftcontext_left > .leftcontexttitleT:eq(2)").text().trim();
    info.收住对象 = $("#BasicInformation > .leftcontext_left > .leftcontexttitleT:eq(3)").text().trim();
    info.收费区间 = $("#BasicInformation > .leftcontext_left > .leftcontexttitleT:eq(4)").text().trim();
    info.员工人数 = $("#BasicInformation > .leftcontext_left > .leftcontexttitleT:eq(5)").text().trim();
    info.机构性质 = $("#BasicInformation > .leftcontext_left > .leftcontexttitleT:eq(6)").text().trim();
    info.机构类型 = $("#BasicInformation > .leftcontext_left > .leftcontexttitleT:eq(7)").text().trim();
    info.员工人数 = $("#BasicInformation > .leftcontext_left > .leftcontexttitleT:eq(5)").text().trim();
    info.联系人 = $("#ContactUs #leftcontext_id > .leftcontexttitle:eq(0)").text().trim();
    info.固定电话 = $("#ContactUs #leftcontext_id > .leftcontexttitle:eq(1)").text().trim();
    info.手机号码 = $("#ContactUs #leftcontext_id > .leftcontexttitle:eq(2)").text().trim();
    info.联系地址 = $("#ContactUs > .leftcontext:eq(0)").children('.leftcontexttitle:eq(3)').text().trim()
    info.数据来源 = url
    browser.close();
    console.log('info==', info)
    return info
};
// requestInfo()
async function requestPage(page = 1, callback) {
    console.log('开始请求列表页面', page)
    request({
        url: 'http://www.yanglaocn.com/yanglaoyuan/yly/?RgSelect=081301&page=' + page,
        method: 'get',
        headers: {
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
            // 'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Cache-Control': 'no-cache',
        },
        encoding: null
    }, async (err, res, body) => {
        const list = [];
        const $ = cheerio.load(body.toString());
        // 获取指定元素
        let item = $("#yly_list_div  div[class='jiadiantujianjie_but']");
        // 循环得到元素的跳转地址和名称
        item.map((i, index) => {
            let obj = {};
            obj.link = $(index).children('a').attr('href');
            list.push(obj);
        });
        // console.log('list', list); // [{ link: 'http://xxxx.com', name: 'abc' }]
        callback(null, list);
    }
    );
}
async function main() {
    const requestList = [];
    for (let i = 1; i <= 20; i++) {
        requestList.push(callback => {
            requestPage(i, callback);
        });
    }
    console.log('requestList', requestList); // [Function, Function] 全是function的数组
    async.series(requestList, (err, result) => {
        // async.series 我不会用
        const arry = [].concat.apply([], result);
        const infoList = [];
        (async () => {
            for (let index = 0; index < arry.length; index++) {
                const reust = await requestInfo(arry[index].link)
                infoList.push(reust);
            }
            const xls = json2xls(infoList);
            // 将返回结果转成excel
            fs.writeFileSync('成都.xlsx', xls, 'binary');
            process.exit()
        })()
    });
}

main();
