// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
//
// if (false) {
//   alert();
// }
//
// if (true) {
//   console.log('true is trythy');
// }
//
// if (0) {
//
// }
// if ('') {
//
// }
// if (null) {
//
// }
// if (undefined) {
//
// }
// if (NaN) {
//
// }
//
// // truthy
//
// console.log(Boolean(true));
// console.log(Boolean('Hello'));
// console.log(Boolean(100));
// console.log(Boolean(-1));
//
//
// if (true) {}
// if ('Hi!') {}
// if (100) {}
// if (-50) {}
//
//
//
// const name = 'John';
// if (name) {
//   console.log('Your name is ' + name);
// } else {
//   console.log('No name is provided');
// }
//
//
// console.log('hello' === 'hello'); // true
// console.log('HI' === 'hi'); // false
// console.log(false === false); // true
//
//
// ////
//
//
const trueOrTrue = true || true || 'adam';   // true
const falseOrTrue = false || true;  // true
const trueOrFalse = true || false;  // true
const falseOrFalse = false || false || 'adam'; // 'adam'
// //
// // function isNull(valueToCheck) {
// //   return valueToCheck === null;
// // }
// //
// //
// // const value = 1;
// //
// // if (isNull(value) || isUndefined(value)) {
// //   console.log('The value is null or undefined');
// // }
//
// const value = 0 || false || 12 || 24;
//
// console.log(value); // 12
//

getName('Adam'); // 'Adam'
getName(); // 'Jan Kowalski;

function getName(name) {
  if (name) {
    return name
  }
  return 'Jan Kowalski'
}


////

console.log(true && true && null);   // null
console.log('' && true);  // ''
console.log(true && undefined);  // false
console.log(false && false && 0); // false



const hour = 12;
const minute = 0;

const isNoon = hour === 12 && minute === 30;


if (isNoon) {
  console.log('The time is noon');
}


if (hour === 12 && minute === 30) {
  console.log('The time is noon');
}


const value = 1 && 20 && 0 && false;
console.log(value);

isTeenageAge(10); // false
isTeenageAge(15); // true
isTeenageAge(20); // false

function isTeenageAge (age) {
  return age > 10 && age < 20;
}

console.log(!true); // false
console.log(!false); // true
console.log(!0); // true
console.log(!1); // false


const value = 10;
const isUndefined = value === undefined;
if (!isUndefined) {
  console.log('The value is not undefined!');
}


isNotNull(null); // false
isNotNull(true); // true

function isNotNull (value) {
  return value !== null;
}

const value = 12 + 2 * 2;
console.log(true || false && false)




const isCurrentMainLightGreen = false;
const isTheCurrentConditionalLightOn = true;
const didTheCarIsCurrentlyStopped = true;

canCarGoRight(
  isCurrentMainLightGreen,
  isTheCurrentConditionalLightOn,
  isTheCurrentConditionalLightOn
)
