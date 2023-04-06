const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}


const delbutton = document.querySelectorAll('.deletebook');
delbutton.addEventListener('click', (event) => {


})


function bookdisplay() {
    const booktable = document.querySelector(".booktable")
    for (var i = 0; i < myLibrary.length; i++) {
        const bookrow = booktable.insertRow();
        const titlecol = bookrow.insertCell();
        const authorcol = bookrow.insertCell();
        const pagecol = bookrow.insertCell();
        const readbutton = bookrow.insertCell();
        const button = document.createElement("button");
        button.textContent = "Delete";
        button.className = "deletebook";
        readbutton.appendChild(button);
        titlecol.textContent = myLibrary[i].title;
        authorcol.textContent = myLibrary[i].author;
        pagecol.textContent = myLibrary[i].pages;

    }
    while (booktable.rows.length > myLibrary.length + 1) {
        booktable.deleteRow(1);
    }



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
    bookdisplay();

}



formview.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();

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



