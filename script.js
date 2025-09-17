/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");
//test
// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/
//This part is taken from the readme but modified
const Student = {
    firstname: "Ada",
    lastname: "Lovelace",
    _gpa: 3.8,
    get fullName() {
        return this.firstname + " " + this.lastname;
    },
    get gpa() {
        return this._gpa;
    },
    set updateGpa(value) {
        if (value >= 0 && value <= 4) {
            this._gpa = value;
        }
    }
};
studenttest = Student;
studenttest.firstname = "Dena";
studenttest.lastname = "Alharbi";

console.log(studenttest.gpa);
console.log(studenttest.fullName);



// Use like normal properties: person.fullName; person.gpa; person.gpa = 3.9;

// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
//This part is taken from the readme but modified

const courseTitles = { A101: "Intro", A201: "Data Structures" };

for (const key in courseTitles) {
    console.log(key);
    console.log(courseTitles[key]);
}

// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/
const str = "I AM DENA ALHARBI";
let l= str.length;
let c=str.charAt(0);
str.charAt(4);
console.log(str);
console.log(l);
console.log("Char at 4",c);


// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/
//This part is from the readme but modified
const d = new Date();
let date =d.getDate();      // Day of month: 1–31
let month = d.getMonth();     // Month index: 0–11  (0 = January, 11 = December)
let fullyear= d.getFullYear();  // 4-digit year, e.g., 2025
console.log(fullyear);
console.log(month);
console.log("Today is the",date, "of the month:", month, "and the year:", fullyear);
// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
//This part is from the readme but modified

const nums = [1,200,3,5,6,-7,8,9,10,4];
const min = Math.min(...nums);  // same as Math.min(10, 2, 30)
const max = Math.max(...nums);
console.log(max);
console.log(min);

// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/

// End of Advance JavaScript Lab — good luck!
