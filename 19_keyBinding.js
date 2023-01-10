const square = document.querySelector("#square");

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp") {
    square.style.top = square.offsetTop - 10 + "px";
    console.log("j'ai appuyé sur haut");
  }
  if (event.code === "ArrowRight") {
    square.style.left = square.offsetLeft + 10 + "px";
    console.log("j'ai appuyé sur droite");
  }
  if (event.code === "ArrowLeft") {
    square.style.left = square.offsetLeft - 10 + "px";
    console.log("j'ai appuyé sur gauche");
  }
  if (event.code === "ArrowDown") {
    square.style.top = square.offsetTop + 10 + "px";
    console.log("j'ai appuyé sur bas");
  }
});

// console.log(square);
