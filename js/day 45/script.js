const btn = document.querySelector("button");
const filler = document.getElementById("filler");
let bar = 0;

btn.addEventListener("click", function () {
  if (bar == 0) {
    filler.style.width = "100%";
    btn.style.transform = "scale(1.05)";
    bar = 1;
    setTimeout(function () {
      btn.innerText = "Downloaded";
      btn.style.opacity = "0.5";
      btn.style.transform = "scale(1)";
      btn.disabled = true;
      btn.style.cursor = "not-allowed";
    }, 1000);
  }
   else {
    filler.style.width = "0%";
    bar = 0;
  }
});
