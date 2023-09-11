let ul = document.getElementById("ul");
let lis = document.querySelectorAll("li");

ul.onclick = function (event) {

    let target = event.target;
    clickLi(target);
}

function clickLi(targetLi) {

    for (let li of lis) {
        li.classList.remove('selected');
    }

    targetLi.classList = 'selected';
}

// вар.1
// просто щелчек мыши
// при щелчке мыши мы должны убрать класс со всех элементов списка и навесить его на тот элемент на который щелкнули

// вар. 2
// щелчек мыши + ctrl
// при щелчке мыши мы должны навесить класс на тот элемент на который щелкнули