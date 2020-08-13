// onhover should work but not like dropdown yet, i.e. cannot click on links despite them appearing
$(document).ready( function() {
  const home = document.getElementById("home");
  if (home && window.matchMedia('(max-width: 600px)').matches) {
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
});
