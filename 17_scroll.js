let lastScroll = 0;

window.addEventListener("scroll", () => {
  const date = new Date();
  date.toString();
  if (window.scrollY > lastScroll) {
    let p = document.createElement("p");
    p.textContent = date;
    document.getElementsByTagName("body")[0].appendChild(p);
    console.log("element créé");
  }
  lastScroll = window.scrollY;
});

console.log(lastScroll);

console.log(document.getElementsByTagName("p"));
