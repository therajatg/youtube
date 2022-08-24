const throttle = (randomFunc, delay) => {
  let flag = true;
  return function () {
    if (flag) {
      randomFunc(2);
      flag = false;
      setTimeout(() => (flag = true), delay);
    }
  };
};

window.addEventListener("scroll", throttleNew(console.log, 1000));
