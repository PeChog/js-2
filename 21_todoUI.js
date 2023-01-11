const form = document.getElementById("form");
const ul = document.getElementsByTagName("ul")[0];
const addButton = document.getElementById("addTodo");

addButton.addEventListener("click", (e) => {
  e.preventDefault;
  let task = form.querySelector("input").value;
  let li = document.createElement("li");
  let id = Math.floor(Math.random() * 100000);
  li.innerHTML = `
    <li>${task}</li>
    <button id="suppr-${id}">Supprimer</button>
    `;
  ul.appendChild(li);
  document.querySelector("input").value = "";

  const deleteButton = document.querySelector(`#suppr-${id}`);
  deleteButton.addEventListener("click", () => {
    li.remove();
  });
});
