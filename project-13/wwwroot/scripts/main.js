let ul = document.getElementById('ul');

let liFirst = document.querySelector('ul > li:first-child');
let li2 = document.createElement('li');
li2.innerHTML = '2';
liFirst.append(li2);

let liLast = document.querySelector('ul > li:last-child');
let li3 = document.createElement('li');
li3.innerHTML = '3';
liLast.before(li3);