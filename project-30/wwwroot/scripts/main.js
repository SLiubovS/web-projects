const thumbs = document.getElementById("thumbs");
const p = document.getElementsByTagName("p")[0];

thumbs.onclick = function (event) {
    event.preventDefault();

    let a = event.target.closest('a');

    if (a == null) return;

    let href = a.getAttribute('href');

    let oldImg = document.getElementById("largeImg");
    oldImg.remove();

    let bigImg = document.createElement("img");

    bigImg.id = "largeImg";
    bigImg.alt = "Large image";
    bigImg.src = href;

    p.append(bigImg);
}






