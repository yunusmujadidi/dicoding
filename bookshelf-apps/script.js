// Mengambil elemen-elemen HTML
const bookForm = document.getElementById("bookForm");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const yearInput = document.getElementById("year");
const isCompleteInput = document.getElementById("isComplete");
const incompleteShelf = document.getElementById("incompleteShelf");
const completeShelf = document.getElementById("completeShelf");

//Membuat array yang menyimpan data buku
let books = [];

// Menampilkan buku pada rak berdasarkan kondisi isComplete
function displayBooks() {
  incompleteShelf.innerHTML = "";
  completeShelf.innerHTML = "";

  books.forEach((book) => {
    const bookElement = createBookElement(book);
    if (book.isComplete) {
      completeShelf.appendChild(bookElement);
    } else {
      incompleteShelf.appendChild(bookElement);
    }
  });
}

// Menambahkan buku baru
function addBook(e) {
  e.preventDefault();

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

  books.push(book);
  displayBooks();
  saveBooksToLocalStorage();
  resetForm();
}

// Menghapus buku dari rak
function removeBook(id) {
  books = books.filter((book) => book.id !== id);
  displayBooks();
  saveBooksToLocalStorage();
}

// Memindahkan buku antar rak
function moveBook(id) {
  const bookToMove = books.find((book) => book.id === id);
  bookToMove.isComplete = !bookToMove.isComplete;
  displayBooks();
  saveBooksToLocalStorage();
}

// Menyimpan data buku ke localStorage
function saveBooksToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

// Mendapatkan data buku dari localStorage saat halaman dimuat
function loadBooksFromLocalStorage() {
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
    displayBooks();
  }
}

// Membuat elemen buku
function createBookElement(book) {
  const bookElement = document.createElement("div");
  bookElement.classList.add(
    "p-2",
    "mb-2",
    "rounded",
    "border",
    "border-gray-300",
    "flex",
    "justify-between",
    "items-center"
  );
  bookElement.innerHTML = `
    <div>
      <h3 class="font-bold">${book.title}</h3>
      <p><span class="font-bold">Author:</span> ${book.author}</p>
      <p><span class="font-bold">Year:</span> ${book.year}</p>
    </div>
    <div>
      <button class="p-2 bg-green-500 text-white rounded mr-2" onclick="moveBook(${book.id})">Move</button>
      <button class="p-2 bg-red-500 text-white rounded" onclick="removeBook(${book.id})">Remove</button>
    </div>
  `;
  return bookElement;
}

//membersihkan form setelah buku ditambahkan
function resetForm() {
  titleInput.value = "";
  authorInput.value = "";
  yearInput.value = "";
  isCompleteInput.checked = false;
}

loadBooksFromLocalStorage();

//menambahkan event listener pada form
bookForm.addEventListener("submit", addBook);
function removeBook(id) {
  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex !== -1) {
    const book = books[bookIndex];
    const confirmed = confirm(
      `Apakah anda yakin untuk menghapus "${book.title}"?`
    );
    if (confirmed) {
      books.splice(bookIndex, 1);
      saveBooksToLocalStorage();
      displayBooks();
    }
  }
}
