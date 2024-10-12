// ================= Змінні для пошуку книжок=====================

const searchBook = document.getElementById('search-book');
const searchBookBtn = document.getElementById('search-book-btn');
const bookListUl = document.getElementById('book-list-ul');
const bookList = document.getElementById('book-list').getElementsByTagName('tbody')[0];

// ================= Змінні для пошуку книжок у картках=====================

const searchBook1 = document.getElementById('search-book-1');
const searchBookBtn1 = document.getElementById('search-book-btn-1');
const bookListUl1 = document.getElementById('book-list-ul-1');
const bookList1 = document.getElementById('book-list-1').getElementsByTagName('tbody')[0];

// =================== Змінні для додавання книжок======================

const addBookBtn = document.getElementById('add-book');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const num = document.getElementById('number');

// =================== Змінні для пошуку читачів=========================

const searchVisitors = document.getElementById('search-visitors');
const searchVisitorsButton = document.getElementById('search-visitors-button');
const visitorsListUl = document.getElementById('visitors-list-ul');
const visitorsTable = document.getElementById('visitors-table').getElementsByTagName('tbody')[0];


// ====================== Змінні для додавання читача =================

const nameVisitor = document.getElementById('name-visitor');
const lastNameVisitor = document.getElementById('last-name-visitor');
const numberTelephon = document.getElementById('number-telephon');
const idNumber = document.getElementById('ID');
const addVisitorsButton = document.getElementById('add-visitors-button');


// ========================= Змінні для додавання карток ==================

const bookTitle1 = document.getElementById('book-title-1');
const bookAuthor1 = document.getElementById('book-author-1');
const nameVisitor1 = document.getElementById('name-visitor-1');
const numberId = document.getElementById('number-id');
const addBookButton = document.getElementById('add-book-button');


// =================== Змінні для статистики ========================

let counter = 0;


// ====================== Пошук книжок ===========================

searchBookBtn.addEventListener('click', () => {
    const searchBook1 = searchBook.value.toLowerCase();
    bookListUl.innerHTML = '';
    let found = false;
    const num1 = num.value;

    const rows = document.querySelectorAll('#book-list tr');

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        if (cells.length > 1) {
            const title = cells[0].innerText.toLowerCase();
            const author = cells[1].innerText.toLowerCase();

            if (title.includes(searchBook1) || author.includes(searchBook1)) {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>${title}</td>
                            <td>${author}</td>
                            <td>${num1}</td>
                            <td><button class="search-book-btn">Видалити</button></td>`;
                bookListUl.appendChild(tr);
                bookListUl.classList.add('table-title');
                found = true;
            }
        }
    }

    if (!found) {
        alert('Така книга не знайдена.');
    }

    searchBook.value = '';
});


// ====================== Пошук книжок у картках ===========================

searchBookBtn.addEventListener('click', () => {
    const searchBook11 = searchBook1.value.toLowerCase();
    bookListUl1.innerHTML = '';
    let found = false;
    const num1 = num.value;

    const rows = document.querySelectorAll('#book-list-1 tr');

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        if (cells.length > 1) {
            const title = cells[0].innerText.toLowerCase();
            const author = cells[1].innerText.toLowerCase();

            if (title.includes(searchBook11) || author.includes(searchBook11)) {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>${title}</td>
                            <td>${author}</td>
                            <td>${num1}</td>
                            <td><button class="search-book-btn">Видалити</button></td>`;
                bookListUl1.appendChild(tr);
                bookListUl1.classList.add('table-title');
                found = true;
            }
        }
    }

    if (!found) {
        alert('Така книга не знайдена.');
    }

    searchBook.value = '';
});

// =========================== Додавання книжок ==========================

addBookBtn.addEventListener('click', function () {
    const title = bookTitle.value;
    const author = bookAuthor.value;
    const num1 = num.value;

    if (title && author && num1) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${title}</td>
                            <td>${author}</td>
                            <td>${num1}</td>
                            <td><button class="search-book-btn">Змінити</button></td>
                            <td><button class="search-book-btn">Видалити</button></td>`;
        bookList.appendChild(tr);
        button.classList.add('search-book-btn');
        bookTitle.value = '';
        bookAuthor.value = '';
        num.value = '';
    }
    else {
        alert('Будь ласка заповніть всі поля.');
    }
});


// ====================== Пошук відвідувачів =========================

searchVisitorsButton.addEventListener('click', function () {
    const searchVisitors1 = searchVisitors.value.toLowerCase();
    visitorsListUl.innerHTML = '';
    let found = false;

    const rows = document.querySelectorAll('#visitors-table tr');

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        if (cells.length > 1) {
            const name = cells[0].innerText.toLowerCase();
            const lastName = cells[1].innerText.toLowerCase();
            const telephon = cells[2].innerText.toLowerCase();
            const ID_1 = cells[3].innerText.toLowerCase();

            if (name.includes(searchVisitors1) || lastName.includes(searchVisitors1) || telephon.includes(searchVisitors1) || ID_1.includes(searchVisitors1)) {
                const li = document.createElement('li');
                li.innerHTML = `<span>Ім'я:</span> ${name} <br> <span>Фамілія:</span> ${lastName} <br> <span>Телефон:</span> ${telephon} <br> <span>ID:</span> ${ID_1}`;
                visitorsListUl.appendChild(li);
                found = true;
            }
        }
    }

    if (!found) {
        alert('Такий відвідувач не знайден.');
    }

    searchVisitors.value = '';
});


// ======================= Додавання відвідувачів =======================

addVisitorsButton.addEventListener('click', function () {
    const name = nameVisitor.value;
    const lastName = lastNameVisitor.value;
    const number = numberTelephon.value;
    const idNumber1 = idNumber.value;

    if (name && lastName && number && idNumber1) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${name}</td>
                            <td>${lastName}</td>
                            <td>${number}</td>
                            <td>${idNumber1}</td>
                            <td><button class="search-book-btn">Змінити</button></td>
                            <td><button class="search-book-btn">Видалити</button></td>`;
        visitorsTable.appendChild(tr);
        button.classList.add('search-book-btn');
        nameVisitor.value = '';
        lastNameVisitor.value = '';
        numberTelephon.value = '';
        idNumber.value = '';
    }
    else {
        alert('Будь ласка заповніть всі поля.');
    }
});


// ============================ Додавання карток =========================

addBookButton.addEventListener('click', function () {
    const title = bookTitle1.value;
    const author = bookAuthor1.value;
    const nameVisitor11 = nameVisitor1.value;
    const numberId1 = numberId.value;

    if (title && author && nameVisitor11 && numberId1) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${title}</td>
                            <td>${author}</td>
                            <td>${nameVisitor11}</td>
                            <td>${numberId1}}</td>
                            <td><button class="search-book-btn">Змінити</button></td>
                            <td><button class="search-book-btn">Видалити</button></td>`;
        bookList1.appendChild(tr);
        button.classList.add('search-book-btn');
        bookTitle1.value = '';
        bookAuthor1.value = '';
        nameVisitor1.value = '';
        numberId.value = '';

        counter += 1;
    }
    else {
        alert('Будь ласка заповніть всі поля.');
    }
});

