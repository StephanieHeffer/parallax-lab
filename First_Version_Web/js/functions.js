var pContainerHeight = $('.mulher').height();

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    let video = document.getElementById('video2');

    let topoSlide14 = $('#slide14')[0].offsetTop;

    if ((wScroll > topoSlide14 - 50) && (wScroll < topoSlide14 + 50)) {
        video.play();
    } else {
        video.pause();
    }

    let video5 = document.getElementById('video1');

    let topoSlide5 = $('#slide5')[0].offsetTop;

    if ((wScroll > topoSlide5 - 50) && (wScroll < topoSlide5 + 50)) {
        video5.play();
    } else {
        video5.pause();
    }

    let video11 = document.getElementById('video3');

    let topoSlide11 = $('#slide11')[0].offsetTop;

    if ((wScroll > topoSlide11 - 50) && (wScroll < topoSlide11 + 50)) {
        video11.play();
    } else {
        video11.pause();
    }

    let video12 = document.getElementById('video12');

    let topoSlide12 = $('#slide12')[0].offsetTop;

    if ((wScroll > topoSlide12 - 50) && (wScroll < topoSlide12 + 50)) {
        video12.play();
    } else {
        video12.pause();
    }

});
