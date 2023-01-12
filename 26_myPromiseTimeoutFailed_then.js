const sleep = (milliseconds, boolean) => {
  return new Promise((resolve, reject) =>
    boolean
      ? setTimeout(resolve, milliseconds)
      : setTimeout(() => reject("error"), milliseconds)
  );
};

const success = document.getElementById("success");
const fail = document.getElementById("fail");

const createElement = () => {
  const p = document.createElement("p");
  p.className = "success";
  p.textContent = "success";
  document.body.appendChild(p);
};

success.addEventListener("click", () =>
  sleep(2000, true).then(() => createElement())
);

fail.addEventListener("click", () =>
  sleep(2000, false).catch(() => {
    const p = document.createElement("p");
    p.className = "fail";
    p.textContent = "fail";
    document.body.appendChild(p);
  })
);
