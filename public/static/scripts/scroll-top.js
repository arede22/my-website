// slow animated scroll to top from button
window.onload = function() {
  if (window.jQuery) {
    var topbutton = document.getElementById("scrolltop");
    if (topbutton) {
      window.onscroll = function() {
        scrollFunction()
      };

      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          topbutton.style.display = "block";
        } else {
          topbutton.style.display = "none";
        }

        var scroll_pos = $(window).scrollTop();
        if (scroll_pos > 10) {

          $("#scrolltop").on("click", function() {
            $("html, body").stop().animate({ scrollTop: 0 }, "slow");
            topbutton.style.display = "none";
          });
        }
      }
    }
  }
};
