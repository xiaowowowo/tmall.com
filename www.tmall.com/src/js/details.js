window.onload = function () {
  let pay = document.querySelector('#main1>.right>.box10>.pay>span')
  let way = document.querySelector('#main1>.right>.box10>.way')
  let gradeLi = document.querySelectorAll('#main2>#wrapper>.serve>.grade>.grade1>.left>ul>li')
  let gradeBox = document.querySelectorAll('#main2>#wrapper>.serve>.grade>.grade1>.right>div')
  let img1 = document.querySelectorAll('#main1>.left >.img1>img')
  let img2 = document.querySelectorAll('#main1>.left >.img2>img')
  let span1 = document.querySelectorAll('#main1>.right >.box6>.right1>span')
  let span2 = document.querySelectorAll('#main1>.right >.box6>.right2>span')
  let span3 = document.querySelectorAll('#main1>.right >.box6>.right3>span')
  // console.log(span1)

  // 支付方式--点击出现，再点击消失效果
  pay.onclick = function () {

    if (way.style.display == 'none') {
      way.style.display = 'block'
      pay.style.transform = 'rotate(180deg)'
    } else {
      way.style.display = 'none'
      pay.style.transform = 'rotate(360deg)'
    }
  }

  // 购买详情--大小图片切换
  for (let i = 0; i < img2.length; i++) {

    img2[i].onmouseover = function () {

      for (let j = 0; j < img2.length; j++) {
        img1[j].classList.remove('display-img')
      }
      img1[i].classList.add('display-img')
    }
  }

  // 购买详情--点击边框变红
  for (let i = 0; i < span1.length; i++) {
    span1[i].onclick = function () {
      for (let j = 0; j < span1.length; j++) {
        span1[j].classList.remove('red');
      }
      span1[i].classList.add('red')
    }
  }
 
  for (let i = 0; i < span3.length; i++) {
    span3[i].onclick = function () {
      for (let j = 0; j < span3.length; j++) {
        span3[j].classList.remove('red');
      }
      span3[i].classList.add('red')
    }
  }
  // 使用报告--选项卡效果
  for (let i = 0; i < gradeLi.length; i++) {

    gradeLi[i].onmouseover = function () {
      //遍历，删除所有盒子的display
      for (let j = 0; j < gradeLi.length; j++) {
        gradeBox[j].classList.remove('display')
      }
      gradeBox[i].classList.add('display')
    }
  }
}