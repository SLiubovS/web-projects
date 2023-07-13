// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
//
//     Примеры:
//
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов,
//     потом переделайте всё как нужно и методом join соедините обратно.


const objects37 = function () {
    function camelize(str) {

        let arr = str.split('-');

        alert(arr); // можно удалить в финальной версии, выводила для проверки

// получили arr = [background, color];

        // далее нам надо перебрать элементы массива и у всех элементов, кроме нулевого сделать первый подэлемент заглавным

        //     let result = arr.map(//без понятия как это применить, думаю что решать надо через map, но у меня не получилось);
        //
        //     return result;
        //


    }
    camelize("background-color");
    camelize("list-style-image");
    camelize("-webkit-transition");
};