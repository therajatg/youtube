// Flow of video:
// 1. what is closure
// 2. examples to understand better: scope chain and all
// 3. advantage: encapsulation
// 4, explain scope in case of let and var (no matter what u do, i points to the same memory space)
// 4. closure and setTimeout (for loop) and how to rectify
//pause
// 5. disadvantage: memory wastage

function a() {
  let num1 = 5;
  let num2 = 10;
  return function () {
    console.log(num1);
  };
}

a()();
