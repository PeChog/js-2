// document.getElementsByTagName("button");
const collection = document.getElementsByTagName("button");
const arrayOfButtons = [...collection];
arrayOfButtons.map((e) => (e.style.backgroundColor = "red"));
