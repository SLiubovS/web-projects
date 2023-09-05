let button = document.getElementsByTagName("button")[0];

function direct(ev) {

    while (true) {
        let div = document.getElementById("text");

        if (div === null) {
            div = document.createElement("div");
            div.id = "text";
            div.innerHTML = "Подсказка созданная через js";
            button.append(div);

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
