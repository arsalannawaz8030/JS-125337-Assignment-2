function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

// Example usage:
const myButton = document.querySelector("#my-button");

// Change the background color of the button to red when clicked
myButton.addEventListener("click", function () {
  changeBackgroundColor(myButton, "red");
});
