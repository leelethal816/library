const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  // do stuff here
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

addBookToLibrary("Journey to the West", "Wu Chengen", 1000, true);
addBookToLibrary("Three Kingdoms", "Luo Guanzhong", 2000, true);
addBookToLibrary("Dream of the Red Chamber", "Cao Xueqin", 3000, false);


function displayBooks() {
  const tbody = document.querySelector("tbody");
  for (let i = 0; i < myLibrary.length; i++) {
    let row = document.createElement("tr");
    tbody.appendChild(row);
    for (let key in myLibrary[i]) {
      let item = document.createElement("td");
      row.appendChild(item);
      item.textContent = myLibrary[i][key];
    }
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Book";
    deleteButton.className = "delete";
    deleteButton.id = `${i}`;
    row.appendChild(deleteButton);
  }
}

displayBooks();

function displayBook() {
  const tbody = document.querySelector("tbody");
  let row = document.createElement("tr");
  tbody.appendChild(row);
  for (let key in myLibrary[myLibrary.length - 1]) {
    let item = document.createElement("td");
    row.appendChild(item);
    item.textContent = myLibrary[myLibrary.length - 1][key];
  }
}

function removeBook(button_id) {
  myLibrary.splice(button_id, 1);
  document.querySelector("tbody").innerHTML = "";
  displayBooks();
}

const body = document.querySelector("body");
const form = document.querySelector("form");
const newBookButton = document.querySelector("#new-book");
const collapseButton = document.querySelector("#collapse");
const submitButton = document.querySelector("#submitButton");

newBookButton.addEventListener("click", () => {
  newBookButton.hidden = true;
  collapseButton.hidden = false;
  form.hidden = false;
  
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary(document.getElementById("title").value, 
    document.getElementById("author").value, 
    document.getElementById("pages").value, 
    document.getElementById("read").value);
    displayBook();
    form.reset();
  })
})

collapseButton.addEventListener("click", (e) => {
  e.preventDefault();
  newBookButton.hidden = false;
  collapseButton.hidden = true;
  form.hidden = true;
})

const deleteButtons = document.querySelectorAll(".delete");
deleteButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    removeBook(button.id);
  })
});