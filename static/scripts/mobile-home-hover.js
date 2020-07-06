$(document).ready( function() {
  if (window.matchMedia('(max-width: 600px)').matches) {
    const home = document.getElementById("home");
    var extra_list = document.getElementsByClassName("extra");
    home.onmouseover = function() {
      for (var i = 0; i < extras.length; i++) {
        extras[i].style.display = "block";
      }
    }
    home.onmouseout = function() {
      for (var i = 0; i < extra_list.length; i++) {
        extras[i].style.display = "none";
      }
    }
  }
})
