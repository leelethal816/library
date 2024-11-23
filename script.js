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
      if (typeof myLibrary[i][key] !== "boolean") {
        let item = document.createElement("td");
        row.appendChild(item);
        item.textContent = myLibrary[i][key];
      }
      else {
        let item = document.createElement("td");
        row.appendChild(item);
        let readButton = document.createElement("button");
        if (myLibrary[i][key] === true) {
          readButton.textContent = "true";
        }
        else {
          readButton.textContent = "false";
        }
        readButton.id = `${i}`;
        readButton.className = 'read';
        item.appendChild(readButton);
      }
    }
    addDeleteButton(i, row);
  }
}

displayBooks();

function addDeleteButton(i, row) {
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete Book";
  deleteButton.className = "delete";
  deleteButton.id = `${i}`;
  row.appendChild(deleteButton);
}

function displayBook() {
  const tbody = document.querySelector("tbody");
  let row = document.createElement("tr");
  tbody.appendChild(row);
  for (let key in myLibrary[myLibrary.length - 1]) {
    if (typeof myLibrary[myLibrary.length - 1][key] !== "boolean") {
      let item = document.createElement("td");
      row.appendChild(item);
      item.textContent = myLibrary[myLibrary.length - 1][key];
    }
    else {
      let item = document.createElement("td");
      row.appendChild(item);
      let readButton = document.createElement("button");
      if (myLibrary[myLibrary.length - 1][key]) {
        readButton.textContent = "true";
      }
      else {
        readButton.textContent = "false";
      }
      readButton.id = `${myLibrary.length - 1}`;
      readButton.className = 'read';
      item.appendChild(readButton);
    }
  }
  addDeleteButton(myLibrary.length - 1, row);
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
})

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary(document.getElementById("title").value, 
  document.getElementById("author").value, 
  document.getElementById("pages").value, 
  (document.getElementById("read").value === 'true'));
  displayBook();
  form.reset();
})

collapseButton.addEventListener("click", (e) => {
  e.preventDefault();
  newBookButton.hidden = false;
  collapseButton.hidden = true;
  form.hidden = true;
})

document.addEventListener("click", (e) => {
  const targetElement = e.target;

  if (targetElement.className === "read") {
    if (targetElement.textContent === "true") {
      myLibrary[targetElement.id].read = false;
    }
    else {
      myLibrary[targetElement.id].read = true;
    }
    document.querySelector("tbody").innerHTML = "";
    displayBooks();
  }

  if (targetElement.className === "delete") {
    removeBook(targetElement.id);
  }
})