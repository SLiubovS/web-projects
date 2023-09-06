let buttons = document.getElementsByTagName("button");



for (let button of buttons) {

    function direct(ev) {

        while (true) {
            let div = document.getElementById("text");

            if (div === null) {

                div = document.createElement("div");
                div.id = "text";
                div.className = 'tooltip';
                div.textContent = button.dataset.tooltip;
                document.body.prepend(div);

                //div.style.top = "-15px";
                //div.style.left = "15px";

                const windowBtnCoords = button.getBoundingClientRect();

                div.style.left = button.offsetLeft + "px";


                if (windowBtnCoords.y < div.clientHeight * 1.5) {
                    div.style.top = (button.offsetTop + 18) + "px";
                } else {
                    div.style.top = (button.offsetTop - 48) + "px";
                }
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