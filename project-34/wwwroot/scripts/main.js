// Базовый алгоритм Drag’n’Drop выглядит так:
//
//  1.   При mousedown – готовим элемент к перемещению, если необходимо (например, создаём его копию).
//  2.   Затем при mousemove передвигаем элемент на новые координаты путём смены left/top и position:absolute.
//  3.   При mouseup – остановить перенос элемента и произвести все действия, связанные с окончанием Drag’n’Drop.

//  после того как мы нашли все элементы из html что нужно сделать:
// 1) при клике мышью на предмет, чтобы курсор мыши фиксировался в том месте объекта, на котором кликнули
// 2) при перетаскивании, чтобы объект под курсором смещался пропорционально
// 3) после отпускания чтобы он остался там, куда отпустили


// 1) определили координаты мыши, теперь при клике на elem в консоль выводятся координаты мыши
// т.к. мышь бегает по elem, координаты курсора совпадают с координатами elem, когда движение идет по elem

// когда мышь кликает на elem, что координаты мыши равны девому верхнему углу картинки!!! когда у картинки top = 0, left = 0
// чтобы это поправить, нужно запомнить координаты сдвига и вычесть их от координат мыши
// на этом этапе у меня все ломается

// теперь нужно сделать перемещение, mouseMove


// найдем все переносимые элементы из html

let hero1 = document.getElementById('hero1'); // взяли первого героя для тестов

hero1.onmousedown = function (event) {

    let shiftX = event.clientX - hero1.getBoundingClientRect().left;
    let shiftY = event.clientY - hero1.getBoundingClientRect().top;

    hero1.style.position = 'absolute';
    hero1.style.zIndex = 1000;
    document.body.append(hero1);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        hero1.style.left = pageX - shiftX + 'px';
        hero1.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        let leftEdge = event.clientX - shiftX - document.body.getBoundingClientRect().left;
        let topEdge = event.clientY - shiftY - document.body.getBoundingClientRect().top;
        let rightEdge = document.body.offsetWidth - hero1.offsetWidth;
        let bottomEdge = document.body.offsetHeight - hero1.offsetHeight;

        hero1.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        hero1.hidden = false;

        if (leftEdge < 0) {
            leftEdge = 0;
            hero1.style.left = leftEdge + 'px';
        }

        if (topEdge < 0) {
            topEdge = 0;
            hero1.style.top = topEdge + 'px';
        }

        if (leftEdge > rightEdge) {
            leftEdge = rightEdge;
            hero1.style.left = leftEdge + 'px';
        }

        if (topEdge > bottomEdge) {
            topEdge = bottomEdge;
            hero1.style.top = topEdge + 'px';
        }
        // }
        // что надо сделать:
        // если картинка выходит за пределы окна драузера, т.е. если ее верхние, левые и т.д. координаты больше верхней, левой и т.д. координаты окна,
        // то запретить дальнейшее уезжание картинки, но не курсора мыши - сделала

    }

// (3) перемещать по экрану
    document.addEventListener('mousemove', onMouseMove);

// (4) положить мяч, удалить более ненужные обработчики событий
    hero1.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        hero1.onmouseup = null;
    };

    hero1.ondragstart = function () {
        return false;
    };
};

//     hero1.style.left = event.clientX + 'px';
//     console.log(hero1.style.left);
//     hero1.style.top = event.clientY + 'px';
//     console.log(hero1.style.top);
//     document.addEventListener('mousemove', onMouseMove);
//
//     let shiftX = event.clientX - hero1.getBoundingClientRect().left;
//     let shiftY = event.clientY - hero1.getBoundingClientRect().top;
//
//     function onMouseMove(event) {
//         const x = event.clientX; // получаем координату X мыши
//         const y = event.clientY; // получаем координату Y мыши
//
//         console.log(`Координаты мыши: x=${x}, y=${y}`); // выводим координаты мыши в консоль
//
//         hero1.style.left = event.clientX - shiftX/4 + 'px';
//         hero1.style.top = event.clientY - shiftY/4 + 'px';
//     }
//
// // тут проблема, не понимаю, почему при отпускании кнопки мыши elem все равно сдвигается при наведении...
//     hero1.onMouseUp = function () {
//         document.removeEventListener('mousemove', onMouseMove);
//         hero1.onMouseUp = null; // весь написанный mouseUp - из учебника, эту строку не понимаю совсем
//     }
// };
// hero1.ondragstart = function () {
//     return false;
// }

// }

// переносимые элементы это герои и мяч

// отмена браузерного действия по умолчанию, нужно повесить на мяч (картинка) и герои в дивах
// ball.ondragstart = function() {
//     return false;
// };