// 获取 description 文本的容器元素
const descriptionText = document.getElementsByClassName('subheading');
// 获取 description 文本内容
const text = descriptionText[0].innerText;

// console.log(text);

// 清空容器元素的内容
descriptionText[0].innerText = '';

// 定义打字效果的函数
function typeWriter(text, i) {
  if (i < text.length) {
    setTimeout(() => {
      descriptionText[0].innerText += text.charAt(i);
      i++;
      typeWriter(text, i);
    }, 100);
  }
}

// 调用打字效果函数
setTimeout(() => {
  typeWriter(text, 0);
}, 500);
// clearTimeout()