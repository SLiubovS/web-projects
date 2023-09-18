// на месте divHouse сейчас div c id = house, а должны быть отфильтрованные элементы с атрибутом data-tooltip

let divHouse = document.getElementById("house");

let divTooltip;

let body = document.body;

divHouse.onmouseover = function (event) {

    let dataTooltip = event.target.getAttribute('data-tooltip');

    if (dataTooltip != null) {

        if (divTooltip != null)
        {
            divTooltip.remove();
        }

        divTooltip = document.createElement("div");

        divTooltip.className = 'tooltip';
        divTooltip.innerHTML = dataTooltip;
        body.prepend(divTooltip);

        let coords = body.getBoundingClientRect();

        divTooltip.style.left = coords.offsetLeft + 'px';

        if (coords.y < divTooltip.clientHeight * 1.5) {
            divTooltip.style.top = (coords.offsetTop + 10) + "px";
        } else {
            divTooltip.style.top = (coords.offsetTop - 10) + "px";
        }
    }
}

