function addParagraph(text) {
  // create a new paragraph element with the given text content
  const paragraph = `<p>${text}</p>`;

  // append the paragraph element to the end of the body of the HTML document
  document.body.innerHTML += paragraph;
}

addParagraph("Added new paragraph!");
