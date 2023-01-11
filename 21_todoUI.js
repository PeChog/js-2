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
    <button id="delete-${id}">Supprimer</button>
    `;
  if (task !== "") {
    ul.appendChild(li);
  } else {
    alert("Field is empty!");
  }
  document.querySelector("input").value = "";
  const deleteButton = document.querySelector(`#delete-${id}`);
  deleteButton.addEventListener("click", () => {
    li.remove();
  });
});
