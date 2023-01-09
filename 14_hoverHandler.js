const addP = () => {
  let tag = document.createElement("p");
  tag.setAttribute("id", "result");
  tag.textContent = "hovered";
  const add = document.querySelector("div.content").appendChild(tag);
  console.log("j'ai été survolé");
  return add;
};

const element = document.getElementById("hoverme");
element.addEventListener("mouseover", addP);
