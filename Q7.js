function getObjectFromLocalStorage(key) {
  const json = localStorage.getItem(key);
  if (json !== null) {
    return JSON.parse(json);
  }
  return null;
}

// Example usage:
const myObject = getObjectFromLocalStorage("myObject");
console.log(myObject);
