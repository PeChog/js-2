let value = document.getElementById("fontsize").value;
console.log(value);
let toChange = document.getElementsByClassName("controlled_fontsize");
toChange = [...toChange];
console.log(toChange);

const changeFontSize = () => {
  return toChange.map((e) => (e.style.fontSize = `${value}px`));
};
changeFontSize();
