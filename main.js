// Library

// variables

let myLibrary = [];
let bookIndex = 0;
let mainRender = render();

// initialization of headings

function addBookToLibrary() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const publication = document.querySelector('#year').value;
    const status = document.querySelector('#status').value;
    const book = new Book(title, author, pages, year, status);
    myLibrary.push(book);
}

function render() {
    let i = 0;
    return function() {
        const bookshelf = document.querySelector('.bookshelf__creation');
        for (; i < myLibrary.length; i++) {
            bookshelf.insertAdjacentHTML('beforeend', bookTemplate(myLibrary[i]));
        }
    }
}

function bookTemplate(book) {
    const statusBtnColor = book.status == 'unread' ? 'status__btn status__btn--change' : 'status__btn';
    const HTML = `
            <tr class="bookshelf__book" data-index="${bookIndex++}">
                <td class="title">${book.title}</td>
                <td class="author">${book.author}</td>
                <td class="pages">${book.pages}</td>
                <td class="pages">${book.year}</td>
                <td class="status"><button id="status-btn" class="${statusBtnColor}">${book.status}</button></td>
                <td class="delete"><button class="btn btn--primary">x</button></td>
            </tr>`;

    return HTML;
}

function toggleStatus(event) {
    const index = event.target.parentElement.parentElement.dataset.index;

    if (event.target.textContent == 'read') {
        event.target.textContent = 'unread';
        myLibrary[index]['status'] = 'unread';
        event.target.classList.add('status__btn--change');
    } else if (event.target.textContent == 'unread') {
        event.target.textContent = 'read';
        myLibrary[index]['status'] = 'read';
        event.target.classList.remove('status__btn--change');
    }    
}

function removeBook(event) {
    const parentOfBookInfo = event.target.parentNode.parentNode;
    parentOfBookInfo.parentNode.remove();

    myLibrary = myLibrary.filter( book => {
        console.log(`${book.title}\n${parentOfBookInfo.querySelector(".title").textContent}`);
        return book.title !== parentOfBookInfo.querySelector(".title").textContent;
    });
}

function emptyInputs() {
    const modalInputs = document.querySelectorAll('.modal__input');
    modalInputs.forEach(input => input.value = '');
}

//Event listeners

document.addEventListener('click', event => {
    const modal = document.querySelector('.modal');

    if (event.target.className == 'btn btn--primary') removeBook(event);
    if (event.target.id == 'status-btn') toggleStatus(event);
    if (event.target.className == 'bookshelf__open-modal') modal.style.display = 'block';

    if (event.target.className == 'modal__add') {
        modal.style.display = 'none';
        addBookToLibrary();
        emptyInputs();
        mainRender();
    }

    if (event.target.className == 'modal__cancel') {
        modal.style.display = 'none';
        emptyInputs();
    }
});

   class Book {
    constructor(title, author, pages, year, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.year = year;
        this.status = status;
    }
    toggleStatus() {
        if (this.status === 'read') {
            this.status = 'unread';
        } else {
            this.status = 'read';
        }
    }
}

  const copyright = document.querySelector('.year');
  copyright.textContent = new Date().getFullYear();
