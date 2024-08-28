// JavaScript
window.onscroll = function() {headLock()};

var header = document.getElementById("head-line");
var sticky = header.offsetTop;

function headLock() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}