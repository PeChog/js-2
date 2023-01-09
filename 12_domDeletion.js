const element = document.getElementsByTagName("p");
const arrayOfTag = [...element];
console.log(element);
arrayOfTag.map((e) => e.remove());
console.log(element);
