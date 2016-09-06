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
});

/**
$('div.bgParallax').each(function(){
	var $obj = $(this);

	$(window).scroll(function() {
		var yPos = -($(window).scrollTop() / $obj.data('speed'));

		var bgpos = '50% '+ yPos + 'px';

		$obj.css('background-position', bgpos );

	});
});
**/

/**$('footer').footerReveal({ shadow: false, zIndex: -101 }); **/
