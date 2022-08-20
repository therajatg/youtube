/**
const numArr = [2, 5, 3, 7, 9];

Array.prototype.forEach = null;

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callBack) {
    for (let item of this) {
      callBack(item);
    }
  };
}

numArr.forEach((num) => console.log(num * 3));
**/
