// Array Methods 

let myArray = [1, 2, 3, 4, 5,null , undefined, 'hello'];

console.log("Original Array:", myArray);
console.log("length of array:", myArray.length)
 myArray.pop();
 console.log("After pop:", myArray);
  myArray.push(6);
  console.log("After push:", myArray);
  myArray.shift();
  console.log("After shift:", myArray);
    myArray.unshift(0);
    console.log("After unshift:", myArray);

// STRING METHODS

let myString= " Hello World! Welcome to JavaScript.  ";

console.log("Original String:", myString);
console.log("length of string" , myString.length);
console.log(myString.indexOf('JavaScript.'))

//slice of string
console.log("Sliced String:", myString.slice(0, 12));

//trim string
console.log("Trimmed String:", myString.trim());

//replace string
console.log(myString.replace("JavaScript", "JS:"));

// DATES IN JAVASCRIPT

let myDate = new Date();
console.log("Current Date and Time:", myDate);
console.log("Year:", myDate.getFullYear());
console.log("Month:", myDate.getMonth() + 1); // Months are zero-based
console.log("Date:", myDate.getDate());
console.log("Hours:", myDate.getHours());
console.log("Minutes:", myDate.getMinutes());
console.log("Seconds:", myDate.getSeconds());       
// Set a specific date
let specificDate = new Date('2022-01-01T10:00:00');
console.log("Specific Date:", specificDate);    
specificDate.setFullYear(2023);
console.log("Updated Specific Date:", specificDate);
