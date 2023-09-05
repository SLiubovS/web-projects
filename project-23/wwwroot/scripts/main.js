let div = document.getElementById("name");
let ul = document.getElementById("list");

ul.style.display = "none";

div.onclick = function clickClick() {

    div.classList.toggle("divBefore");
    div.classList.toggle("divAfter");
    let span1 = document.getElementById("spanAfter");
    let span2 = document.getElementById("spanBefore");

    if (div.classList.contains("divBefore")) {

        span2.style.display = "inline-block";
        span1.style.display = "none";
        ul.style.display = "none";

    }
    if (div.classList.contains("divAfter")) {

        span1.style.display = "inline-block";
        span2.style.display = "none";
        ul.style.display = "block";
    }
}