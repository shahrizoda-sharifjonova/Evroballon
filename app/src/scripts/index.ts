// Header Menu
const headerButton: HTMLButtonElement = document.querySelector(".header__button");
const headerMenu: HTMLUListElement = document.querySelector(".header__mob");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

headerButton.onclick = menuToggle;

window.onclick = (e: MouseEvent) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

// Header Mob Menu
const nav = document.getElementsByClassName('header__mob-nav__link');
const mobContent = document.getElementsByClassName('header__mob-content');
const navigation = document.getElementsByClassName('header__mob-nav__navigation');

window.addEventListener('click', function(e){
  for(let i = 0; i < nav.length; i++){
    if(e.target == nav[i]){
      if(!e.target.classList.contains('active')){
        navigation[0].classList.toggle('right');
      }
      for(let i = 0; i < nav.length; i++){
        nav[i].classList.remove('active');
      }
      e.target.classList.add('active');
    }
  }
  if(navigation[0].classList.contains('right')){
    mobContent[0].classList.remove('active');
    mobContent[1].classList.add('active');
  }else{
    mobContent[1].classList.remove('active');
    mobContent[0].classList.add('active');
  }
})

// Header Mob Drops
const headerDrop = document.getElementsByClassName('header__mob-drop__btn');


window.addEventListener('click', function(e){
  for(let i = 0; i < headerDrop.length; i++){
    if(e.target == headerDrop[i]){ 
      if(!e.target.classList.contains('active')){
        for(let i = 0; i < headerDrop.length; i++){
          headerDrop[i].classList.remove('active');
        }
        e.target.classList.add('active');
      }else{
        e.target.classList.remove('active');
      }
    }
  }
})

// Heart click
if(document.getElementsByClassName('.products__item-heart')){
  let heart = document.getElementsByClassName('products__item-heart');
  window.addEventListener('click', function(e){
    for(let i = 0; i < heart.length; i++){
      if(e.target == heart[i]){
        e.target.classList.toggle('active');
      }
    }
  })
}

// Slider Item Click
if(document.getElementsByClassName('mainproduct__categories-btn')){
  const sliderButtonEl = document.getElementsByClassName('mainproduct__categories-btn')
  const sliderContent = document.getElementsByClassName('mainproduct__categories-content')
  function sliderButton(el){
    for(let i = 0; i < sliderContent.length; i++){
      sliderContent[i].classList.remove('active');
    }
    let gs = document.getElementsByClassName(el);
    gs[0].classList.add('active');
  }
  window.addEventListener('click', function(e){
    for(let i = 0; i < sliderButtonEl.length; i++){
      if(e.target == sliderButtonEl[i]){
        for(let i = 0; i < sliderButtonEl.length; i++){
          sliderButtonEl[i].classList.remove('active');
        }
      }
      e.target.classList.add('active');
    }
  })
}


// Slider
$('.mainproduct__categories-top').slick({
  infinite: false,
  slidesToShow: 6,
  variableWidth: true,
  slidesToScroll: 1,
  arrows: false,
  centerPadding: '50px',
  touchThreshold: 15,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        variableWidth: true,  
      }
    },
  ]
});

$('.mainproduct__slider-inner').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
});


$('.main-slider_1').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    },
  ]
});
$('.main-slider_2').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 1600,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    },
  ]
});
$('.main-slider_3').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
      }
    },
  ]
});
$('.advantages2__body').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 1600,
  infinite: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
      }
    },
  ]
});

$('.reviews__slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  autoplay: false,
  autoplaySpeed: 1600,
  infinite: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
      }
    },
  ]
});

$('.useful__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  autoplay: false,
  autoplaySpeed: 1600,
  infinite: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
      }
    },
  ]
});

