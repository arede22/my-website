// need a scroll-by change of url hashing function
$(document).ready ( function() {

  if (document.getElementById('intro-anchor')) {
    function getY(element) {
      var yPosition = 0;

      while(element) {
          yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
          element = element.offsetParent;
      }

      return yPosition;
    }

    var offset1 = getY(document.getElementById('intro-anchor'));
    var offset2 = getY(document.getElementById('portfolio-anchor'));
    var offset3 = getY(document.getElementById('contactme-anchor'));

    $(window).on('scroll', function() {
      var scrollHeight = window.pageYOffset;

      var list = ['home', 'intro', 'portfolio', 'contact-me'];
      const blue = "#81cfe0";
      if ( scrollHeight < offset1 ) {
        document.getElementById('home').style.color = blue;
        list.shift();
      } else if ( scrollHeight < offset2 ) {
        document.getElementById('intro').style.color = blue;
        list.splice(1, 1);
      } else if ( scrollHeight < offset3 ) {
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
})
