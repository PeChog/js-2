const tag = document.createElement("p");
tag.textContent = "hello world";
const create = document.getElementById("content").appendChild(tag);
console.log(create);
console.log(create.parentNode);
console.log(document.getElementsByTagName("p"));
