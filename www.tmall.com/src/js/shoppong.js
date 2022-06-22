window.onload = function(){
  let li=document.querySelectorAll('#main>#wrapper>#shopcar>.add>ul>li');
 
  let box=document.querySelectorAll('#main>#wrapper>#shopcar>.add>div');
  console.log(box)

  for(let i=0;i<li.length;i++){
    //遍历li,为每一个li添加点击事件
    li[i].onmouseover = function(){

      //删除所有li 和 box 的类名
      for(j=0;j<li.length;j++){
        li[j].classList.remove('active');
        box[j].classList.remove('display');
      }
      this.classList.add('active');
      box[i].classList.add('display');

    }
   
  }
}