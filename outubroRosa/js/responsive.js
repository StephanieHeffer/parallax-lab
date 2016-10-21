
  function resizeFullSizeSlides() {
    console.log('resizeFullSizeSlides');
    let heightWindow = window.innerHeight;
    let listSlides = $('.fullSizeSlide');

    for (let slideIndex = 0; slideIndex < listSlides.length; slideIndex++) {
        let slideStyle = listSlides[slideIndex].style;
        slideStyle.height = heightWindow + 'px';
    }

}

$(document).ready(resizeFullSizeSlides);
$(window).resize(resizeFullSizeSlides);
