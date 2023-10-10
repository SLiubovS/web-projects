/**
 * Проверка видимости элемента (в видимой части страницы)
 * Достаточно, чтобы верхний или нижний край элемента был виден
 */
function isVisible(elem) {

    let coords = elem.getBoundingClientRect();
    let heightAll = document.documentElement.clientHeight; // для сокращения, высота окна минус прокрутка
    let topV = coords.top > 0 && coords.top < heightAll; // проверка, виден ли верхний край элемента?
    let bottomV = coords.bottom > 0 && coords.bottom < heightAll; // проверка на видимость нижнего края нужна, на случай
    // очень быстрой прокрутки
    return topV || bottomV;
}

function showVisible() {
    for (let img of document.querySelectorAll('img')) {
        let realSrc = img.dataset.src;

        // проверяем что строка не пустая, а также не содержит null или undefined
        if (!realSrc) {
            continue;
        }

        if (isVisible(img)) {

            img.src = realSrc;
            img.dataset.src = '';
        }
    }

}

showVisible();
window.addEventListener('scroll', showVisible);

