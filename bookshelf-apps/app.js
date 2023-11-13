document.addEventListener("DOMContentLoaded", function () {
  const bookForm = document.getElementById("bookForm");
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const yearInput = document.getElementById("year");
  const isCompleteInput = document.getElementById("isComplete");
  const incompleteShelf = document.getElementById("incompleteShelf");
  const completeShelf = document.getElementById("completeShelf");

  bookForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
  });

  function addBook() {
    const title = titleInput.value;
    const author = authorInput.value;
    const year = yearInput.value;
    const isComplete = isCompleteInput.checked;

    const book = {
      id: +new Date(),
      title,
      author,
      year,
      isComplete,
    };

    const shelf = isComplete ? completeShelf : incompleteShelf;
    const bookElement = createBookElement(book);

    shelf.appendChild(bookElement);
    updateLocalStorage();
  }

  function createBookElement(book) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add(
      "p-2",
      "mb-2",
      "rounded",
      "border",
      "border-gray-300",
      "flex",
      "justify-between",
      "items-center"
    );
    bookDiv.innerHTML = `
      <div>
        <h3 class="font-bold">${book.title}</h3>
        <p><span class="font-bold">Author:</span> ${book.author}</p>
        <p><span class="font-bold">Year:</span> ${book.year}</p>
      </div>
      <div>
        <button class="p-2 bg-green-500 text-white rounded mr-2" onclick="moveBook(this.parentElement, ${
          book.isComplete ? "false" : "true"
        })">Move</button>
        <button class="p-2 bg-red-500 text-white rounded" onclick="removeBook(this.parentElement)">Remove</button>
      </div>
    `;
    return bookDiv;
  }

  function moveBook(bookElement, isComplete) {
    const shelf = isComplete ? completeShelf : incompleteShelf;
    shelf.appendChild(bookElement);
    updateLocalStorage();
  }

  function removeBook(bookElement) {
    bookElement.remove();
    updateLocalStorage();
  }

  function updateLocalStorage() {
    const incompleteBooks = Array.from(
      incompleteShelf.querySelectorAll("div")
    ).map((bookElement) => extractBookInfo(bookElement));
    const completeBooks = Array.from(completeShelf.querySelectorAll("div")).map(
      (bookElement) => extractBookInfo(bookElement)
    );

    localStorage.setItem("incompleteBooks", JSON.stringify(incompleteBooks));
    localStorage.setItem("completeBooks", JSON.stringify(completeBooks));
  }

  function extractBookInfo(bookElement) {
    const bookInfo = bookElement.innerText.split("\n");
    return {
      id: +bookInfo[0].split(":")[1].trim(),
      title: bookInfo[1].split(":")[1].trim(),
      author: bookInfo[2].split(":")[1].trim(),
      year: bookInfo[3].split(":")[1].trim(),
      isComplete: bookElement.parentNode.id === "completeShelf",
    };
  }

  function displayBooksFromLocalStorage() {
    const incompleteBooks =
      JSON.parse(localStorage.getItem("incompleteBooks")) || [];
    const completeBooks =
      JSON.parse(localStorage.getItem("completeBooks")) || [];

    incompleteBooks.forEach((book) => {
      const bookElement = createBookElement(book);
      const shelf = document.getElementById("incompleteShelf");
      shelf.appendChild(bookElement);
    });

    completeBooks.forEach((book) => {
      const bookElement = createBookElement(book);
      const shelf = document.getElementById("completeShelf");
      shelf.appendChild(bookElement);
    });
  }

  displayBooksFromLocalStorage();
});
