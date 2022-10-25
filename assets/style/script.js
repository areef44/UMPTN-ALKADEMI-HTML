
var slider_img = document.querySelector('.slider-img');
var assets = ['image1.jpg', 'image2.jpg', 'image3.jpg' , 'image4.jpg'];
var i = 0;

function prev(){
  if(i <= 0) i = assets.length;
  i--;
  return setImg();
}

function next(){
  if(i >= assets.length-1) i = -1;
  i++;
  return setImg();
}

function setImg(){
  return slider_img.setAttribute('src' , 'assets/image/' + assets [i]);
}

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
  nav.classList.toggle('slide');
});