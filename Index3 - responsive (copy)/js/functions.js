
var pContainerHeight = $('.mulher').height();

$(window).scroll(function() {
		var wScroll = $(this).scrollTop();
		if (wScroll <= 371) {
			$('.logoOutubro').css({
				'transform': 'translate(0px, '+wScroll /2 +'%)'
			});

			$('.laco').css({
				'transform': 'translate(0px, -'+ wScroll /3.5 +'%)'
			});
		}
		if(wScroll > $('.pics').offset().top - ($(window).height() / 1.2)) {

		    $('.pics figure').each(function(i){

		      setTimeout(function(){
		        $('.pics figure').eq(i).addClass('is-showing');
		      }, (700 * (Math.exp(i * 0.14))) - 700);
		    });

		  }

			var video = document.getElementById('video2');
      var startVideoScrollPosition = 2809;
      var stopVideoScrollPosition = 3209;

      if (wScroll <= stopVideoScrollPosition &&
          wScroll >= startVideoScrollPosition) {
          video.play();
      }
      else {
          video.pause();
      }
});


//$('footer').footerReveal({ shadow: false, zIndex: -101 });