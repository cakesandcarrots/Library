const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const addbooks = document.querySelector(".addbooks");
const formview = document.querySelector(".bookdetails");

function addBookToLibrary() {
    bookname = document.querySelector('#bookname');
    authorname = document.querySelector('#author');
    pageno = document.querySelector('#pages');
    booktitle = bookname.value;
    author = authorname.value;
    page = pageno.value;
    const newbook = new Book(booktitle, author, page);
    myLibrary.push(newbook);
}



formview.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
});


addbooks.addEventListener('click', () => {
    if (formview.style.display === 'none') {
        formview.style.display = 'block';
        addbooks.textContent = 'Hide form';

    } else {
        formview.style.display = 'none';
        addbooks.textContent = 'Add Books';

    }


});


