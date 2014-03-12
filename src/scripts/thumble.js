(function(){

var main = document.getElementById('thumble-main');
var thumble = document.getElementById('thumble');

if (typeof main.className == 'undefined') main.className = '';
if (typeof thumble.className == 'undefined') pad.className = '';

if (main.addEventListener) {
  main.addEventListener("click", showThumblePad, false);
} else {
  if (main.attachEvent) {
    main.attachEvent("click", showThumblePad);
  }
}

if (thumble.addEventListener) {
  thumble.addEventListener("click", hideThumblePad, false);
} else {
  if (thumble.attachEvent) {
    thumble.attachEvent("click", hideThumblePad);
  }
}

function hideThumblePad(click) {
  thumble.className += 'off';
  main.className.replace(/off/g, '');
}

function showThumblePad(click) {
    main.className += 'off';
    thumble.className.replace(/off/g, '');
}

})();
