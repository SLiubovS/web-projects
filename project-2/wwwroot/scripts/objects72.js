// Вывод односвязного списка в обратном порядке
// важность: 5
// Выведите односвязный список из предыдущего задания
// Вывод односвязного списка в обратном порядке.
//
//     Сделайте два решения: с использованием цикла и через рекурсию.

const objects72 = function () {

    let list = {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    };
    function printList(list) {


        // решение через цикл
        // let arr = [];
        // let tmp = list;

        // while (tmp) {
        //   arr.push(tmp.value);
        //   tmp = tmp.next;
        // }

        // for (let i = arr.length - 1; i >= 0; i--) {
        //   alert( arr[i] );
        // }

        // решение через рекурсию
        if (list.next) {
            printList(list.next);
        }

        alert(list.value);
    }
    printList(list);
};