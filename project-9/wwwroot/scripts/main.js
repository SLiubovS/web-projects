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

    const ul = document.createElement("ul");
    elem.append(ul);

    for (let key in input) {
        const li = document.createElement("li");
        li.append(key);
        ul.append(li);

        if (typeof input[key] === "object") {
            let hasFields = false;

            for (let innerKey in input[key]) {
                hasFields = true;
                break;
            }

            if (hasFields) {
                createTree(li, input[key]);
            }
        }
    }
}

createTree(document.body, data);

//




