let library = [];

function Book(title, author, status) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.status = status;
}

Book.prototype.toggleStatus = function () {
    if (this.status <= 0) {
        this.status = 1;
    } else {
        this.status = 0;
    }
};

function addBookToLibrary(title, author, status) {
    let book = new Book(title, author, status);
    library.push(book);
}

addBookToLibrary('Snow Crash', 'Neal Stephenson', 0);
addBookToLibrary('Cryptonomicon', 'Neal Stephenson', 0);
addBookToLibrary(
    'A very long title that make no sense but might represent those funny titles we see in older books, or maybe studies or thesis titles, something like - Studies of flies and their flight patterns across living rooms and why they love to annoy you with their little legs and arms.',
    'Neal Stephenson',
    1
);

function showStatus(status) {
    if (status <= 0) {
        return 'not read yet';
    } else {
        return 'read';
    }
}

function makeBookCard(book) {
    let author = document.createElement('p');
    author.classList.add('card-author');
    author.textContent = book.author;

    let title = document.createElement('p');
    title.classList.add('card-title');
    title.textContent = book.title;

    let status = document.createElement('button');
    status.classList.add('card-status');
    status.textContent = showStatus(book.status);
    status.addEventListener('click', (e) => {
        const id = e.target.closest('.library-card').dataset.id;
        const index = library.findIndex((item) => item.id === id);
        const book = library[index];
        book.toggleStatus();
        e.target.textContent = showStatus(book.status);
    });

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('library-card-delete-btn');
    deleteBtn.textContent = '-';
    deleteBtn.addEventListener('click', (e) => {
        const parent = e.target.closest('.library-card');
        const id = parent.dataset.id;
        library.splice(
            library.findIndex((item) => item.id === id),
            1
        );
        parent.remove();
    });

    let card = document.createElement('div');
    card.classList.add('library-card');
    card.setAttribute('data-id', book.id);
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

function refreshLibrary() {
    for (let book of library) {
        updateLibrary(book);
    }
}

refreshLibrary();

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

    addBookToLibrary(title, author, status);
    updateLibrary(library.at(-1));
    addBookForm.reset();
});

const submitButton = document.querySelector('.add-book-dialog-button.submit');
submitButton.addEventListener('click', () => {
    addBookDialog.close();
});

const cancelButton = document.querySelector('.add-book-dialog-button.cancel');
cancelButton.addEventListener('click', () => {
    addBookDialog.close();
});
