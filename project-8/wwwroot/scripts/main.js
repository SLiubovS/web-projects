let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
    let liElem = prompt('Введите элемент списка', '');
    // let list = document.createElement("ul");
    let li = document.createElement("li");
    if ((liElem !== null) && (liElem !== "")) {
        li.innerHTML = liElem;
        ul.append(li);
    } else {
        break;
    }
}
