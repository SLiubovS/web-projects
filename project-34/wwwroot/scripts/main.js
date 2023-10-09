
// элемент который в настоящий момент перетаскиваем
let _draggableElement = null;

// событие - нажимаем на кнопку мыши на документе
document.onmousedown = function (event) {

    // проверяем что нажали на элемент с классом .draggable
    if (event.target.closest('.draggable')) {
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