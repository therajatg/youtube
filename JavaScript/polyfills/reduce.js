const numArr = [2, 5, 15, 11];

Array.prototype.reduce = null;

if (!Array.prototype.reduce) {
  Array.prototype.myReduce = function (callback, initialValue) {
    let acc = initialValue ?? this[0];
    for (let i = initialValue ? 0 : 1; i < this.length; i++) {
      acc = callback(acc, this[i]);
    }
    return acc;
  };
}

const result = numArr.myReduce((acc, current) => acc + current, 10);
acc = console.log(result);
