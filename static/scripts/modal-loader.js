// image modals i.e. popups script
$(document).ready(function ({ "popCar", "popMap", "popRandomRooms", "popBoss" }) {
  var pop = document.getElementById("popCar");

  var trigger = document.getElementById("car");
  var modalImg = document.getElementById("img01");
  trigger.onclick = function() {
    pop.style.display = "block";
    modalImg.src = this.src;
  }

  var close = document.getElementById("close");
  close.onclick = function() {
    pop.style.display = "none";
  }
});
