$(function(){
  //Botoes
  $('body').hover(function(){
    $("section#buttons").fadeIn();
  },function(){
    $("section#buttons").fadeOut();
  });
/** Posição Slides
  var sl_2 = 621;
  var sl_3 = 1391;
  var sl_4 = 2161;
  var sl_5 = 2931;
  var sl_6 = 3701;
  var sl_7 = 4471;
  var sl_8 = 5221;
  var sl_9 = 5991;
  var sl_10 = 6941;
**/
  console.log('logando');

  $(".next").click(function(e){
    e.preventDefault();
    var wScroll = $(window).scrollTop();
    if (wScroll < 621){
      $('html, body').animate({
          scrollTop: '621'
        }, 3000);}
    if (wScroll >= 621 && wScroll <1391){
      $('html, body').animate({
          scrollTop: '1391'
      }, 3000);}
    if (wScroll >= 1391 && wScroll <2161) {
      $('html, body').animate({
          scrollTop: '2161'
      }, 3000);}
    if (wScroll >= 2161 && wScroll <2931) {
      $('html, body').animate({
          scrollTop: '2931'
      }, 3000);}
    if (wScroll >= 2931 && wScroll <3701) {
      $('html, body').animate({
          scrollTop: '3701'
      }, 2000);}
    if (wScroll >= 3701 && wScroll <4471) {
      $('html, body').animate({
         scrollTop: '4471'
      }, 3000);}
    if (wScroll >= 4471 && wScroll <5221) {
      $('html, body').animate({
        scrollTop: '5221'
      }, 3000);}
    if (wScroll >= 5221 && wScroll <5991){
      $('html, body').animate({
         scrollTop: '5991'
      }, 3000);}
    if (wScroll >= 5991 && wScroll <6941){
      $('html, body').animate({
          scrollTop: '6941'
    }, 3000);}
    });

  $(".prev").click(function(e){
    e.preventDefault();
    var wScroll = $(window).scrollTop();
    if (wScroll >= 621 && wScroll <1391){
      $('html, body').animate({
          scrollTop: '0'
      }, 3000);}
    if (wScroll >= 1391 && wScroll <2161) {
      $('html, body').animate({
          scrollTop: '621'
      }, 3000);}
    if (wScroll >= 2161 && wScroll <2931) {
      $('html, body').animate({
          scrollTop: '1391'
      }, 3000);}
    if (wScroll >= 2931 && wScroll <3701) {
      $('html, body').animate({
          scrollTop: '2161'
      }, 2000);}
    if (wScroll >= 3701 && wScroll <4471) {
      $('html, body').animate({
         scrollTop: '2931'
      }, 3000);}
    if (wScroll >= 4471 && wScroll <5221) {
      $('html, body').animate({
        scrollTop: '3701'
      }, 3000);}
    if (wScroll >= 5221 && wScroll <5991){
      $('html, body').animate({
         scrollTop: '4471'
      }, 3000);}
    if (wScroll >= 5991 && wScroll <6941){
      $('html, body').animate({
          scrollTop: '5221'
    }, 3000);}
    if (wScroll >= 6941 && wScroll <7711){
      $('html, body').animate({
          scrollTop: '5991'
        }, 3000);}
    if (wScroll >=7711){
      $('html, body').animate({
          scrollTop: '6941'
        }, 3000); }

    });



  /**$(".next").click(function(e){
    e.preventDefault();
    $('html, body').animate({
            scrollTop: '+=580'
        }, 2000);
    });
  $(".prev").click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: '-=580'
    }, 2000);
  }); **/
});
