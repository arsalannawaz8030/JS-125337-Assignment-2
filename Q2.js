function searchArray(arr, val) {
  if (arr.length === 0) {
    return false;
  } else if (arr[0] === val) {
    return true;
  } else {
    return searchArray(arr.slice(1), val);
  }
}
const myArray = [11, 2, 37, 4, 5];
console.log(searchArray(myArray, 12));
console.log(searchArray(myArray, 5));
