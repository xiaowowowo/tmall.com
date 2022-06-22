window.onload = function () {
  let pay = document.querySelector('#main1>.right>.box10>.pay>span')
  let way = document.querySelector('#main1>.right>.box10>.way')
  let gradeLi = document.querySelectorAll('#main2>#wrapper>.serve>.grade>.grade1>.left>ul>li')
  let gradeBox = document.querySelectorAll('#main2>#wrapper>.serve>.grade>.grade1>.right>div')
  // console.log(gradeBox)

  // 点击出现，再点击消失效果
  pay.onclick = function () {

    if (way.style.display == 'none') {
      way.style.display = 'block'
      pay.style.transform = 'rotate(180deg)'
    } else {
      way.style.display = 'none'
      pay.style.transform = 'rotate(360deg)'
    }
  }

  // 使用报告下的，选项卡效果
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