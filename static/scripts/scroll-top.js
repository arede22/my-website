// slow animated scroll to top from button
$(document).ready(function () {
  $(document).scroll(function(){

      var scroll_pos = $(window).scrollTop();
      if(scroll_pos > 10) {

        $("#scrolltop").on("click", function() {
          $("html, body").animate({ scrollTop: 0 }, "slow");
        });
      }
  });
});
