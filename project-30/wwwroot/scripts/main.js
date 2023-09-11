let thumbs = document.getElementById("thumbs");

let bigImg = document.getElementById("largeImg");
let srcBigImg = bigImg.getAttribute('src');

thumbs.onclick = function(event) {

    event.preventDefault();
    // event.defaultPrevented = true;

    let li = event.target.closest('li'); // проверяем, есть ли в img что-то доп. вложенное

    if (!li) return;

    let src = event.target.getAttribute('src');

    srcBigImg = src; // меняем src большой картинки на src картинки на которой кликнули мышью

    let clone = li.cloneNode(true);



    clone.id = 'largeImg';
    bigImg.before(clone);

    bigImg.remove();

    // event.defaultPrevented = false;
}