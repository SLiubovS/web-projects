const data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    },
    "Птицы": 123
};

function createTree(elem, input) {

    const ul = document.createElement("ul"); // 2. создаем тег ul внутри elem (elem = любой html тег, который может содержать контент (body, div, li,..)
    elem.append(ul); // 3. созданный ul кладем в конец elem в качестве node (тег ul)

    for (let key in input) { // 4. запускаем цикл по ключам объекта input (в данном случае data, (объект в рыбах и т.д.))
        const li = document.createElement("li"); // 5. сщздаем элемент списка li
        li.append(key); // 6. кладем в конец li значение полученного key в качестве node (текст)
        ul.append(li); // 7. полученный ли кладем в конец ul

        if (typeof input[key] === "object") { // 8. проверяем содержит ли поле внутренний объект
            let hasFields = false;

            for (let innerKey in input[key]) {
                hasFields = true; // 9. если внутренний объект содержит поля, попадаем сюда, и прерываем данный цикл, т.к. поняли, что да, это не пустой объект
                break;
            }

            if (hasFields) { // 10. если внутренний объект содержит поля, то запускаем функцию (рекурсивную) в
                // которую передаем в качестве корневого элемента элемент списка (li) и в качестве данных внутренний объект
                createTree(li, input[key]);
            }
        }
    }
}

createTree(document.body, data); // 1. вызываем функцию, которая создает список и передаем в нее тег body и объект с данными data





