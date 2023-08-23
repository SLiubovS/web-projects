let dateNow = new Date(); //ms

let hh = dateNow.getHours();
let mm = dateNow.getMinutes();
let ss = dateNow.getSeconds();

if (ss <= 9) {
    ss = `0${ss}`;
}

let div = document.createElement("div");
elem = document.body;
elem.prepend(div);
let clock = `${hh}:${mm}:${ss}`;

div.className = 'container';
let divHh = document.createElement("div");
divHh.className = 'container-1'
let divMm = document.createElement("div");
divMm.className = 'container-2';
let divSs = document.createElement("div");
divSs.className = 'container-3';

div.prepend(divSs);
div.prepend(divMm);
div.prepend(divHh);

divHh.prepend(`${hh}:`);
divMm.prepend(`${mm}:`);
divSs.prepend(`${ss}`);


// let click = document.getElementsByTagName('input');

// for (let input of click) {
    let timer = dateNow;
//     if (input.value === 'Старт') {
//
        function clockStart() {
            timer = setInterval(() => dateNow, 1000);
            return timer;
        }
//     } else if (input.value === 'Стоп') {
//         input.onclick = function clockStop() {
//             dateNow.clearInterval();
//             // setTimeout(() => { clearInterval(timer);}, 1000);
//         }
//     }
// }

