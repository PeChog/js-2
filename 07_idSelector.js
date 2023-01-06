const idSelector = () => {
  let input = document.getElementById("input");
  return input.getAttribute("value");
};

module.exports = idSelector;
console.log(idSelector());
