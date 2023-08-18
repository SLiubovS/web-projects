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
    }
};

function createTree(elem, input) {

    const ul = document.createElement("ul");

    for (let key in input) {
        const li = document.createElement("li");
        li.append(key);
        ul.append(li);

        if (typeof input[key] === "object") {
            let hasFields = false;

            for (let innerKey in input[key]) {
                hasFields = true;
            }

            if (hasFields) {
                createTree(li, input[key]);
            }
        }
    }
    elem.append(ul);
}

createTree(document.body, data);






