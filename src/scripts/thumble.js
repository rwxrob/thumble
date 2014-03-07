(function(){

var thumble = document.getElementById('thumble');
var main = document.getElementById('thumble-main');
var btns = document.getElementById('thumble-btns');
var pad = document.getElementById('thumble-pad');
var body = document.getElementsByTagName('body')[0];

// TODO add inferred sizes of the main thumble elements
// rather than requiring they be hard coded in the CSS

if (typeof main.className == 'undefined') main.className = '';
if (typeof btns.className == 'undefined') btns.className = '';
if (typeof pad.className == 'undefined') pad.className = '';
if (typeof body.className == 'undefined') body.className = '';

if (thumble.addEventListener) {
  main.addEventListener("click", toggleThumblePad, false);
} else {
  if (main.attachEvent) {
    main.attachEvent("click", toggleThumblePad);
  }
}

function toggleThumblePad(click) {
  if (main.className.indexOf("off") >= 0) {
    main.className = main.className.replace(/off/g, '');
    btns.className = btns.className.replace(/off/g, '');
    pad.className = pad.className.replace(/off/g, '');
    body.className = pad.className.replace(/off/g, '');
  } else {
    main.className += 'off';
    btns.className += 'off';
    pad.className += 'off';
    body.className += 'off';
  }
}

})();
