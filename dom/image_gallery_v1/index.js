function showPic(whichpic) {
    // 获取传入元素的属性
    var source = whichpic.getAttribute("href");
    // 获取占位图
    var placeholder = document.getElementById("placeholder");
    // 更改img元素的src属性 来到达切换图片显示
    placeholder.setAttribute("src", source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    // 更改文本节点的值
    description.firstChild.nodeValue = text;
}

// function countBodyChildren() {
//     var body_element = document.getElementsByTagName("body")[0];
//     console.log(body_element.childNodes)
//     alert(body_element.childNodes.length);
// }
// window.onload = countBodyChildren;
