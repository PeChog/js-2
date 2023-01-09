const isClicked = () => {
  const modal = document.querySelector("div#modal");
  const classIsOpenExist = document.querySelector("div#modal.is-open");

  if (classIsOpenExist === null) {
    return modal.setAttribute("class", "is-open");
  } else {
    return modal.removeAttribute("class");
  }
};

const toggle = document.getElementById("toggle");

toggle.addEventListener("click", isClicked);
