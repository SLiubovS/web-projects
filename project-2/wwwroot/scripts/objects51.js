
const objects51 = function () {

   let library =[
       { id: 1, name: "Винни-Пух" },
       { id: 2, name: "Красная шапочка" },
       { id: 3, name: "Ктулху" },
       { id: 4, name: "Физика" },
       { id: 5, name: "Букварь" },
       { id: 6, name: "Мистер кот" }
   ];
// ищем книгу физика
   let book = library.find(book => book.id === 4);

   alert (`id = ${book.id}, name = ${book.name}`);


// ищем книгу букварь
    book = library.find(book => book.name === "Букварь");

    alert (`id = ${book.id}, name = ${book.name}`);


    // ищем все книжки id < 4

    let books = library.filter(book => book.id < 4);
    for (let i = 0; i < books.length; i++) {
        alert (`id = ${books[i].id}, name = ${books[i].name}`);
    }

    for ( book of books) {
        alert (`id = ${book.id}, name = ${book.name}`);
    }






    // вторая задача:


        //
        // let squares =[
        //     {a: 1, b: 3, c: 5, d: 2},
        //     {a: 2, b: 4, c: 6, d: 7},
        //     {a: 3, b: 6, c: 7, d: 9},
        //     {a: 4, b: 3, c: 8, d: 10}
        // ];
        //
        // let results = squares.filter(item => item.b === 3);
        //
        // for (let result of results) {
        //     alert(`a=${result.a}, b=${result.b}, c=${result.c}, d=${result.d}`);
        // }


};

