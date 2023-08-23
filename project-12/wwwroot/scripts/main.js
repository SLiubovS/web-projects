setDate();

function setDate() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    if (ss <= 9) {
        ss = `0${ss}`;
    }
    if (mm <= 9) {
        mm = `0${mm}`;
    }
    if (hh <= 9) {
        hh = `0${hh}`;
    }

    let divHh = document.getElementById('hh');
    divHh.innerHTML = `${hh}:`;

    let divMm = document.getElementById('mm');
    divMm.innerHTML = `${mm}:`;

    let divSs = document.getElementById('ss');
    divSs.innerHTML = `${ss}`;
}

const btnStart = document.getElementById('button-start');

const btnStop = document.getElementById('button-stop');

let timer = null;

btnStart.onclick = function (ev) {
    timer = setInterval(setDate, 100);
}

btnStop.onclick = function (ev) {
    if (timer !== null) {
        clearInterval(timer);
    }
}


