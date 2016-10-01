function resizeSlides(){
  let heightSlide = window.innerHeight;
  let slide2 = $('#slide3')[0];

  $(window).resize(function(){
    heightSlide = window.innerHeight;
    widthSlide = $('.bgParallax').innerWidth;



};

/*
let heightSlide;
let widthSlide;

$(window).resize(function(){
  heightSlide = $('.bgParallax').innerHeight;
  widthSlide = $('.bgParallax').innerWidth;
});
*/
