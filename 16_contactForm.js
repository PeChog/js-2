const createTag = () => {
  const element = document.getElementsByTagName("input");
  const inputs = [...element];
  const attribute = inputs.map((e) => e.name);
  console.log(attribute);
  const tag = document.createElement("p");
  tag.textContent = `${attribute}: ${value}`;
  return document.getElementByTagName("body").appendChild(tag);
};
createTag();
const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", createTag);

console.log(button);
