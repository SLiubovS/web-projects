
// Выделите ячейки по диагонали
// важность: 5
// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
//
//     Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:
//
// //  в переменной td находится DOM-элемент для тега <td>
//     td.style.backgroundColor = 'red';
// Должно получиться так:
//
//  в html разметке в начале body :
// <table>
//     <tr>
//         <td>1:1</td>
//         <td>2:1</td>
//         <td>3:1</td>
//         <td>4:1</td>
//         <td>5:1</td>
//     </tr>
//     <tr>
//         <td>1:2</td>
//         <td>2:2</td>
//         <td>3:2</td>
//         <td>4:2</td>
//         <td>5:2</td>
//     </tr>
//     <tr>
//         <td>1:3</td>
//         <td>2:3</td>
//         <td>3:3</td>
//         <td>4:3</td>
//         <td>5:3</td>
//     </tr>
//     <tr>
//         <td>1:4</td>
//         <td>2:4</td>
//         <td>3:4</td>
//         <td>4:4</td>
//         <td>5:4</td>
//     </tr>
//     <tr>
//         <td>1:5</td>
//         <td>2:5</td>
//         <td>3:5</td>
//         <td>4:5</td>
//         <td>5:5</td>
//     </tr>
// </table>

    const objects80 = function () {

        let table = document.body.firstElementChild;
        table.rows[0].cells[0].style.backgroundColor = 'red';
        table.rows[1].cells[1].style.backgroundColor = 'red';
        table.rows[2].cells[2].style.backgroundColor = 'red';
        table.rows[3].cells[3].style.backgroundColor = 'red';
        table.rows[4].cells[4].style.backgroundColor = 'red';

};