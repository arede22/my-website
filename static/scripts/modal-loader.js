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
  // try {
  //   var car = document.getElementById('car');
  //   var close;
  //
  //   car.onclick = function(){
  //     var popCar = document.getElementById('popCar');
  //     console.log(popCar);
  //     var img01 = document.getElementById("img01");
  //     console.log(popCar.style)
  //     popCar.style.display = "block";
  //     img01.src = this.src;
  //     img01.alt = this.alt;
  //     close = document.getElementById("close");
  //   }
  //
  //   if (close) {
  //     close.onclick = function() {
  //       popCar.style.display = "none";
  //     }
  //   }
  //   //
  //   // // repeats
  //   // var popMap = document.getElementById('popMap');
  //   //
  //   // var map = document.getElementById('map');
  //   // var img02 = document.getElementById("img02");
  //   // map.onclick = function(){
  //   //     popMap.style.display = "block";
  //   //     img02.src = this.src;
  //   //     img02.alt = this.alt;
  //   // }
  //   //
  //   // var span1 = document.getElementsByClassName("close")[1];
  //   //
  //   // span1.onclick = function() {
  //   //   popMap.style.display = "none";
  //   // }
  //   //
  //   // // repeats
  //   // var popRandrooms = document.getElementById('popRandrooms');
  //   //
  //   // var randrooms = document.getElementById('randrooms');
  //   // var img03 = document.getElementById("img03");
  //   // randrooms.onclick = function(){
  //   //     popRandrooms.style.display = "block";
  //   //     img03.src = this.src;
  //   //     img03.alt = this.alt;
  //   // }
  //   //
  //   // var span2 = document.getElementsByClassName("close")[2];
  //   //
  //   // span2.onclick = function() {
  //   //   popRandrooms.style.display = "none";
  //   // }
  //   //
  //   // // repeats
  //   // var popBoss = document.getElementById('popBoss');
  //   //
  //   // var boss = document.getElementById('boss');
  //   // var img04 = document.getElementById("img04");
  //   // boss.onclick = function(){
  //   //     popBoss.style.display = "block";
  //   //     img04.src = this.src;
  //   //     img04.alt = this.alt;
  //   // }
  //   //
  //   // var span3 = document.getElementsByClassName("close")[3];
  //   //
  //   // span3.onclick = function() {
  //   //   popBoss.style.display = "none";
  //   // }
  // } catch(e) {
  //   console.log(e);
  // }
});
