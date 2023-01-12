const button = document.getElementsByTagName("button")[0];
const container = document.getElementsByTagName("body")[0];

const addElement = () => {
  let p = document.createElement("p");
  p.textContent = "add-me";
  container.appendChild(p);
};

button.addEventListener("click", () => setTimeout(addElement, 2000));
