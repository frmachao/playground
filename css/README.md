[CSS 知识图谱 新特性、属性、布局、响应式、动画](https://tsejx.github.io/css-guidebook/)

## Css实现垂直居中的几种方法
- line-height等于hieght
    + 这种方法比较适合文字的居中，其核心是设置行高（line-height）等于包裹他的盒子的高，或者不设高度只设行高
    + 如果是行内元素，因为其没有高度，需先把行内元素转换为行内块或者块元素
- 绝对定位加负外边距
    + 这种方法核心在于先设置需要居中的元素为绝对定位，在设置其top:50%; 加上 margin-top等于负的自身高度的一半来实现居中。好处是实现起来比较方便，且父元素的高度可以为百分比，也不用设行高。代码如下：
```
//html
<div class="main">
  <div class="middle"></div>
</div>
  
//css
.main {
  width: 60px;
  height: 10%;
  background: #dddddd;
  position: relative;//父元素设为相对定位
}
.middle{
  position: absolute;//设为绝对定位
  top: 50%;//top值为50%
  margin-top: -25%;//设margin-top为元素高度的一半
  width: 60px;
  height: 50%;
  background: red;
}


```
- flex布局
    + flex布局可以很方便的实现垂直与水平居中，好处很多，在移动端使用比较广泛
```
//html
<div class="main">
  <div class="middle"></div>
</div>
  
//css
.main {
  width: 60px;
  height: 10%;
  background: #dddddd;
  display: flex;//设为flex
  justify-content: center;//水平居中
  align-items: center;//垂直居中
}
.middle{
  width: 30%;
  height: 50%;
  background: red;
}


```