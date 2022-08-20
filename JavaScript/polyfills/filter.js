/** 

const numArr = [2, 6, 13, 15, 18];

Array.prototype.filter = null;

if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback) {
    let newArr = [];
    for (let item of this) {
      if (callback(item)) {
        newArr = [...newArr, item];
      }
    }
    return newArr;
  };
}

const result = numArr.filter((item) => item % 2 === 0);
console.log(result);

**/
