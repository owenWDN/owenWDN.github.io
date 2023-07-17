(function() {
  let a_idx = 0;
  // 获取整个页面所有的script 标签
  let scripts = document.getElementsByTagName("script");
  // Array.from() 将 scripts 转换为数组，并使用 filter() 方法筛选出满足特定条件的 <script> 元素。条件包括具有 src 属性且该属性值包含 "mouseclick.js"，以及具有 content 属性。最终，将满足条件的第一个 <script> 元素存储在 script 变量中。
  let script = Array.from(scripts).filter(script =>
    script.getAttribute("src") &&
    script.getAttribute("src").indexOf("mouseclick.js") > -1 &&
    script.getAttribute("content"))[0];
  // 英文句子的数组 
  let a = script.getAttribute("content").split(",");
  // 颜色数组
  let f_colors = script.getAttribute("color").split(",");

  jQuery(document).ready(function($) {
    $("body").click(function(e) {

      // 将 a 数组中 a_idx 索引处的值作为文本内容赋给该元素  初始值是0 第一个
      let $i = $("<span/>").text(a[a_idx]);

      // 这行代码用于更新 a_idx 变量的值，以便在下次点击时选择下一个文本内容。当 a_idx 增加到超过 a 数组的长度时，会将其重置为 0，以实现循环。
      a_idx = (a_idx + 1) % a.length;
      // 这行代码获取点击事件的页面坐标，并将其保存在 x 和 y 变量中。
      let x = e.pageX,y = e.pageY;
      // 设置样式
      $i.css({
        "z-index": 100000000,
        "top": y - 20,
        "left": x,
        "position": "absolute",
        "font-weight": "bold",
        "color": f_colors[a_idx]
      });
      // 加到页面上
      $("body").append($i);
      // 使其向上移动并逐渐消失
      $i.animate({
        "top": y - 180,
        "opacity": 0
      }, 2000, function() {
        $i.remove();
      });
    });
  });
})()