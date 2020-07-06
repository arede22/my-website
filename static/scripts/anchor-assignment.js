$(document).ready ( function() {
    var offset1 = $("#about-anchor").offset().top;
    var offset2 = $("#portfolio-anchor").offset().top;
    var offset3 = $("#contactme-anchor").offset().top;

    $(window).on('scroll', function() {
      var list = ['home', 'about', 'portfolio', 'contact-me'];
      const blue = "rgba(129, 207, 224, 1)";
      if ( $(window).scrollTop() < offset1 ) {
        document.getElementById('home').style.color = blue;
        list.shift();
      } else if ( $(window).scrollTop() <= offset2 ) {
        document.getElementById('about').style.color = blue;
        list.splice(1, 1);
      } else if ( $(window).scrollTop() <= offset3 ) {
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
