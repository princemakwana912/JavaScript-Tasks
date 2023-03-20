//Question 1

const myInfo = {
    fullName: "Prince Makwana",
    age: 21,
    gender: "Male",
    hobbies: ["Reading Sci-fi Books", "Explore new things", "Playing Chess and Football"]
};
console.log(myInfo);


//Question 2

const sampleObject = {
    a: 'test',
    b: 12,
    c: true
};

// part 1
function getKeys(sampleObject) {
    return Object.keys(sampleObject); // function for fetching keys from the Object
};

const keys = getKeys(sampleObject);
console.log(keys);


//part 2
function getValues(sampleObject) {
    return Object.values(sampleObject); // function for fetching Values from the Object
};
const values = getValues(sampleObject);
console.log(values);


//part 3
console.log(sampleObject);


//Question 3

//taking values of question 1
console.log(myInfo.hasOwnProperty('age')); // this is present so expected outout will be true
console.log(myInfo.hasOwnProperty('city')); // this is not present so expected outout will be false


//Question 4

function emptyObject(sampleObject) {
    return Object.keys(sampleObject).length === 0
}; // function for checking the length of the object

const emptyObj = {};

console.log(emptyObject(myInfo));
console.log(emptyObject(emptyObj));


//Question 5

const num = 111;
console.log(num + 55); //it will add as both are number
const strg = String(num);
console.log(strg + 55); //it will not add as it is string
const bool = Boolean(0);


console.log(typeof num); //expected result to be number
console.log(typeof strg); //expected result to be string as it got changed
console.log(bool); //in bool 0 is for false and 1,2,3,.... is for true