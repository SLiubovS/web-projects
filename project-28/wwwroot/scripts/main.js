let buttons = document.getElementsByTagName("button");

// получаем координаты элемента в контексте документа
function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}


for (let button of buttons) {

    function direct(ev) {

        while (true) {
            let div = document.getElementById("text");

            if (div === null) {

                div = document.createElement("div");
                div.id = "text";
                div.className = 'tooltip';
                div.textContent = button.dataset.tooltip;
                button.append(div);

                //div.style.top = "-15px";
                //div.style.left = "15px";

                //const coords = getCoords(button);

                //div.style.top = (coords.top - 15) + "px";
                //div.style.left = (coords.left + 15) + "px";
                //l
                // if (coords.top < 25) {
                //     div.style.top = (coords.pageY + div.height - div.clientHeight + 5) + "px";
                // } else {
                //     div.style.top = (coords.pageY - div.height - 5) + "px";
                // }
                //
                // div.style.left = coords.left + "px";

            }
            if (div != null) {
                break;
            }
        }
    }

    function putAway(ev) {

        let put = document.getElementById("text");
        if (put != null) {
            put.remove();
        }
    }


    button.addEventListener("mouseover", direct);
    button.addEventListener("mouseout", putAway);
}