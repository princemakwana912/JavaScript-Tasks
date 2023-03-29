let table = document.querySelector('#table');
let thead = table.createTHead();
let tHrow = thead.insertRow();
let Theading = [{ name: 'Name' }, { age: 'Age' }, { email: 'Email' }];

Theading.forEach(element => {
    for (const key in element) {
        let theadcell = tHrow.insertCell();
        theadcell.appendChild(document.createTextNode(Object.values(element)[0]));
    }
});

let tbody = table.createTBody();

let Tdata = [{ name: 'Prince', age: 21, email: 'abc@gmail.com' }, { name: 'Prince', age: 21, email: 'abc@gmail.com' }, { name: 'Prince', age: 21, email: 'abc@gmail.com' }];

Tdata.forEach(element => {
    let tbodyrow = tbody.insertRow();
    for (key of Theading) {
        let tbodycell = tbodyrow.insertCell();
        tbodycell.appendChild(document.createTextNode(element[Object.keys(key)[0]]));
    };
});

let tfoot = table.createTFoot();

let tfooter = tbody.insertRow();
    let tfootercell = tfooter.insertCell();
    tfootercell.setAttribute("colspan","3");
    tfootercell.appendChild(document.createTextNode("Footer"));
