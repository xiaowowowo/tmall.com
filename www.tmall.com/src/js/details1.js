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
    //       <img src="./${pic[0].src}" alt="">
    //     </div>
    //     <div class="title">${el.title}</div>
    //     <div class="price">${el.price}</div>
    //   </a>
    // </li>`;
    template += `  <div class=left main1-l">
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
  </div>`
  });
  // console.log(template)

  $('.main1-l').html(template);

}).catch(xhr => {
  console.log(xhr.status);
});