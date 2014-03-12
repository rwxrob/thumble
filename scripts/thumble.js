(function(){

var main = document.getElementById('thumble-main');
var thumble = document.getElementById('thumble');

if (typeof main.className == 'undefined') main.className = '';
if (typeof thumble.className == 'undefined') pad.className = '';

if (main.addEventListener) {
  main.addEventListener("click", showThumble, false);
} else {
  if (main.attachEvent) {
    main.attachEvent("click", showThumble);
  }
}

if (thumble.addEventListener) {
  thumble.addEventListener("click", hideThumble, false);
} else {
  if (thumble.attachEvent) {
    thumble.attachEvent("click", hideThumble);
  }
}

function hideThumble(click) {
  main.className = main.className.replace('off', '');
  //main.className = '';
  thumble.className += 'off';
}

function showThumble(click) {
    main.className += 'off';
    //thumble.className = '';
    thumble.className = thumble.className.replace('off', '');
}

})();
