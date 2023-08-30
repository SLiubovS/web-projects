let div = document.getElementById("field");
let ball= document.getElementById("ball");

let centerWidthField = (div.offsetWidth - (div.scrollWidth - div.clientWidth) - (div.clientLeft * 2)) / 2;

let centerHeightField = (div.offsetHeight - (div.scrollHeight - div.clientHeight) - (div.clientTop * 2)) / 2;

let centerBall = ball.clientWidth / 2;

ball.style.top = (centerHeightField - centerBall) + 'px';
ball.style.left = (centerWidthField - centerBall) + 'px';
