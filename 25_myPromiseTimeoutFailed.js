const sleep = (milliseconds, boolean) => {
  return new Promise((resolve, reject) =>
    boolean
      ? setTimeout(resolve, milliseconds)
      : setTimeout(() => reject("error"), milliseconds)
  );
};

module.exports = sleep;
