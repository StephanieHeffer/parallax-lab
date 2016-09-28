$(function(){
  //Botoes
  $('body').hover(function(){
    $("section#buttons").fadeIn();
  },function(){
    $("section#buttons").fadeOut();
  });

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
          }, 2000);
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
          }, 2000);
        break;
      }
    }
    });

});
