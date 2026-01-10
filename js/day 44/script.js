const quotes = [
  "Believe in yourself",
  "Consistency beats motivation",
  "Small steps every day",
  "Learn, build, repeat",
  "Hard work always pays off",
  "Dream big, start small",
  "Focus on progress, not perfection",
  "Skills matter more than marks",
];

// const heading = document.querySelector("h1");
const btn = document.querySelector("button");
const main = document.querySelector("main");

btn.addEventListener("click", function () {
  var x = Math.random() * 80;
  var y = Math.random() * 80;
  const h1 = document.createElement("h1");
  h1.innerText = quotes[Math.floor(Math.random() * quotes.length)];
  h1.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;
  h1.style.transform = `rotate(${Math.random() * 360}deg)`;
  h1.style.position = "absolute";
  h1.style.left = x + "%";
  h1.style.top = y + "%";

  main.appendChild(h1);
});
