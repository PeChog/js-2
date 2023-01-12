const sleep = (milliseconds, boolean) => {
  return new Promise((resolve, reject) =>
    boolean
      ? setTimeout(resolve, milliseconds)
      : setTimeout(() => reject("error"), milliseconds)
  );
};

const success = document.getElementById("success");
const fail = document.getElementById("fail");

const createElementSuccess = () => {
  const p = document.createElement("p");
  p.className = "success";
  p.textContent = "success";
  p.style.color = "green";
  document.body.appendChild(p);
};

const createElementFail = () => {
  const p = document.createElement("p");
  p.className = "fail";
  p.textContent = "fail";
  p.style.color = "red";
  p.style.fontSize = "100px";
  document.body.appendChild(p);
};

success.addEventListener("click", async () => {
  try {
    await sleep(2000, true);
    createElementSuccess();
  } catch (error) {
    console.log("error");
  }
});

fail.addEventListener("click", async () => {
  try {
    await sleep(2000, false);
  } catch (error) {
    createElementFail();
  }
});
