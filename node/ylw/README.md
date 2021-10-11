## 需求说明

- 访问网站
- 获取列表页数据
- 循环列表页数据获取每条数据对应的详情页数据
  - 机构名称
  - 机构类型
  - 机构性质
  - 联系人
  - 固定电话
  - 联系电话
  - 联系地址
- 导出 excel

## 开发环境

- Mac OS v10.15.7
- node v12.16.1
- 用到 npm 包

```json
  "dependencies": {
    "async": "^3.2.0",
    "cheerio": "^1.0.0-rc.5",
    "json2xls": "^0.1.2",
    "nodemon": "^2.0.7",
    "puppeteer-core": "^8.0.0",
    "request": "^2.88.2"
  }
```

## 准备工作

- cheerio 学习操作语法 基本跟 jQuery 一致
- request 请求模块的基本使用
- puppeteer 无头浏览器的基本使用
- node fs 文件模块的基本使用

## 遇到的问题:

### 页面中的数据是 ajax 加载出来的

刚开始使用 request 直接请求页面，发现响应回来的 html 文档并不是完整的，页面上有 ajax 请求，动态生成了一部分 DOM , 我原本想分析它这个 ajax 请求的接口，发现请求地址上有个查询字符串,像这样：
`?ajaxtype=yanglaoxx_showlianxi&rand=0.17592822223231708`
不懂这个 rand 值是怎么计算出来的，实在不想再去扒网站 js 的代码，于是想到用无头浏览器来渲染完整网页；

这里我使用 puppeteer 渲染完整的网页

```js
await page.goto(url, {
  waitUntil: "networkidle0", // 等待网页上所有网络请求结束
});
const html = await page.content();
fs.writeFileSync("./loacl.html", html); // 将 puppeteer 请求回来的页面另存为本地的html文件，方便查看页面是否完整
```

我只安装了 `puppeteer-core` 核心，使用 `puppeteer-core`需要手动指定已安装的 `Chrome `浏览器的安装路径。
`Mac`电脑上`Chrome`浏览器的的安装路径，可以通过在浏览器中输入 `chrome:\\version` 来查看。

```js
const browser = await puppeteer.launch({
  executablePath:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  // args: [ '--proxy-server=http://188.166.215.141:3128' ] // 用你的有效代理服务器替换
});
```

这是 puppeteer 返回的完整 html 结构，包含了 ajax 请求动态生成的 DOM 结构:
![4YZvCU](https://cdn.jsdelivr.net/gh/frmachao/images@blog/uPic/4YZvCU.jpg)

我现在遇到一个问题：在 puppeteer 中使用 cheerio 解析 html 文档 和 在浏览器使用 jquery 的表现不同。

疑问： 这两种 dom 选择有区别吗？

```js
$("#ContactUs > .leftcontext:eq(0)  > .leftcontexttitle:eq(3)").text(); // cheerio 解析不到,浏览器中 jquery 可以正常执行
$("#ContactUs > .leftcontext:eq(0)").children(".leftcontexttitle:eq(3)").text(); //  cheerio 解析成功
```

### 网站反爬

遇到 `pyppeteer.errors.TimeoutError: Navigation Timeout Exceeded: 30000 ms exceeded`
爬取详情页时，访问次数多了 puppeteer 就会报错响应超时 我的思路是让 puppeteer 打开页面前等待 3-10 秒,同时让 puppeteer 等待网站响应的时间无限长

```js
const sleep = (time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
function getRandom(n, m) {
  var num = Math.floor(Math.random() * (m - n + 1) + n);
  return num;
}
//
await sleep(getRandom(3000, 10000));
await page.goto(url, {
  waitUntil: "load", // 这里设置成 load 和 networkidle0 的表现一致，要研究一下两种的区别
  timeout: 0, // 可以等待页面加载的时间，超出就会报错请求超时 填 0 无限等待
});
```

### 需要再去研究的

- load networkidle0 domcontentloaded 三者的区别？
- 在 puppeteer 中使用 cheerio 解析 html 文档 和 在浏览器使用 jquery 的表现不同
- node 中异步流程控制与错误处理

## 开始爬取需要的数据

爬取中
![iRuOZ9](https://cdn.jsdelivr.net/gh/frmachao/images@blog/uPic/iRuOZ9.jpg)
导出为 excel
![p0wkT2](https://cdn.jsdelivr.net/gh/frmachao/images@blog/uPic/p0wkT2.jpg)

其实就是一个功能及其简单的玩具爬虫