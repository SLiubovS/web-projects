// Форматирование относительной даты
// важность: 4
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
//
//     Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
//     В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
//     В противном случае, если меньше часа, вывести "m мин. назад".
//     В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух
//     цифр, т.е. 31.12.16 10:00.
//     Например:
//
// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
//
// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
//
// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
//
// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

const objects65 = function () {

    let dateNow = new Date();
    let datePast = new Date(2023, 6, 29);
    let diffMs = dateNow - datePast;
    alert(`ms=${diffMs}`);
    alert(`s=${diffMs / 1000}`);
    alert(`m=${(diffMs / 1000) / 60}`);
    alert(`h=${((diffMs / 1000) / 60) / 60}`);
    alert(`d=${(((diffMs / 1000) / 60) / 60) / 24}`);
    // new Date(year, month, date, hours, minutes, seconds, ms)
};