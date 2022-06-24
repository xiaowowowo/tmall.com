import $ from './lib/jquery.esm.js';
import cookie from './lib/cookie.js';

let shop = cookie.get('shop');

shop = JSON.parse(shop);

let idList = shop.map(el => el.id).join();
$.ajax({
  type: "get",
  url: "../interface/shopping.php",
  data: {
    idList
  },
  dataType: "json"
}).then(res => {
  console.log(res)
  let template1 = '';
  res.forEach((el, i) => {
    let pic = JSON.parse(el.picture);
    // console.log(pic)
    let current = shop.filter(elm => elm.id === el.id);
    template1 += ` 
    <div class="top">
    <span>超值换购活动</span>&nbsp;&nbsp;
    满88
  </div>
    <div class="center">
            <div class="center1">
              <div class="input">
                <input type="radio" class="" name="" value="">
              </div>
              <div class="img" >
                <img src="./${pic[0].src}"  alt="">
                <span>
                  <a href="" > ${el.title}</a>
                </span>
              </div>
            </div>
            <div class="box1">
            <textarea name="" id="" cols="15" rows="10">口味:${el.title}</textarea>
            </div>
            <div class="box3" id="price">${el.price}</div>
            <div class="box4"  id="number">${current[0].num}</div>
            <div class="box5">${el.num}</div>
            <div class="box6">
              <button>移入收藏夹</button>
              <button class="remove" data-id="${el.id}">删除</button>
            </div>
            </div>
  
    `
    // let template2 += (el.price * current[0].num).toFixed(2)

  })
  $('.buy').html(template1);
  $('.buy .remove').on('click', function () {
    let res = shop.filter(el => el.id != $(this).attr('data-id')); 
    //排除被点击的元素，剩下内容重新写回cookie
    cookie.set('shop', JSON.stringify(res));
    location.reload();// 刷新页面
    console.log(res)
  });
  // $('.bottom').html(template2);
}).catch(xhr => {
  console.log(xhr.status);
});