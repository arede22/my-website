// need a scroll-by change of url hashing function
$(document).ready ( function() {
    var offset1 = $("#intro-anchor").offset().top;
    var offset2 = $("#portfolio-anchor").offset().top;
    var offset3 = $("#contactme-anchor").offset().top;

    $(window).on('scroll', function() {
      var scrollHeight = window.pageYOffset;

      var list = ['home', 'intro', 'portfolio', 'contact-me'];
      const blue = "rgba(129, 207, 224, 1)";
      if ( scrollHeight < offset1 ) {
        document.getElementById('home').style.color = blue;
        list.shift();
      } else if ( scrollHeight <= offset2 ) {
        document.getElementById('intro').style.color = blue;
        list.splice(1, 1);
      } else if ( scrollHeight <= offset3 ) {
        document.getElementById('portfolio').style.color = blue;
        list.splice(2, 1);
      } else {
        document.getElementById('contact-me').style.color = blue;
        list.pop();
      }

      for (var i = 0; i < 3; i++) {
        document.getElementById(list[i]).style.color = 'white';
      }
    })
  }
)
