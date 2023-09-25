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

let heroAndBall = document.getElementsByClassName('draggable');

for (let selectedImg of heroAndBall) {


    selectedImg.onmousedown = function (event) {
        event.preventDefault(); // запрет на выделение текста при удержании и перемещении картинки!

        let shiftX = event.clientX - selectedImg.getBoundingClientRect().left;
        let shiftY = event.clientY - selectedImg.getBoundingClientRect().top;

        selectedImg.style.position = 'absolute';
        selectedImg.style.zIndex = 1000;
        document.body.append(selectedImg);

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            selectedImg.style.left = pageX - shiftX + 'px';
            selectedImg.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);

            let leftEdge = event.clientX - shiftX - document.body.getBoundingClientRect().left;
            let topEdge = event.clientY - shiftY - document.body.getBoundingClientRect().top;
            let rightEdge = document.body.offsetWidth - selectedImg.offsetWidth;
            let bottomEdge = document.body.offsetHeight - selectedImg.offsetHeight;

            // selectedImg.hidden = true;
            // let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            // selectedImg.hidden = false;

            if (leftEdge < 0) {
                leftEdge = 0;
                selectedImg.style.left = leftEdge + 'px';
            }

            if (topEdge < 0) {
                topEdge = 0;
                selectedImg.style.top = topEdge + 'px';
            }

            if (leftEdge > rightEdge) {
                leftEdge = rightEdge;
                selectedImg.style.left = leftEdge + 'px';
            }

            if (topEdge > bottomEdge) {
                topEdge = bottomEdge;
                selectedImg.style.top = topEdge + 'px';
            }
            // }
            // что надо сделать:
            // если картинка выходит за пределы окна драузера, т.е. если ее верхние, левые и т.д. координаты больше верхней, левой и т.д. координаты окна,
            // то запретить дальнейшее уезжание картинки, но не курсора мыши - сделала

            // осталось найти все картинки, у них есть общий класс .draggable
        }

// (3) перемещать по экрану
        document.addEventListener('mousemove', onMouseMove);

// (4) положить мяч, удалить более ненужные обработчики событий
        selectedImg.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            selectedImg.onmouseup = null;
        };

        selectedImg.ondragstart = function () {
            return false;
        };
    };
}


// проблемы которые остались:
// 1. если взять картинку. уйти к примеру вниз курсором за границы окна браузера и отпустить левую нкнопку мыши,
// а затем вернуться к картинке - картинка прилепает к курсору и при повторнном клике не отлипает - должна отлипнуть

// 2. при опускании вниз картинки, картинка не доезжает до конца окна браузера