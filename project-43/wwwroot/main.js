let form = document.forms.calculator;
let initial = form.elements.money;
let interest = form.elements.interest;
let years = form.elements.months;


initial.addEventListener("change", onChange);
interest.addEventListener("change", onChange);
years.addEventListener("change", onChange);

let moneyBefore = document.getElementById("money-before");
moneyBefore.innerHTML = initial.value;

let moneyAfter = document.getElementById("money-after");
let result = Math.round(initial.value * (1 + interest.value * 0.01) ** (years.value / 12));
moneyAfter.innerHTML = result;

let heightAfter = document.getElementById("height-after");
heightAfter.style.height = "110px";
let height1 = 100;
let h = 5;


let red = document.getElementsByTagName("div")[0].clientHeight;
let green = document.getElementsByTagName("div")[1].clientHeight - 10;
let y = 0;
let x = 0;

function onChange() {

    this.value;
    result = Math.round(initial.value * (1 + interest.value * 0.01) ** (years.value / 12));
    moneyAfter.innerHTML = result;

    if (this === initial) {
        moneyBefore.innerHTML = this.value;
    }
    if (this === interest) {
        height1 = 100;
        let z = h * this.value + height1;
        return heightAfter.style.height = z + "px";
    }
    recursion(heightAfter, height1, y, x);
}

function recursion(heightAfter, height1, y, x) {
    // newHeight = heightAfter.style.height;

    y = years.selectedIndex;

    if (y === 0) {

        return heightAfter.style.height = "100px";
    } else if (x === y) {
        return heightAfter.style.height = height1 + "px";
    } else {
        return recursion(heightAfter, height1 + 5, y, x + 1);
    }
}


// function heightDiv() {
//     let red = document.getElementsByTagName("div")[0].clientHeight;
//     let green = document.getElementsByTagName("div")[1].clientHeight;
// if ()
// }
// heightDiv();




