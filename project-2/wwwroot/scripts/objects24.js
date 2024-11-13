// реализовать объект phone (телефон) с помощью функции-конструктора
// у объектра phone должны быть:
// 1. Свойство myNumber которое может быть иниципализировано через параметр конструктора
// 2. Свойство otherNumber которое по умолчанию инициализированно null
// 3. Метод startCall который принимает на вход otherNumber (метод который начинает звонок)
// 4. Метод endCall выставляет полю otherNumber значение null
// 5. Нельзя начать новый звонок пока не закончен старый


const objects24 = function () {
    function Phone(myNumber) {
        this.myNumber = myNumber;
        this.otherNumber = null;
        this.startCall = function (a) {
            if (this.otherNumber !== null) {
                alert(`нельзя позвонить на номер  ${a} пока не окончен разговор с ${this.otherNumber}`)
            }
            this.otherNumber = a;
        };
        this.endCall = function () {
            this.otherNumber = null;
        }
    }

    let phone = new Phone("+79250001122");
    alert(phone.myNumber); // выведем на экран +79250001122
    alert(phone.otherNumber); // выведем на экран null
    phone.startCall("+79031722479");
    alert(phone.otherNumber); // выведем на экран +79031722479
    phone.startCall("100"); // выведем на экран "нельзя позвонить на номер 100 пока не окончен разговор с +79031722479"
    phone.endCall();
    phone.startCall("100");
    alert(phone.otherNumber); // выведем на экран 100
};