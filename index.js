

function fetchBooks() {
 return fetch("https://anapioficeandfire.com/api/books")
  .then(response => response.json())
  .then(response => renderBooks(response))
}

function renderBooks(books) {
  const main = document.getElementsByTagName("main")[0]
  let container = ""
  for(const book of books) {
    container += `<div style="border: 1px solid black"><p id=${book.name}>${book.name}</p></div>`
  }
  main.innerHTML = container
  
}