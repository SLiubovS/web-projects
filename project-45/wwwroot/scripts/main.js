function preloadImages(sources, callback) {
    /* ваш код */
    let result = 0;

    for (let i = 0; i < sources.length; i++) {
        const img = document.createElement('img');
        img.src = sources[i];
        document.body.append(img); // не обязательная строка, для ручной проверке в f12 ширин картинок
        img.onload = img.onerror = function () {
            result++;
            console.log(result); // т.к. в цикле for, то выводит, потом 2, потом 3
            console.log(sources.length); // 3
            if (result === sources.length) callback(); // если запускать без этой строки, то цикл for запускает ф-цию callback после каждого прохода по циклу, в итоге показывалось 3 алерта...
        };
    }
}

// ---------- тест ----------

let sources = [
    "https://en.js.cx/images-load/1.jpg",
    "https://en.js.cx/images-load/2.jpg",
    "https://en.js.cx/images-load/3.jpg"
];

// добавляем случайные символы к ссылкам, чтобы избежать кеширования
for (let i = 0; i < sources.length; i++) {
    sources[i] += '?' + Math.random();
    console.log(sources[i]);
}

// для каждого изображения
// создадим другое изображение с аналогичным src и проверим, есть ли у нас его ширина
function testLoaded() {
    let widthSum = 0;
    for (let i = 0; i < sources.length; i++) {
        let img = document.createElement('img');
        img.src = sources[i];
        widthSum += img.width;
    }
    alert(widthSum);
}

// каждое изображение в разрешении 100x100, итоговая сумма их ширин должна быть 300
preloadImages(sources, testLoaded);