function saveToLocalStorage(key, obj) {
  const json = JSON.stringify(obj);
  localStorage.setItem(key, json);
}

// Example usage:
const myObject = { name: "John", age: 30 };
saveToLocalStorage("myObject", myObject);
