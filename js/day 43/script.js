const arr = ["KKR", "MI", "RCB", "CSK", "RR"];

const button = document.querySelector("button");
const teamNameElement = document.getElementById("team-name");

button.addEventListener("click", function () {
  button.style.transform = "scale(1.5)";

  setTimeout(function () {
    button.style.transform = "scale(1)";
  }, 200);
});

button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * arr.length);
  teamNameElement.innerHTML = arr[randomIndex];
});


