// Backtick introduce in es6

// Uses
// For multiline string
// For use dynamic value in paragraph (string interpolation)


const p = 'There are many variations of passages of Lorem Ipsum';
const p2 = "There are many variations of passages of Lorem Ipsum";
const p3 = `There are many variations of passages of Lorem Ipsum`; //backtick

const multiline = 'There are many variations of passages of Lorem Ipsum available, \n' +
    ' but the majority have suffered alteration in some form, \n' +
    'by injected humour';

const backtickMultiline = `
    There are many variations of passages of Lorem Ipsum available,
    but the majority have suffered alteration in some form
    by injected humour;
`;


const a = 3;
const b = 4;

// const summary = 'Sum of ' + a + ' and ' + b + ' is ' + (a + b); // before es6
const summary = `Sum of ${a} and ${b} is ${a+b}`; // in es6. ${} named placeholder

console.log(multiline);