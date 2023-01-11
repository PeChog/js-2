const createTag = () => {
  const age = document.getElementsByName("age")[0].value;
  const firstName = document.getElementsByName("name")[0].value;
  const date = document.getElementsByName("birthdate")[0].value;
  const tag = document.createElement("p");
  tag.textContent = `name: ${firstName}, age: ${age}, birthdate: ${date}`;
  tag.setAttribute("id", "result");

  return document.getElementsByTagName("body")[0].appendChild(tag);
};
createTag();
const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", createTag);

console.log(document.getElementsByTagName("p"));
