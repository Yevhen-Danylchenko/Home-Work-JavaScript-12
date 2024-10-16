// ========================= Функція для пошуку книг додавання та видалення ================

document.addEventListener('DOMContentLoaded', function () {
 
    const addBookBtn = document.getElementById('add-book');
    const bookTitle = document.getElementById('book-title');
    const bookAuthor = document.getElementById('book-author');
    const num = document.getElementById('number');
    const bookList = document.getElementById('book-list-body');  

    const searchBook = document.getElementById('search-book');
    const searchBookBtn = document.getElementById('search-book-btn');
    const bookListUl = document.getElementById('book-list-ul');  

  
    addBookBtn.addEventListener('click', function () {
        const title = bookTitle.value.trim();
        const author = bookAuthor.value.trim();
        const num1 = num.value.trim();

    
        if (title && author && num1) {
      
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${title}</td>
                            <td>${author}</td>
                            <td>${num1}</td>
                            <td><button class="search-book-btn">Змінити</button></td>
                            <td><button class="search-book-btn">Видалити</button></td>`;

            bookList.appendChild(tr);

            bookTitle.value = '';
            bookAuthor.value = '';
            num.value = '';
        } else {
            alert('Будь ласка, заповніть всі поля.');
        }
    });

    // =================== Функція для пошуку книги =====================

    searchBookBtn.addEventListener('click', function () {
        const searchBookText = searchBook.value.toLowerCase();
        bookListUl.innerHTML = ''; 
        let found = false;

        // =================== Шукаємо в таблиці книг =======================
        const rows = bookList.getElementsByTagName('tr');

        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName('td');
            if (cells.length > 1) {
                const title = cells[0].innerText.toLowerCase();
                const author = cells[1].innerText.toLowerCase();

              
                if (title.includes(searchBookText) || author.includes(searchBookText)) {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `<td>${cells[0].innerText}</td>
                                    <td>${cells[1].innerText}</td>
                                    <td>${cells[2].innerText}</td>
                                    <td><button class="search-book-btn">Видалити</button></td>`;
                    bookListUl.appendChild(tr);  // Додаємо результат до таблиці пошуку
                    found = true;
                }
            }
        }

        if (!found) {
            alert('Така книга не знайдена.');
        }


        searchBook.value = '';
    });

 
    bookList.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON' && event.target.innerText === 'Видалити') {
            const row = event.target.closest('tr');
            row.remove();  
        }
    });

    bookListUl.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON' && event.target.innerText === 'Видалити') {
            const row = event.target.closest('tr');
            row.remove();  
        }
    });
});



// ==================== Функція для пошуку додавання та видалення користувачів ===============

document.addEventListener('DOMContentLoaded', function () {
    const searchVisitors = document.getElementById('search-visitors');
    const searchVisitorsButton = document.getElementById('search-visitors-button');
    const visitorsListUl = document.getElementById('visitors-list-ul');
    const visitorsTable = document.getElementById('visitors-table');

    const nameVisitor = document.getElementById('name-visitor');
    const lastNameVisitor = document.getElementById('last-name-visitor');
    const numberTelephon = document.getElementById('number-telephon');
    const idNumber = document.getElementById('ID-number');
    const addVisitorsButton = document.getElementById('add-visitors-button');

    // ================== Функція для додавання користувача ========================

    addVisitorsButton.addEventListener('click', function () {
        const name = nameVisitor.value.trim();
        const lastName = lastNameVisitor.value.trim();
        const telephon = numberTelephon.value.trim();
        const number = idNumber.value.trim();

        if (name && lastName && telephon && number) {
            const tr = document.createElement('tr');

            tr.innerHTML = `<td>${name}</td>
                            <td>${lastName}</td>
                            <td>${telephon}</td>
                            <td>${number}</td>
                            <td><button class="search-book-btn">Змінити</button></td>
                            <td><button class="search-book-btn">Видалити</button></td>`;
            visitorsTable.appendChild(tr);
            nameVisitor.value = '';
            lastNameVisitor.value = '';
            numberTelephon.value = '';
            idNumber.value = '';
                            
        }
        else {
            alert('Будь ласка заповніть всі поля.');
        }
    })

    // ==================== Функція для пошуку відвідувачів =========================

    searchVisitorsButton.addEventListener('click', function () {
        const searchVisitorsText = searchVisitors.value.toLowerCase();
        visitorsListUl.innerHTML = '';
        let found = false;

        // =================== Пошук в таблиці читачів ===========================

        const rows = visitorsTable.getElementsByTagName('tr');

        for (let i = 0; i < rows.length; i++){
            const cells = rows[i].getElementsByTagName('td');

            if(cells.length > 1){
                const name = cells[0].innerText.toLowerCase();
                const lastName = cells[1].innerText.toLowerCase();
                const telephon = cells[2].innerText.toLowerCase();
                const number = cells[3].innerText.toLowerCase();

                if(name.includes(searchVisitorsText) || lastName.includes(searchVisitorsText) || telephon.includes(searchVisitorsText) || number.includes(searchVisitorsText)){
                    const tr = document.createElement('tr');
                    tr.innerHTML = `<td>${cells[0].innerText}</td>
                                    <td>${cells[1].innerText}</td>
                                    <td>${cells[2].innerText}</td>
                                    <td>${cells[3].innerText}</td>
                                    <td>${cells[4].innerText}</td>
                                    <td><button class="search-book-btn">Видалити</button></td>`;

                    visitorsListUl.appendChild(tr);
                    found = true;
                }
            }
        }

        if(!found){
            alert('Такий відвідувач не знайдений.');
        }

        searchVisitors.value = '';
    });

    visitorsTable.addEventListener('click', function (event) {
        if(event.target.tagName === 'BUTTON' && event.target.innerText === 'Видалити') {
            const row = event.target.closest('tr');
            row.remove();
        }
    });

    visitorsListUl.addEventListener('click', function (event) {
        if(event.target.tagName === 'BUTTON' && event.target.innerText === 'Видалити') {
            const row = event.target.closest('tr');
            row.remove();
        }
    });
});


// ========================= Функція для пошуку книг додавання та видалення у картках ================

document.addEventListener('DOMContentLoaded', function () {
 
    const addBookButtonCards = document.getElementById('add-book-button-cards');
    const bookTitleCards = document.getElementById('book-title-cards');
    const bookAuthorCards = document.getElementById('book-author-cards');
    const nameVisitorCards = document.getElementById('name-visitor-cards')
    const numberIdCards = document.getElementById('number-id-cards');
    const bookListBodyCards = document.getElementById('book-list-body-cards');  

    const searchBookCards = document.getElementById('search-book-cards');
    const searchBookBtnCards = document.getElementById('search-book-btn-cards');
    const bookListUlCards = document.getElementById('book-list-ul-cards');

    const dellBookButtonCards = document.getElementById('dell-book-button-cards');
    const bookTitleCardsDell = document.getElementById('book-title-cards-dell');
    const bookAuthorCardsDell = document.getElementById('book-author-cards-dell');
    const nameVisitorCardsDell = document.getElementById('name-visitor-cards-dell');
    const numberIdCardsDell = document.getElementById('number-id-cards-dell');

  
    addBookButtonCards.addEventListener('click', function () {
        const title = bookTitleCards.value.trim();
        const author = bookAuthorCards.value.trim();
        const name = nameVisitorCards.value.trim();
        const number = numberIdCards.value.trim();

    
        if (title && author && name && number) {
      
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${title}</td>
                            <td>${author}</td>
                            <td>${name}</td>
                            <td>${number}</td>
                            <td><button class="search-book-btn">Змінити</button></td>
                            <td><button class="search-book-btn">Видалити</button></td>`;

            bookListBodyCards.appendChild(tr);

            bookTitleCards.value = '';
            bookAuthorCards.value = '';
            nameVisitorCards.value = '';
            numberIdCards.value = '';
        } else {
            alert('Будь ласка, заповніть всі поля.');
        }
    });

    // =================== Функція для пошуку картки =====================

    searchBookBtnCards.addEventListener('click', function () {
        const searchBookText = searchBookCards.value.toLowerCase();
        bookListUlCards.innerHTML = ''; 
        let found = false;

        // =================== Шукаємо в таблиці карток =======================
        const rows = bookListBodyCards.getElementsByTagName('tr');

        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName('td');
            if (cells.length > 1) {
                const title = cells[0].innerText.toLowerCase();
                const author = cells[1].innerText.toLowerCase();
                const name = cells[2].innerText.toLowerCase();
                const number = cells[3].innerText.toLowerCase();

              
                if (title.includes(searchBookText) || author.includes(searchBookText) || name.includes(searchBookText) || number.includes(searchBookText)) {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `<td>${cells[0].innerText}</td>
                                    <td>${cells[1].innerText}</td>
                                    <td>${cells[2].innerText}</td>
                                    <td>${cells[3].innerText}</td>
                                    <td><button class="search-book-btn">Видалити</button></td>`;
                    bookListUlCards.appendChild(tr);  // Додаємо результат до таблиці пошуку
                    found = true;
                }
            }
        }

        if (!found) {
            alert('Така картка не знайдена.');
        }


        searchBookCards.value = '';
    });

 
    bookListBodyCards.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON' && event.target.innerText === 'Видалити') {
            const row = event.target.closest('tr');
            row.remove();  
        }
    });

    bookListUlCards.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON' && event.target.innerText === 'Видалити') {
            const row = event.target.closest('tr');
            row.remove();  
        }
    });

});

  
