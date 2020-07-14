// image modals i.e. popups script
$(document).ready(function (){//"popCar", "popMap", "popRandomRooms", "popBoss" }) {
  var pop, trigger, modalImg, close;
  var lst = ["car", "map", "randomRooms", "boss"];
  var poplst = ["popCar", "popMap", "popRandomRooms", "popBoss"]
  for (var i = 0; i < lst.length; i++) {
    trigger = lst[i];
    trigger.onclick = function() {
      pop = document.getElementById(poplst[i]);
      modalImg = document.getElementById("img0" + (i+1));
      pop.style.display = "block";
      modalImg.src = this.src;
    }
    var closelst = document.getElementsByClassName("close");
    closelst[i].onclick = function() {
      pop.style.display = "none";
    }
  }
  // var pop = document.getElementById("popCar");
  //
  // var trigger = document.getElementById("car");
  // var modalImg = document.getElementById("img01");
  // trigger.onclick = function() {
  //   pop.style.display = "block";
  //   modalImg.src = this.src;
  // }

  // var close = document.getElementById("close");
  // close.onclick = function() {
  //   pop.style.display = "none";
  // }
});
