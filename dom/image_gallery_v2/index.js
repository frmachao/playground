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
// 考虑代码的容错性
function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            showPic(this);
            return false;
        }
    }
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareGallery)