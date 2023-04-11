function addListItem(text) {
  // Get a reference to the unordered list element
  const ul = document.querySelector("ul");

  // Create a new list item element
  const li = document.createElement("li");

  // Set the text content of the new list item
  li.textContent = text;

  // Append the new list item to the unordered list
  ul.appendChild(li);
}
