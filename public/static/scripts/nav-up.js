// hides navbar when scrolling down, reveals when scrolling up -- taken from W3 Schools website
$(document).ready( function() {
  var nav = document.getElementById("navbar");
  var prevScrollPos = window.pageYOffset;

  if (nav) {
    $(window).on('scroll', function() {
      var currentScrollPos = window.pageYOffset;
      if ($(window).scrollTop() < 50) { // show banner & nav at top of page
        nav.style.top = "0";
      } else if (prevScrollPos > currentScrollPos) { // show only nav on scroll up
        nav.style.top = "-66px";
      } else {
        nav.style.top = "-140px"; // show nothing on scroll down
      }
      prevScrollPos = currentScrollPos;
    });
  }
});
