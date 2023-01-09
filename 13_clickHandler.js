const addP = () => {
  let tag = document.createElement("p");
  tag.setAttribute("id", "result");
  //   tag.innerHTML = "coucou";
  const add = document.querySelector("div.content").appendChild(tag);
  console.log("j'ai été clické");
  return add;
};

const button = document.getElementById("clickme");
button.addEventListener("click", addP);

console.log(document.getElementsByTagName("p"));
