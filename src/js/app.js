
let make = new DonutMaker();

const DonutClickButton = document.getElementById("donutClicker");
const AutoClickButton = document.getElementById("autoClick");
const MultiplierButton = document.getElementById("multiplier");
const DonutCount = document.getElementById("count");
const DonutsEarned = document.getElementById("earned");
const AutoCount = document.getElementById("autoCount");
const AutoCost = document.getElementById("autoCost");
const MultiplyCost = document.getElementById("multiplyCost");
const MultiplyCount = document.getElementById("multiplyCount");
const ResetGameBtn = document.getElementById("resetButton");

let intervalId = setInterval(updateDashboard, 1000 / make.autoClickerCount);

var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}

DonutClickButton.addEventListener("click", function(){
    make.bake();
});

AutoClickButton.addEventListener("click", function(){
    make.buyAutoClicker();
});

MultiplierButton.addEventListener("click", function(){
    make.buyDonutMultiplier();
});

ResetGameBtn.addEventListener("click", function(){
    console.log("click reset game");
    make.resetGame();
});


function checkAutoClickerBtn(){
    if(make.donutCount >= make.autoClickerCost){
      AutoClickButton.disabled = false;
    }else{
      AutoClickButton.disabled = true;
    }
  }

  function checkMultiplierBtn(){
    if(make.donutCount >= make.donutMultiplierCost){
      MultiplierButton.disabled = false;
    }else{
      MultiplierButton.disabled = true;
    }
  }


function updateDashboard(){
    DonutCount.value = make.getMake().toFixed(0);
    AutoCount.value = make.getAutoClickerCount();
    AutoCost.value = make.getClickCost();
    MultiplyCost.value = make.getMultiplierCost().toFixed(2);
    MultiplyCount.value = make.getDonutMultiplierCount();
    DonutsEarned.value = make.getDonutsPerClick();
    checkAutoClickerBtn();
    checkMultiplierBtn();
}


ResetGameBtn.addEventListener("click", () => {
    if (confirm("Do you want to start over?")) {
        make._donutCount = 0;
        make._autoClickerCount = 0;
        make._autoClickerCost = 100;
        make._donutMultiplierCount = 0;
        make._donutMultiplierCost = 10;
    } else {
        return false;
    }
});



var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

var span = document.getElementsByClassName("close")[0];

var span2 = document.getElementsByClassName("close")[1];

var span3 = document.getElementsByClassName("close")[2];

btn.onclick = function() {
  modal.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

btn3.onclick = function() {
    modal3.style.display = "block";
  }

span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

span3.onclick = function() {
    modal3.style.display = "none";
  }

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

