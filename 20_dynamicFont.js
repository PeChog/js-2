let value = document.getElementById("fontsize");

let toChange = document.getElementsByClassName("controlled_fontsize");
toChange = [...toChange];
const changeFontSize = () =>
  toChange.map((e) => (e.style.fontSize = `${value.value}px`));
value.addEventListener("input", changeFontSize);
