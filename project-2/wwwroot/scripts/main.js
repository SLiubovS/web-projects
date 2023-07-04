let  number = prompt("Введите номер задания", "1");

try {
    eval(`objects${number}()`);
}
catch {
    alert(`Задание с номером ${number} не найдено`);
}