let num = 1;

function changeNum(arg) {
    arg = 5;
    return arg;
}

let numNew = changeNum(num);

console.log(numNew);

//



let obj = {
    num: 1
};

function changeObj(arg) {
    arg = {num: 5};
}

changeObj(obj);

console.log(obj.num);


function changeObj2(arg) {
    arg.num = 5;
}

changeObj2(obj);

console.log(obj.num);