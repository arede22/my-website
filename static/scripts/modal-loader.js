// image modals i.e. popups script
$(document).ready(function () {
  console.log('start');

  try {
    var popCar = document.getElementById('popCar');

    var car = document.getElementById('car');
    var img01 = document.getElementById("img01");
    car.onclick = function(){
        popCar.style.display = "block";
        img01.src = this.src;
        img01.alt = this.alt;
    }

    var span0 = document.getElementsByClassName("close")[0];

    span0.onclick = function() {
      popCar.style.display = "none";
    }

    // repeats
    var popMap = document.getElementById('popMap');

    var map = document.getElementById('map');
    var img02 = document.getElementById("img02");
    map.onclick = function(){
        popMap.style.display = "block";
        img02.src = this.src;
        img02.alt = this.alt;
    }

    var span1 = document.getElementsByClassName("close")[1];

    span1.onclick = function() {
      popMap.style.display = "none";
    }

    // repeats
    var popRandrooms = document.getElementById('popRandrooms');

    var randrooms = document.getElementById('randrooms');
    var img03 = document.getElementById("img03");
    randrooms.onclick = function(){
        popRandrooms.style.display = "block";
        img03.src = this.src;
        img03.alt = this.alt;
    }

    var span2 = document.getElementsByClassName("close")[2];

    span2.onclick = function() {
      popRandrooms.style.display = "none";
    }

    // repeats
    var popBoss = document.getElementById('popBoss');

    var boss = document.getElementById('boss');
    var img04 = document.getElementById("img04");
    boss.onclick = function(){
        popBoss.style.display = "block";
        img04.src = this.src;
        img04.alt = this.alt;
    }

    var span3 = document.getElementsByClassName("close")[3];

    span3.onclick = function() {
      popBoss.style.display = "none";
    }
  } catch(e) {
    console.log(e);
  }
});
