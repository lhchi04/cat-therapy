var score = 0;
const advices = ['Shave your head for a new start', 'You should get real money to afford a real therapy instead of popping this cat','Get a cat','Stop procrastinating','Stay hydrated'];
function incScore(num) {
  score = score + num;
  document.getElementById("score").innerHTML = score;
  if (score % 50 === 0) {
    document.getElementById("advice").innerHTML = advice();  
  }
}
function sound() {
  var pop = new Audio('img/popcat.mp3');
  pop.play();
}
function picChange(img) {
  img.src = "img/popcat_wow.png";
  setTimeout(() => {
    img.src = "img/popcat.png";
  }, 100);
}
function advice() {
  let random = Math.floor(Math.random() * advices.length);
  return advices[random];
}

function getScore() {
  document.getElementById("congrats").innerHTML = "You pop the cat"+"<br>"+ `${score} times`+"<br>"+"purrrr !";
}