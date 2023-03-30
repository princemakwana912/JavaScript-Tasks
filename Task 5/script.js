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

// Simple function without Async
// function getStudent() {
//     fetch('http://localhost:3000/student')
//         .then(result => result.json())
//         .then(student => createTableBody(student));
// }

////////////////////////

async function getStudents() {
    let response;
    // fetch('http://localhost:3000/student')
    //     .then(result => result.json())
    //     .then(student => createTableBody(student));
    // console.log(response);
    try {
        response = await fetch('http://localhost:3000/student');
        const student = await response.json();
        createTableBody(student);
        console.log(student);
    } catch (error) {
        console.error(error);
    }
    console.log(response);
}

// function addStudents() {
//     fetch('http://localhost:3000/student', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: 'Raj',
//             age: 23,
//             email: 'raj@gmail.com'
//         })
//     })
// }

function createTableBody(student) {
    student.forEach(element => {
        const tr = tbody.insertRow();
        Theading.forEach(header => {
            const key = Object.keys(header)[0];
            const td = tr.insertCell();
            td.appendChild(document.createTextNode(element[key]));
        })

    });
}



// let tfoot = table.createTFoot();

// let tfooter = tbody.insertRow();
// let tfootercell = tfooter.insertCell();
// tfootercell.setAttribute("colspan", "3");
// tfootercell.appendChild(document.createTextNode("Footer"));
