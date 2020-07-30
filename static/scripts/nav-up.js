// hides navbar when scrolling down, reveals when scrolling up -- taken from W3 Schools website
$(document).ready(function () {

  var nav = document.getElementById("navbar");
  var prevScrollPos = window.pageYOffset;

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      nav.style.top = "0";
    } else {
      nav.style.top = "-140px";
      console.log('worked?')
    }
    prevScrollPos = currentScrollPos;
  }

});
