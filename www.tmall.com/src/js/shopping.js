import $ from './lib/jquery.esm.js';
import cookie from './lib/cookie.js';

// 数据渲染
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
  // console.log(res)
  let template1 = '';
  let template2 = 0 ;
  let template3 = 0 ;
  let count =0 ;
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
                <input type="checkbox" id="checkboxs" name="" value="">
              </div>
              <div class="img"  id="img1">
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
    ++count;
    
    template2 = template2 + Number(current[0].num) ;
    template3 = template3 + el.price *Number(current[0].num);
  })
   
  $('.buy').html(template1);
  $('#anum1').html(template2);
  $('#anum2').html(template2);
  $('#t-price1').html(template3.toFixed(2));
  $('#t-price2').html(template3.toFixed(2));
  $('.buy .remove').on('click', function () {
    let res = shop.filter(el => el.id != $(this).attr('data-id'));
    //排除被点击的元素，剩下内容重新写回cookie
    cookie.set('shop', JSON.stringify(res));
    location.reload(); // 刷新页面
    
    $('#t-price').html();
    $('.buy').html(template1);
  });
  // $('.bottom').html(template2);
}).catch(xhr => {
  console.log(xhr.status);
});

// 切换卡 和 全选
$(function () {

  // 底部添加更多，选项卡切换
  let li = document.querySelectorAll('#main>#wrapper>#shopcar>.add>ul>li');
  let box = document.querySelectorAll('#main>#wrapper>#shopcar>.add>div');
 
  for (let i = 0; i < li.length; i++) {
    //遍历li,为每一个li添加点击事件
    li[i].onmouseover = function () {

      //删除所有li 和 box 的类名
      for (let j = 0; j < li.length; j++) {
        li[j].classList.remove('active');
        box[j].classList.remove('display');
      }
      this.classList.add('active');
      box[i].classList.add('display');

    }

  }


  // 全选框点击效果
  let checkAll1 = $('#checkbox1')
  let checkAll2 = $('#checkbox2')
  let shopcar = $('#main>#wrapper>#shopcar')
  let item = $('#main>#wrapper>#shopcar>.buy>.center>.center1>.input>#checkboxs:checkbox')
  // console.log(item)

  // 使用 checkAll2或者'#checkbox1', item 或者$('#main>#wrapper>#shopcar>.buy>.center>.center1>.input>#checkboxs:checkbox')  效果不一样，有的不能使用变量

  // 全选时，商品全部勾选效果
  shopcar.on('click', '#checkbox1', function () {
    console.log(132)
    console.log(item.prop('checked'))
    $('#main>#wrapper>#shopcar>.buy>.center>.center1>.input>#checkboxs:checkbox').prop('checked', $(this).prop('checked'));
    checkAll2.prop('checked', $(this).prop('checked'));
  });

  shopcar.on('click', '#checkbox2', function () {
    $('#main>#wrapper>#shopcar>.buy>.center>.center1>.input>#checkboxs:checkbox').prop('checked', $(this).prop('checked'));
    checkAll1.prop('checked', $(this).prop('checked'));
  });

  // 商品全部勾选时，全选框自动勾选
  shopcar.on('click', '#checkboxs', function () {
    // 复选框的值 = allcheck 的值
    $('#checkbox1').prop('checked', isAllCheck());
    $('#checkbox2').prop('checked', isAllCheck());
  });

  // 设置商品全部勾选的判断函数，函数为所有复选框的值，全选时为true
  function isAllCheck() {
    // 类数组转数组
    let elm = Array.from($('#main>#wrapper>#shopcar>.buy>.center>.center1>.input>#checkboxs:checkbox'));
    return elm.every(el => $(el).prop('checked'));
  }
})