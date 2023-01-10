const clock = document.getElementById("clock");

const updateClock = () => {
  const now = new Date();
  let date = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`;
  let time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  let content = (clock.textContent = `${date} ${time}`);
  return content;
};
updateClock();

setInterval(updateClock, 1000);

console.log(document.getElementById("clock"));
