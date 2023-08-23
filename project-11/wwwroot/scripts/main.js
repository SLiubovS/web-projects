let calendar = document.getElementById('calendar');
// let calendar = document.getElementsByTagName('div');
    function createCalendar(elem, year, month) {

    let table = document.createElement('table');
    elem.append(table);

    const tr1 = document.createElement('tr');
    table.append(tr1);
    const tdMonday = document.createElement('th');
    tr1.append(tdMonday);
    tdMonday.textContent = 'Пн';

    const tdTuesday = document.createElement('th');
    tr1.append(tdTuesday);
    tdTuesday.textContent = 'Вт';

    const tdWednesday = document.createElement('th');
    tr1.append(tdWednesday);
    tdWednesday.textContent = 'Ср';

    const tdThursday = document.createElement('th');
    tr1.append(tdThursday);
    tdThursday.textContent = 'Чт';

    const tdFriday = document.createElement('th');
    tr1.append(tdFriday);
    tdFriday.textContent = 'Пт';

    const tdSaturday = document.createElement('th');
    tr1.append(tdSaturday);
    tdSaturday.textContent = 'Сб';

    const tdSunday = document.createElement('th');
    tr1.append(tdSunday);
    tdSunday.textContent = 'Вс';

        let tr2 = document.createElement('tr');
        table.append(tr2);
        let td11 = document.createElement('td');
        let td12= document.createElement('td');
        let td13 = document.createElement('td');
        let td14= document.createElement('td');
        let td15 = document.createElement('td');
        let td16= document.createElement('td');
        let td17 = document.createElement('td');

        let tr3 = document.createElement('tr');
        table.append(tr3);
        let td21 = document.createElement('td');
        let td22= document.createElement('td');
        let td23 = document.createElement('td');
        let td24= document.createElement('td');
        let td25 = document.createElement('td');
        let td26= document.createElement('td');
        let td27 = document.createElement('td');

        let tr4 = document.createElement('tr');
        table.append(tr4);
        let td31 = document.createElement('td');
        let td32= document.createElement('td');
        let td33 = document.createElement('td');
        let td34= document.createElement('td');
        let td35 = document.createElement('td');
        let td36= document.createElement('td');
        let td37 = document.createElement('td');

        let tr5 = document.createElement('tr');
        table.append(tr5);
        let td41 = document.createElement('td');
        let td42= document.createElement('td');
        let td43 = document.createElement('td');
        let td44= document.createElement('td');
        let td45 = document.createElement('td');
        let td46= document.createElement('td');
        let td47 = document.createElement('td');

        let tr6 = document.createElement('tr');
        table.append(tr6);
        let td51 = document.createElement('td');
        let td52= document.createElement('td');
        let td53 = document.createElement('td');
        let td54= document.createElement('td');
        let td55 = document.createElement('td');
        let td56= document.createElement('td');
        let td57 = document.createElement('td');

        let tr7 = document.createElement('tr');
        table.append(tr7);
        let td61 = document.createElement('td');
        let td62= document.createElement('td');
        let td63 = document.createElement('td');
        let td64= document.createElement('td');
        let td65 = document.createElement('td');
        let td66= document.createElement('td');
        let td67 = document.createElement('td');


let date = new Date(year,month);
    function getWeekday (date) {

        let days = date.getDay();

        if (days === 1) {
            tr2.append(td11);
            tr2.append(td12);
            tr2.append(td13);
            tr2.append(td14);
            tr2.append(td15);
            tr2.append(td16);
            tr2.append(td17);
            td17.textContent = '1';
        } if (days === 2) {
            tr2.append(td11);
            tr2.append(td12);
            tr2.append(td13);
            tr2.append(td14);
            tr2.append(td15);
            tr2.append(td16);
            tr2.append(td17);
            td11.textContent = '1';
        } else if (days === 3) {
            tr2.append(td11);
            tr2.append(td12);
            tr2.append(td13);
            tr2.append(td14);
            tr2.append(td15);
            tr2.append(td16);
            tr2.append(td17);
            td12.textContent = '1';
        } else if (days === 4) {
            tr2.append(td11);
            tr2.append(td12);
            tr2.append(td13);
            tr2.append(td14);
            tr2.append(td15);
            tr2.append(td16);
            tr2.append(td17);
            td13.textContent = '1';
        } else if (days === 5) {
            tr2.append(td11);
            tr2.append(td12);
            tr2.append(td13);
            tr2.append(td14);
            tr2.append(td15);
            tr2.append(td16);
            tr2.append(td17);
            td14.textContent = '1';
        } else if (days === 6) {
            tr2.append(td11);
            tr2.append(td12);
            tr2.append(td13);
            tr2.append(td14);
            tr2.append(td15);
            tr2.append(td16);
            tr2.append(td17);
            td15.textContent = '1';
        } else if (days === 7) {
            tr2.append(td11);
            tr2.append(td12);
            tr2.append(td13);
            tr2.append(td14);
            tr2.append(td15);
            tr2.append(td16);
            tr2.append(td17);
            td16.textContent = '1';
        }
        alert(days);
    }
        getWeekday (date);
}

    createCalendar(calendar, 2012, 8);
