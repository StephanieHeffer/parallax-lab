
function doOnOrientationChange()
  {
  if (window.innerWidth < 768) {
    switch(window.orientation)
    {
      case 0:
             document.getElementById("landscape").style.display="block";
             document.getElementById("displayNone").style.display="none";
             break;
     default:
            document.getElementById("landscape").style.display="none";
            document.getElementById("displayNone").style.display="block";
            break;
    }
  }
}

  //Listen to orientation change
  window.addEventListener('orientationchange', doOnOrientationChange);
