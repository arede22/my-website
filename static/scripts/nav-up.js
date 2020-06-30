// hides navbar when scrolling down, reveals when scrolling up -- taken from W3 Schools website
$(document).ready(function () {

  var c = 0;
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      while (c <= 66) {
        document.getElementById("navbar").style.top = "-" + c + "px";
        c += 6;
      }
      c = 0;
    }
    prevScrollpos = currentScrollPos;
  }

});
