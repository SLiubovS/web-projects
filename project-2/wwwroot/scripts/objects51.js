
const objects51 = function () {

    let library = [
        { id: 1, name: "Винни-Пух" },
        { id: 2, name: "Красная шапочка" },
        { id: 3, name: "Ктулху" },
        { id: 4, name: "Физика" },
        { id: 5, name: "Букварь" },
        { id: 6, name: "Мистер кот" }
    ];
    // ищем книгу физика
    let book = library.find(book => book.id === 4);

    alert(`id = ${book.id}, name = ${book.name}`);

    // ищем книгу букварь
    book = library.find(book => book.name === "Букварь");

    alert(`id = ${book.id}, name = ${book.name}`);

    // ищем все книжки id < 4

    let books = library.filter(book => book.id < 4);
    for (let i = 0; i < books.length; i++) {
        alert(`id = ${books[i].id}, name = ${books[i].name}`);
    }

    for (book of books) {
        alert(`id = ${book.id}, name = ${book.name}`);
    }
};

