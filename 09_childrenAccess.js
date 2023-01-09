const firstChild = () => {
  let list = document.getElementById("menu").children[0].innerHTML;
  return list;
};
module.exports = firstChild;
console.log(firstChild());
