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

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('library-card-delete-btn');
    deleteBtn.textContent = '-';

    let card = document.createElement('div');
    card.classList.add('library-card');
    card.appendChild(deleteBtn);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(status);

    return card;
}

const libraryContainer = document.querySelector('.library-container');
function updateLibrary(book) {
    let card = makeBookCard(book);
    libraryContainer.appendChild(card);
}

for (let book of library) {
    updateLibrary(book);
}

const addBookDialog = document.querySelector('.add-book-dialog');

const addBookButton = document.querySelector('.add-book-button');
addBookButton.addEventListener('click', () => {
    addBookDialog.showModal();
});

const addBookForm = document.querySelector('#add-book-form');
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get('title');
    const author = formData.get('author');
    const status = formData.get('status');

    addBookToLibrary(author, title, status);
    updateLibrary(library.at(-1));
});

const submitButton = document.querySelector('.add-book-dialog-button.submit');
submitButton.addEventListener('click', () => {
    addBookDialog.close();
});

const cancelButton = document.querySelector('.add-book-dialog-button.cancel');
cancelButton.addEventListener('click', () => {
    addBookDialog.close();
});
