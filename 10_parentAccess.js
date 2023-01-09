const parentAccess = (node) => {
  return node.parentNode;
};

module.exports = parentAccess;

console.log(parentAccess(document.getElementsByTagName("li")[0]));
