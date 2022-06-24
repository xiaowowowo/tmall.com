import $ from './lib/jquery.esm.js';
import cookie from './lib/cookie.js';

let id = location.search.split('&')[0].split('=')[1];
// console.log(id);
let d = Date.now();

$.ajax({
  type: "get",
  url: "../interface/getitems-details.php",
  data: {
    id,
    d
  },
  dataType: "json",
}).then(res => {
  // console.log(res)
  // console.log(res.title)

  let pic = JSON.parse(res.picture);

  let template1 = `  
  <div class="left main1-l">
    <div class="img1">
      <img src="${pic[1].src}" alt="" class="display-img">
      <img src="${pic[2].src}" alt="">
      <img src="${pic[3].src}" alt="">
      <img src="${pic[4].src}" alt="">
      <img src="${pic[5].src}" alt="">
    </div>
    <div class="img2">
    <img src="${pic[1].src}" alt="">
    <img src="${pic[2].src}" alt="">
    <img src="${pic[3].src}" alt="">
    <img src="${pic[4].src}" alt="">
    <img src="${pic[5].src}" alt="">
    </div>
  </div>`;
  let template2 = `
  <div class="img product-img">
  <img src="${pic[1].src}" alt="">
  <img src="${pic[2].src}" alt="">
  <img src="${pic[3].src}" alt="">
  <img src="${pic[4].src}" alt="">
  <img src="${pic[5].src}" alt="">
  </div>
 `;
  // console.log(template)

  $('.main1-l').html(template1);
  $('.product-img').html(template2);
  $('.main1-h4').html(res.title);
  $('.price').html(res.price);
  $('.weight').html(res.weight);
  $('.num').html(res.num);

  $('#btn').on('click', function () {
    addData(res.id, $('#num').val());
  })

}).catch(xhr => {
  console.log(xhr.status);
  // 200 服务器响应正常
});

function addData(id, num) {
  let product = {
    id,
    num
  };
  //从cookie中获得数据
  let shop = cookie.get('shop');

  if (shop) { //判断是否获得数据
    // JSON.parse() 将JSON字符串转换成对象
    shop = JSON.parse(shop);
    // 当商品id在cookie数据中已经存在时 需要修改数量 而不是添加商品,some数组的方法,判断是否存在
    if (shop.some(el => el.id == id)) {
      // 获得商品对象在数组中的索引
      let index = shop.findIndex(elm => elm.id == id);
      //修改数量
      let count = parseInt(shop[index].num);
      // 本次传入的num 
      count += parseInt(num);
      shop[index].num = count;

    } else {
      shop.push(product);
    }
  } else {
    shop = [];
    shop.push(product);

  }

  // 将数组转换成JSON字符串存入cookie
  cookie.set('shop', JSON.stringify(shop));
}