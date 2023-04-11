function saveObjectPropertiesToLocalStorage(obj) {
  for (let prop in obj) {
    localStorage.setItem(prop, JSON.stringify(obj[prop]));
  }

  const newObj = {};

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    newObj[key] = JSON.parse(localStorage.getItem(key));
  }

  return newObj;
}
const myObject = { name: "John", age: 30, city: "New York" };
const savedObject = saveObjectPropertiesToLocalStorage(myObject);
console.log(savedObject);
