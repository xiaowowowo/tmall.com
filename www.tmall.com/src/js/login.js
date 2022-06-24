window.onload = function () {
  let li = document.querySelectorAll('#center>#wrapper>.login>.login-1>ul>li');
  let login1 = document.querySelectorAll('#center>#wrapper>.login>.login-1>div');
  let icon = document.querySelectorAll('#center>#wrapper>.login>.change');
  let login = document.querySelectorAll('#center>#wrapper>.login>div');
 console.log(login)
  // 注意：当用var声明变量时，最后i = 循环后的最大值
  //      用let声明变量时 ，最后 i = 点击到的索引值

  // login-1 内部的点击切换卡效果
  for (let i = 0; i < li.length; i++) {
    // 遍历li,为每一个Li添加点击事件
    li[i].onclick = function () {

      for (let j = 0; j < li.length; j++) {
        // 删除所有li的active类名
        li[j].classList.remove('active');
        // 删除所有display类名
        login1[j].classList.remove('display');
      }
      // 给被点击元素添加类名
      this.classList.add('active');
      // 点击后对应盒子 加 display 类名
      // console.log(i);
      login1[i].classList.add('display');
    }
  }
  // login-1和login-2 的点击切换卡效果,点击消失!
  for (let i = 0; i < icon.length; i++) {
    // 遍历li,为每一个Li添加点击事件
    icon[i].onclick = function () {

      for (let j = 0; j < icon.length; j++) {
        // 删除所有的disappear类名
       icon[j].classList.remove('disappear');

       login[j].classList.remove('disappear');
      }
      // 点击后对应盒子 加 disappear 类名
      // console.log(i);
      login[i].classList.add('disappear');
      this.classList.add('disappear');
    }
  }
}