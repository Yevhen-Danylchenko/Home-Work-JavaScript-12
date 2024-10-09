const searchBook = document.getElementById('search-book');
const searchBookBtn = document.getElementById('search-book-btn');
const bookListUl = document.getElementById('book-list-ul');
const bookList = document.getElementById('book-list');

const addBook = document.getElementById('add-book');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const num = document.getElementById('number');

// searchBookBtn.addEventListener('click', () => {
//     const searchBook1 = searchBook.value.toLowerCase();
//     const rows = bookList.getElementsByTagName('tr');
//     const cell = rows.getElementsByTagName('td').innerText.toLowerCase();

//     for (i in cell) {

//         const title = i;
//         const author = i;

//         if (title === searchBook1 || author === searchBook1) {
//             const li = document.createElement('li');
//             li.innerHTML = `<span>Назва:</span> ${title} <br> <span>Автор:</span> ${author}`;
//             bookListUl.appendChild(li);
//         }
//         else {
//             alert('Така книга не знайдена.');
//         }

//     }
//     searchBook.value = '';
// })

searchBookBtn.addEventListener('click', () => {

    for (let i = 0; i < bookList.length; i++) {
        const cells = bookList[i].getElementsByTagName('td');

        if (cells.length > 1) {
            const title = cells[0].innerText.toLowerCase();
            const author = cells[1].innerText.toLowerCase();


            if (title === searchBook1 || author === searchBook1) {
                const li = document.createElement('li');
                li.innerHTML = `<span>Назва:</span> ${ title } <br> <span>Автор:</span> ${author}`;
                    bookListUl.appendChild(li);
                    found = true;
            }
        }
    }
})



// addBook.addEventListener('click', () => {
                        //     const title = bookTitle.value;
                        //     const author = bookAuthor.value;
                        //     const num1 = num.value;


                        //     if (title && author && num1) {
                        //         bookList.getElementsByTagName('tbody')[0];
                        //         const newRow = bookList.insertRow();

                        //         newRow.innerHTML = `<td>${title}</td>
                        //                         <td>${author}</td>
                        //                         <td>${num1}</td>
                        //                         <td><button>Змінити</button></td>
                        //                         <td><button>Видалити<button></td>`;

                        //         button.className('search-book-btn');
                        //     }
                        //     else {
                        //         alert('Заповніть всі поля.');
                        //     }
                        // })
addBook.addEventListener('click', function () {
    const title = bookTitle.value;
    const author = bookAuthor.value;
    const num1 = num.value;

    if (title && author && num1) {
        const ul = document.createElement('ul');
            ul.innerHTML = `<li>${title}</li>
                            <li>${author}</li>
                            <li>${num1}</li>
                            <li><button>Змінити</button></li>
                            <li><button>Видалити</button></li>`;
            bookList.appendChild(ul);
            button.className('search-book-btn');
            bookTitle.value = '';
            bookAuthor.value = '';
            num.value = '';
    }
    else {
        alert('Будь ласка заповніть всі поля.');
    }
})