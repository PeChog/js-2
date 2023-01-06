const classSelector = () => {
  return document.getElementsByClassName("x-wing")[2].innerHTML;
};
module.exports = classSelector;
console.log(classSelector());
