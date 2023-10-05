let hero1 = document.getElementById('hero1'); // взяли первого героя для тестов

let heroAndBall = document.getElementsByClassName('draggable');

let handlers = [];

for (let selectedImg of heroAndBall) {


    selectedImg.onmousedown = function (event) {
        event.preventDefault(); // запрет на выделение текста при удержании и перемещении картинки!

        let shiftX = event.clientX - selectedImg.getBoundingClientRect().left;
        let shiftY = event.clientY - selectedImg.getBoundingClientRect().top;

        selectedImg.style.position = 'absolute';
        selectedImg.style.zIndex = 1000;

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            selectedImg.style.left = pageX - shiftX + 'px';
            selectedImg.style.top = pageY - shiftY + 'px';
        }

        let onMouseMove = function (event) {

                moveAt(event.pageX, event.pageY);

                let leftEdge = event.clientX - shiftX - document.body.getBoundingClientRect().left;
                let topEdge = event.clientY - shiftY - document.body.getBoundingClientRect().top;
                let rightEdge = document.body.offsetWidth - selectedImg.offsetWidth;
                let bottomEdge = document.body.offsetHeight - selectedImg.offsetHeight;

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
        }
        handlers.push(onMouseMove);

        document.addEventListener('mousemove', onMouseMove);

        selectedImg.onmouseup = function (event) {

            for (let handler of handlers) {
                document.removeEventListener('mousemove', handler);
            }

            handlers.clear();

            event.target.onmouseup = null;
        };

        selectedImg.ondragstart = function () {
            return false;
        };
    };
}


