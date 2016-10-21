    //helpers
    function getSlideList() {
        let slideList = $('.bgParallax');
        return slideList;
    }

    const slideScrollDuration = 1100;
    let slideScrollIsHappening = false;

    function scrollToSlide(slideElement){
      if (slideScrollIsHappening) {
        return;
      }
      slideScrollIsHappening = true;
      scrollIsStarting();

      $('html, body').animate({
          scrollTop: slideElement.offsetTop
      }, slideScrollDuration);

      window.setTimeout(function() {
          scrollIsEnding(slideElement);
          slideScrollIsHappening = false;
      }, slideScrollDuration);
    }

    function scrollIsStarting() {
      //pauses any playing video
      let videoElementList = $('video');
      for (let index = 0; index < videoElementList.length; index++){
        let videoElement = videoElementList[index];
        if (!videoElement.paused){
          videoElement.pause();
        }
        if (videoElement.ended){
          //if video has ended, reload its once it is out of sight
          window.setTimeout(function(){
            videoElement.load();
          }, slideScrollDuration);
        }
      }
    }

    function scrollIsEnding(currentSlideElement){
      //starts to play if there is a video in current slide
      let videoList = $(currentSlideElement).find('video');
      for (let index = 0; index < videoList.length; index++){
        let videoElement = videoList[index];
        if ($(videoElement).css('display') != 'none'){
          videoElement.play();
        }
      }
    }

    function goToFirstSlide(){
      if (slideScrollIsHappening) {
        return;
      }

      let slideList = getSlideList();
      scrollToSlide(slideList[0]);
    }

    function goToLastSlide(){
      if (slideScrollIsHappening){
        return;
      }

      let slideList = getSlideList();
      scrollToSlide(slideList[slideList.length -1]);
    }

    function goToNextSlide(){
      if (slideScrollIsHappening) {
        return;
      }

      let windowCurrentScrollPosition = $(window).scrollTop();
      let slideList = getSlideList();

      for (let slideIndex = 0; slideIndex < slideList.length; slideIndex++) {
          let slide = slideList[slideIndex];
          if (windowCurrentScrollPosition < slide.offsetTop) {
              scrollToSlide(slide);
              break;
          }
      }
    }

    function goToPreviousSlide(){
      if (slideScrollIsHappening) {
        return;
      }

      let windowCurrentScrollPosition = $(window).scrollTop();
      let slideList = getSlideList();

      for (let slideIndex = slideList.length - 1; slideIndex >= 0; slideIndex--) {
          let slide = slideList[slideIndex];
          if (windowCurrentScrollPosition > slide.offsetTop) {
              scrollToSlide(slide);
              break;
          }
      }

    }

    //attaching events
    $(document).ready(function(){

        //buttons
        $(".next").click(function(e) {
            e.preventDefault();
            goToNextSlide();
        });

        $(".prev").click(function(e) {
            e.preventDefault();
            goToPreviousSlide();
        });

        $('body').hover(function() {
            $("section#buttons").fadeIn();
          }, function() {
            $("section#buttons").fadeOut();
          }
        );

        //mousewheel
        document.onmousewheel = function(e) {
            e.preventDefault();
            if ((e.wheelDelta < 0) || (e.detail < 0)) {
                goToNextSlide();
            } else {
                goToPreviousSlide();
            }
        };

        //keyboard
        document.onkeydown = function(e) {
            switch (e.keyCode) {
                case 36: //home
                  goToFirstSlide();
                  break;
                case 35: //end
                  goToLastSlide();
                  break;
                case 33: //pageUp
                case 37: //left
                case 38: //up
                    goToPreviousSlide();
                    break;
                case 34: //pageDown
                case 39: //right
                case 40: //down
                    goToNextSlide();
                    break;
            }
        };

        let touchStartClientY = null;
        $('body').bind('touchmove', function(e) {
          e.preventDefault();
          let clientY = e.originalEvent.touches[0].clientY;

          if (touchStartClientY == null) {
            touchStartClientY = clientY;
            window.setTimeout(function(){
              touchStartClientY = null;
            }, 1000);
            return;
          }

          let deltaY = touchStartClientY - clientY;
          if(Math.abs(deltaY) >= 48){
            if(deltaY > 0){
              goToNextSlide();
            } else {
              goToPreviousSlide();
            }
          }
        });

    });