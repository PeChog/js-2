const sleep = (milliseconds, boolean) => {
  return new Promise((resolve, reject) =>
    boolean
      ? setTimeout(resolve, milliseconds)
      : setTimeout(() => reject("error"), milliseconds)
  );
};

document.getElementsByTagName("button")[0].addEventListener(
  "click",
  sleep(2000, false)
    .then(() => console.log("ok"))
    .catch(() => console.log("error"))
);

module.exports = sleep;
