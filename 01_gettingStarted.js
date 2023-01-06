const insertHelloWorld = () => {
  let element = document.createElement("p");
  element.innerHTML = "Hello World";
  document.body.appendChild(element);
};

insertHelloWorld();

//create an error in web console
//but required for unit test
//you can ignore error message "Uncaught ReferenceError: module is not defined"
module.exports = insertHelloWorld;
