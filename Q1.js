function createAdder(num) {
  return function (x) {
    return x + num;
  };
}
const addFive = createAdder(5);
console.log(addFive(10)); // prints 15
console.log(addFive(7)); // prints 12
