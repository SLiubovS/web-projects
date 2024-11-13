// перетаскиваемый элемент
class DraggableElement {
    constructor(element, shiftX, shiftY) {
        this.element = element;
        this.shiftX = shiftX;
        this.shiftY = shiftY;
    }

    // переместить элемент
    moveAt(pageX, pageY) {

        // вычисляем целевые координаты верхнего левого угла элемента
        let x = pageX - this.shiftX;
        let y = pageY - this.shiftY;

        // проверяем будет ли выходить элемент за левую гранцу экрана
        if (x < 0) {
            // если будет выходить, то корректируем его координату по X
            x = 0;
        }

        // проверяем будет ли выходить элемент за правую гранцу экрана
        if (document.body.offsetWidth - (x + this.element.offsetWidth) < 0) {
            // если будет выходить, то корректируем его координату по X
            x = document.body.offsetWidth - this.element.offsetWidth;
        }

        // см https://learn.javascript.ru/size-and-scroll-window#shirina-vysota-dokumenta
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );


        // проверяем будет ли выходить элемент за верхнюю гранцу экрана
        if (y < 0) {
            // если будет выходить, то корректируем его координату по Y
            y = 0;
        }

        // проверяем будет ли выходить элемент за нижнюю гранцу экрана
        if (scrollHeight - (y + this.element.offsetHeight) < 0) {
            // если будет выходить, то корректируем его координату по Y
            y = scrollHeight - this.element.offsetHeight;
        }

        // делаем scroll по Y координате
        window.scrollTo(0, y);

        // выставляем целевые координаты перетаскиваемому элементу
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
    }
}