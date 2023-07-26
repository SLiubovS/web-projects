// Покажите день недели
// важность: 5
// Напишите функцию getWeekDay(date), показывающую день недели в коротком
// формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
//
// Например:
//
//     let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"


const objects59 = function () {

    let date = new Date(2012, 0, 3);

    function getWeekDay(date) {
        // мой вариант решения, оч. длинный
        // let week = date.getDay();
        // if (week === 1) return "ПН";
        // if (week === 2) return "ВТ";

        // вариант решения автора через массив:

        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

        return days[date.getDay()];
    }

    alert(getWeekDay(date));
};