// Отфильтруйте анаграммы
// важность: 4
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
//
//     Например:
//
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
//
//     Например:
//
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

const objects53 = function () {

    let array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    function aclean(arr) {
        let map = new Map();
        for (let word of arr) {

            let sorted = word.toLowerCase().split("").sort().join(""); // (*)
            map.set(sorted, word);
        }

        let arr2 = [];
        for (let key2 of map.keys()) {
            arr2.push(key2);
        }

        return arr2;
    }

    alert(aclean(array));

};