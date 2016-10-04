$(function(){
  //Botoes
  $('body').hover(function(){
    $("section#buttons").fadeIn();
  },function(){
    $("section#buttons").fadeOut();
  });

//mouse
let onmousewheelIsExecuting = false;

document.onmousewheel = function(e){

  if (onmousewheelIsExecuting == true){
    return;
  }

  onmousewheelIsExecuting = true;

 if ((e.wheelDelta < 0) || (e.detail < 0)){
      $(".next").click();
    }
 else{
    $(".prev").click();
 }

 window.setTimeout(function(){
   onmousewheelIsExecuting = false;
 }, 2000);

};

//keyboard
document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 33: ;//pageUp
      case 37: ;//left
      case 38: //up
          $(".prev").click();
          break;
      case 34: ;//pageDown
      case 39: ;//right
      case 40: //down
          $(".next").click();
          break;
    }
};

//Slide
  function getSlideStructure(){
    let scrollPosition = $(window).scrollTop();
    let list = $('.bgParallax');
    let total = list.length;

    let slideStructure = {
      windowCurrentScrollPosition: scrollPosition,
      slideList: list,
      totalSlides: total
    };
    return slideStructure;
  }

  $(".next").click(function(e){
    e.preventDefault();

    let s = getSlideStructure();

    for(let slideIndex = 0; slideIndex < s.totalSlides; slideIndex++){
      let slide = s.slideList[slideIndex];
      let slideOffsetTop = slide.offsetTop;

      if(s.windowCurrentScrollPosition < slideOffsetTop){
        $('html, body').animate({
            scrollTop: slideOffsetTop
          }, 1500);
        break;
      }
    }
  });

  $(".prev").click(function(e){
    e.preventDefault();

    let s = getSlideStructure();

    for(let slideIndex = s.totalSlides - 1; slideIndex >= 0; slideIndex--){
      let slide = s.slideList[slideIndex];
      let slideOffsetTop = slide.offsetTop;

      if(s.windowCurrentScrollPosition > slideOffsetTop){
        $('html, body').animate({
            scrollTop: slideOffsetTop
          }, 1500);
        break;
      }
    }
    });


});
