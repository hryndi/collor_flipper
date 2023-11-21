const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
btn = document.querySelector(".btn");
value = document.querySelector(".color");

btn.addEventListener("click", function () {
  randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  value.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
