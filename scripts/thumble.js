(function(){

var thumble = document.getElementById('thumble');
var main = document.getElementById('thumble-main');
var pad = document.getElementById('thumble-pad');

if (thumble.addEventListener) {
  main.addEventListener("click", toggleThumblePad, false);
} else {
  if (main.attachEvent) {
    main.attachEvent("click", toggleThumblePad);
  }
}


function toggleThumblePad(click) {
  if (main.className.indexOf("off") >= 0) {
    main.className = '';
    pad.className = '';
  } else {
    main.className = 'off';
    pad.className = 'off';
  }
}

})();
