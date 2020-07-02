// hides navbar when scrolling down, reveals when scrolling up -- taken from W3 Schools website
$(document).ready(function () {

  var prevScrollPos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-66px";
    }
    prevScrollPos = currentScrollPos;
  }

});
