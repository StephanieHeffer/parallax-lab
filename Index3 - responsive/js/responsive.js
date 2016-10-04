$(document).ready(function() {

  let heightSlide = window.innerHeight;
  let slideStyle = $('#slide3')[0].style;

    slideStyle.height = heightSlide + 'px';

    $(window).resize(function(){
      heightSlide = window.innerHeight;
      slideStyle.height = heightSlide + 'px';

});

});
