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
        if (x < 0)
        {
            // если будет выходить, то корректируем его координату по X
            x = 0;
        }

        // проверяем будет ли выходить элемент за правую гранцу экрана
        if (document.body.offsetWidth - (x + this.element.offsetWidth) < 0)
        {
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
        if (y < 0)
        {
            // если будет выходить, то корректируем его координату по Y
            y = 0;
        }

        // проверяем будет ли выходить элемент за нижнюю гранцу экрана
        if (scrollHeight - (y + this.element.offsetHeight) < 0)
        {
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

// элемент который в настоящий момент перетаскиваем
let _draggableElement = null;

// событие - нажимаем на кнопку мыши на документе
document.onmousedown = function (event) {

    // проверяем что нажали на элемент с классом .draggable
    if (event.target.closest('.draggable'))
    {
        // запрет на выделение текста при удержании и перемещении картинки!
        event.preventDefault();

        // убираем стандартный Drag'n'Drop
        event.target.ondragstart = function () {
            return false;
        };

        // получаем информацию о размерах элемента и его позиционирования относительно окна браузера
        let draggableElementRect = event.target.getBoundingClientRect();

        // сдвиг курсора мыши внутри выбранного элемента
        let shiftX = event.clientX - draggableElementRect.left;
        let shiftY = event.clientY - draggableElementRect.top;

        // выставляем элементу абсолютное позиционирование с больщим z индекс
        event.target.style.position = 'absolute';
        event.target.style.zIndex = 1000;

        // создаем объект <<перемещаемый элемент>>
        _draggableElement = new DraggableElement(event.target, shiftX, shiftY);
        // передвигаем элемент т.к. изменили ему position на absolute
        _draggableElement.moveAt(event.pageX, event.pageY);
    }
};

// событие - передвигаем курсор мыши на документе
document.onmousemove = function (event) {

    // если элемент для перемещения не выбран, то ничего не делаем
    if (_draggableElement == null) {
        return;
    }

    // передвигаем элемент
    _draggableElement.moveAt(event.pageX, event.pageY);
};

// событие - отпускаем кнопку мыши на документе
document.onmouseup = function () {
    _draggableElement = null;
};