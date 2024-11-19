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
    }
}

displayBooks();
