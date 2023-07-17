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

        alert (`Было: ${str}`);
        let items = str.split('-');

        let results = items.map((item, index) => {

            if (index === 0) {
                return item;
            }

            let result = '';

            for (i = 0; i < item.length; i++) {
                if (i === 0) {
                    result += item[0].toUpperCase();
                } else {

                    result += item[i];
                }
            }

            return result;
        });

        let resultat = results.join('');
        return resultat;
    }

    alert(`Стало: ${camelize("background-color")}`);
    alert(`Стало: ${camelize("list-style-image")}`);
    alert(`Стало: ${camelize("-webkit-transition")}`);
};