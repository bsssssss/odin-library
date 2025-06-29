let library = [];

function Book(title, author, status) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.status = status;
}

function addBookToLibrary(author, title, status) {
    let book = new Book(author, title, status);
    library.push(book);
}

addBookToLibrary('Snow Crash', 'Neal Stephenson', 'reading');
addBookToLibrary('Cryptonomicon', 'Neal Stephenson', 'not read yet');
addBookToLibrary(
    'A very long title that make no sense but might represent those funny titles we see in older books, or maybe studies or thesis titles, something like - Studies of flies and their flight patterns across living rooms and why they love to annoy you with their little legs and arms.',
    'Neal Stephenson',
    'not read yet'
);

function makeBookCard(book) {
    let author = document.createElement('p');
    author.classList.add('card-author');
    author.textContent = book.author;

    let title = document.createElement('p');
    title.classList.add('card-title');
    title.textContent = book.title;

    let status = document.createElement('div');
    status.classList.add('card-status');
    status.textContent = book.status;

    let card = document.createElement('div');
    card.classList.add('library-card');
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(status);

    return card;
}

const libraryContainer = document.querySelector('.library-container');

function makeLibrary(library) {
    for (let book of library) {
        let card = makeBookCard(book);
        libraryContainer.appendChild(card);
    }
}

window.onload = makeLibrary(library);

const addBookDialog = document.querySelector('.add-book-dialog');
const addBookButton = document.querySelector('.add-book-button');
const addBookForm = document.querySelector('#add-book-form');
const submitButton = document.querySelector('.add-book-dialog-button.submit');
const cancelButton = document.querySelector('.add-book-dialog-button.cancel');

addBookButton.addEventListener('click', () => {
    addBookDialog.showModal();
});

addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitted !');
});

submitButton.addEventListener('click', () => {
    console.log('clicked submit !');
});

cancelButton.addEventListener('click', () => {
    console.log('clicked cancel !');
    addBookDialog.close();
});
