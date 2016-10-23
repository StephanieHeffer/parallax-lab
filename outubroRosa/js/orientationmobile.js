/**travar posição
screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;

if (screen.lockOrientationUniversal("landscape-primary")) {
  // orientation was locked
} else {
  // orientation lock failed
} **/
//colocar no body onload="doOnOrientationChange();"
function doOnOrientationChange()
  {
  if (window.innerWidth < 768) {
    switch(window.orientation)
    {
      case 0:
             document.getElementById("landscape").style.display="block";
             break;
      case 90:
            document.getElementById("landscape").style.display="block";
            break;
     default:
            document.getElementById("landscape").style.display="none";
            break;
    }
  }
}

  //Listen to orientation change
  window.addEventListener('orientationchange', doOnOrientationChange);


/* ANOTHER SOLUTION?
http://stackoverflow.com/questions/3501510/blocking-device-rotation-on-mobile-web-pages */
