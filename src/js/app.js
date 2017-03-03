var data = require('./data');
var $ = require("jquery");
let add = (name, image, adress, starts, prices)=>{
  let hotel = document.createElement('section');
  hotel.classList.add('hotel');
  let img = document.createElement('div');
  img.classList.add('img');
  img.setAttribute('style',"background-image: url('"+image+"')");
  hotel.appendChild(img);
  let hotelInfo = document.createElement('div');
  hotelInfo.classList.add('hotel_info');
  hotel.appendChild(hotelInfo);
  let title = document.createElement('div');
  title.classList.add('title');
  title.innerText = name;
  hotelInfo.appendChild(title);
  let stars = document.createElement('div');
  stars.classList.add('stars');

  for(var i = 0; i < 5; i++){

    var s = +starts;

    if(i < s){
      let star = document.createElement('a');
      star.innerText = 'x';
      star.classList.add('item', 'dark');
      stars.appendChild(star);
    }else{
      let star = document.createElement('a');
      star.innerText = 'x';
      star.classList.add('item', 'light');
      stars.appendChild(star);
    }

  }
  hotelInfo.appendChild(stars);
  let price =  document.createElement('div');
  price.classList.add('price')
  price.innerText = prices+' $';
  hotelInfo.appendChild(price);
  let addres =  document.createElement('div');
  addres.classList.add('address')
  addres.innerText = adress;
  hotelInfo.appendChild(addres);
  let button =  document.createElement('button');
  button.classList.add('btn-selected')
  button.innerText = 'Select';
  hotelInfo.appendChild(button);
  let butClose =  document.createElement('button');
  butClose.classList.add('close')
  butClose.innerText = 'X';
  hotelInfo.appendChild(butClose);
  $('.hotels').append(hotel);
}
data.forEach((item)=> {
  add(item.name, item.image,item.address, item.start, item.price);
});


$('.hotels').on('click','.close',function(item) {
  $(this).parent().parent().remove();
})
$('.addHotel').click(function(item){
  $('.formAdd').toggleClass('show');
})
$('#closeM').click(function(item){
  $('.formAdd').removeClass('show');
})

$('#addHotel').click((item)=>{
    let name = $('#h_name').val();
    let image = $('#color').val();
    let address = $('#address').val();
    let stars = $('#start').val();
    let price = $('#price').val();
    if(name != '' && image != '' && address != '' && stars!='' && price != ''){
      add(name,image, address, stars, price);
      $('.formAdd').removeClass('show');
    }else{
      alert('Please enter name and other fields')
    }


})
