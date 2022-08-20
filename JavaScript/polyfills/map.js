/** 

const numArr = [2, 6, 8, 14, 12];

Array.prototype.map = null;

if (!Array.prototype.map) {
  Array.prototype.map = function (callback) {
    let result = [];
    for (let item of this) {
      result = [...result, callback(item)];
    }
    return result;
  };
}

const newArr = numArr.map((item) => item * 9);
console.log(newArr);

**/
