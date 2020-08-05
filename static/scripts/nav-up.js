// hides navbar when scrolling down, reveals when scrolling up -- taken from W3 Schools website
$(document).ready(function () {

  var nav = document.getElementById("navbar");
  var prevScrollPos = window.pageYOffset;

  if (nav) {
    $(window).on('scroll', function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        nav.style.top = "0";
      } else {
        nav.style.top = "-140px";
      }
      prevScrollPos = currentScrollPos;
    });
  }
});
