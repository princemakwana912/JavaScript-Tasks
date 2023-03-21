//Question 1 -- Reverse a number

const arr = [1, 2, 3, 4, 5];
const newArr = [];
for (let index = arr.length - 1; index >= 0; index--) {
    const element = arr[index];
    newArr.push(element)  //pushing all the values stored in the element into newArr to make a reversed array
}
console.log(newArr);


//Another way to do the reverse order of the number in an array
// const arr1=arr.reverse()


//Question 2 -- Prime or not
function prime() {
    var p = 0;
    const num = prompt("Write a Number"); // user defined input
    if (num == 1) {
        console.log("Number is neither Composite nor Prime number");
    }
    else if (num > 1) {
        for (let index = 2; index < num; index++) {
            if (num % index == 0) {
                p++;
                break;
            }
        } if (p == 0) {
            console.log(num + " is Prime");
        }
        else {
            console.log(num + " is not Prime");
        }
    }
    else {
        console.log("Number is invalid");
    }
}

prime();


// Question 3 -- Returns the type (Took Static Values)

function type() {
    const type = "Prince";  // took 1 value to demonstrate
    // const type1 = 56;    
    console.log(typeof (type));
}

type();


// Question 4 -- Reverse String

function revStrg(strg) {
    let tempStrg = "";
    for (let index = strg.length - 1; index >= 0; index--) {
        tempStrg += strg[index];
    }
    return tempStrg;
}
const string = prompt('Write a String');
const newStrg = revStrg(string);
console.log(newStrg);


// Question 5 -- Switch case for getting the current day

let day = new Date().getDay();

switch (day) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;

    default:
        console.log("Invalid Input");
}
