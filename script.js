const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readstatus = 0;
}




function bookdisplay() {
    console.log(myLibrary[0]);
    const booktable = document.querySelector(".booktable")
    for (let i = 0; i < myLibrary.length; i++) {

        const bookrow = booktable.insertRow();
        const titlecol = bookrow.insertCell();
        const authorcol = bookrow.insertCell();
        const pagecol = bookrow.insertCell();
        let readcheck = bookrow.insertCell();
        const delbutton = bookrow.insertCell();
        const button = document.createElement("button");
        let check = document.createElement("input")
        check.type = "checkbox";
        button.textContent = "Delete";
        button.className = "deletebook";
        button.addEventListener('click', (event) => {
            myLibrary.splice(i, 1);
            bookdisplay();
        })

        check.addEventListener('change', (event) => {
            if (check.checked === true) {
                myLibrary[i].readstatus = 1;
            }
            else {
                myLibrary[i].readstatus = 0;

            }
            bookdisplay();

        })
        if (myLibrary[i].readstatus === 1) {
            check.checked = 1;
        }
        delbutton.appendChild(button);
        readcheck.appendChild(check);
        titlecol.textContent = myLibrary[i].title;
        authorcol.textContent = myLibrary[i].author;
        pagecol.textContent = myLibrary[i].pages;

    }

    //ensures that correct no of books are stored, length+1 cause 0th value is header
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



