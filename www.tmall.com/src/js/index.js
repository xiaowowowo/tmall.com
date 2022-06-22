import $ from './lib/jquery.esm.js';

$.ajax({
  type: "get",
  url: "../interface/getitems.php",
  dataType: "json"
}).then(res => {
  // console.log(res)
  let template = '';

  res.forEach(el => {
    let pic = JSON.parse(el.picture);
    // console.log(pic);
    //   template += `<li class="item">
    //   <a href="./item.html?id=${el.id}">
    //     <div class="picture">
    //       <img src="./${pic[0].src}" alt="${pic[0].alt}">
    //     </div>
    //     <div class="title">${el.title}</div>
    //     <div class="price">${el.price}</div>
    //   </a>
    // </li>`;
    // ../details.html?${el.id}&${getTime()}
    template += ` <div><a href="./details.html?${el.id}&d=${Date.now()}">
         <img src="./${pic[0].src}" >
         <div class="text">${el.title}</div>
         <div class="money">￥${el.price}</div>
   </a></div>`
  });
  // console.log(template)

  $('.b-box').html(template);

}).catch(xhr => {
  console.log(xhr.status);
});