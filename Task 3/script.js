//  PART 1

//Question 1 -- Reverse a number

// const arr = [1, 2, 3, 4, 5];
// const newArr = [];
// for (let index = arr.length - 1; index >= 0; index--) {
//     const element = arr[index];
//     newArr.push(element)  //pushing all the values stored in the element into newArr to make a reversed array
// }
// console.log(newArr);


//Question 2 -- Alphabetical order

// function alphabeticalOrder(str) {
//     const strg = prompt('Enter a String: ');
//     const words = strg.split(' ');
//     const sorted = words.sort();
//     // const joined = sorted.join('')
//     console.log(sorted.join(' '));   

// }
// alphabeticalOrder();


// Question 3 -- First letter to UpperCase

// function uppersCase(str) {
//     var str = prompt('Enter a Sentence')
//     var arr1 = str.split(' ');
//     var arr2 = [];

//     for (var i = 0; i < arr1.length; i++) {
//        arr2[i] = arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1);
//     }
//     console.log(arr2.join(' '));
// }
// uppersCase();


// Question 4 -- Longest word in String

// function longestWord(str) {
//     var word = prompt('Enter a few words Sentence');
//     var word1 = word.split(' ');
//     var output = word1[0];

//     for (var i = 1; i < word1.length; i++) {
//         if (output.length < word1[i].length) {
//             output = word1[i];
//         }
//     }
//     console.log(output);
// }

// longestWord();


// Question 5 -- no. of vowels

// function vowels(str) {
//     var vowl = prompt('Enter some words');
//     var vow = vowl.split('');
//     var count = 0;
//     const vowel = ['a', 'e', 'i', 'o', 'u'];
//     vowel.forEach(element => {
//        for (const iterator of vow) {
//          if (iterator === element) {
//             count++;
//         }
//        }
//     }
//     )
//     console.log(count);
// }
// vowels();


// Question 6 -- Longest Country Name

// function longestCountry(str) {
//     var cont = str.split(' ');
//     var longCountry = cont[0];
//     for (var i = 1; i < cont.length; i++) {
//         if (cont[i].length > longCountry.length) {
//             longCountry = cont[i];
//         }
//     }
//     return longCountry;
// }

// console.log(longestCountry("India Russia Nepal Afghanistan"));


// Question 7 -- Pass a JavaScript function as a Parameter

// function viewOutput(output) {
//     console.log(output);
// }

// function addNumber(a,b) {
//     let c = a + b;
//     viewOutput(c)
// }

// addNumber(9,2);


// Question 8 -- Function name

// function Intro() {
//     console.log("My name is Prince");
//     function Designation() {
//         console.log(arguments.callee.name);
//     }
//     Designation();
// }

// Intro();

// PART 2
// Question 1 -- retrieve values of object

// const sampleObject = {
//     name: 'Prince',
//     age: 21
// };
// function getvalues(sampleObject) {
//     return Object.values(sampleObject);
// };

// const keys = getvalues(sampleObject);
// console.log(keys);


// Question 2 -- Key Value Pair

// Took reference of the above created object
// console.log(sampleObject);


// Question 3 -- Interchange of key to value


// Question 4 -- Most Frequent Item in Array

// function frequentItems() {
//     var maxcount = 1;
//     var count = 0;
//     var item;
//     var array1 = [1, 4, 6, 3, 8, 4, 8, 4, 0, 5, 4, 2, 5, 7, 4];
//     for (var i = 0; i < array1.length; i++) {
//         for (var j = i; j < array1.length; j++) {
//             if (array1[i] == array1[j])  // comparing both the loops so know how mant times a particular element is present in the array
//                 count++; // adding here every the occurence is made in the comparison
//             if (maxcount < count) {  // cheching if the previously cheched element is lesser then the new number
//                 maxcount = count; // if it is greater then the new element with highest count will be stored in maxcount
//                 item = array1[i]; // the element with max count will be stored in the item variable 
//             }
//         }
//         count = 0; // count is made to 0 so again the loop runs with count value of element of 0
//     }
//     console.log(item + " is " + maxcount + " times in the array ");
// }
// frequentItems();


// Question 5 -- Remove Duplicate items in array

function duplicateItem(arr){
    const array = [5,3,8,8,3,8,0,4,2,6,8];
    let duplicateItems = []; // empty array to print the elemn=ents without any duplication
    
    for(let i of array) {
        if(duplicateItems.indexOf(i) === -1) {  // if element not present in the duplicationItems array then it will be pushed in array and if already present then it will be terminate the loop
            duplicateItems.push(i);
        }
    }
    console.log(duplicateItems);
}

duplicateItem();


// Question 6 -- 