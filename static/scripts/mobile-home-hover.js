$(document).ready( function() {
  if (window.matchMedia('(max-width: 600px)').matches) {
    const home = document.getElementById("home");
    var extra_list = document.getElementsByClassName("extra");
    home.onmouseover = function() {
      for (var i = 0; i < extra_list.length; i++) {
        extra_list[i].style.display = "block";
      }
    }
    home.onmouseout = function() {
      for (var i = 0; i < extra_list.length; i++) {
        extra_list[i].style.display = "none";
      }
    }
  }
})
