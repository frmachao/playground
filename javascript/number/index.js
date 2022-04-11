/**
 * 美化数字 1000-->1K
 * @param {*} _size
 * @returns
 */
 function prettySize(_size) {
    let size = _size;
    const list = ['', 'k', 'm', 'b'];
    let index = 0;
    while (size > 1000 && index < list.length - 1) {
      size = (size / 1000).toFixed(1);
      index += 1;
    }
    return _size && `${size}${list[index]}`;
  }
  
  console.log(prettySize(8888.88))