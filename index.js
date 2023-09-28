var dog = document.getElementById('dog');
var obstacle = document.getElementById('obstacle');
var counter = 0;

function jump(){
  if(dog.classList != "animate"){
    dog.classList.add("animate");
  }
  setTimeout(function(){
    dog.classList.remove("animate");
    counter++;
  }, 500);
}

var lose = setInterval(function(){
  var dogTop =
  parseInt(window.getComputedStyle(dog).getPropertyValue("top"));
  var blockLeft = 
  parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
  if(blockLeft<20 && blockLeft>0 && dogTop>=130){
    obstacle.style.animation = "none";
    obstacle.style.display = "none";
    alert("SCORE:" + counter + "\nReload page to play again.");
    counter = 0;
  }
}, 10)