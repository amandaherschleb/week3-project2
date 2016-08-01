/*
=======================================================

** Week 3 - Project 2 **
*** More Functioning ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-9
ADVANCED TRACK: 10-13
=======================================================
*/

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smaller number.
console.log('Questin 1');

function min(number1, number2) {
  if (number1 < number2) {
    return number1
  } else {
    return number2
  }
}

console.log('The minimum of 7 and 22 is: ' + min(7,22));

// 2. Create a new function called minimum3() to find the smallest of three numbers.
console.log('Question 2');

function minimum3(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    return num1;
  } else if (num2 < num1 && num2 < num3) {
    return num2;
  } else {
    return num3;
  }
}

console.log('The minimum of 7, 22 and 50 is: ' + minimum3(22,7,50) );

// 3. Declare a function called sum() that takes an array of numbers as an argument adds them together.
//    i.e. sum([1, 2, 3, 4]) should return 10.
console.log('Question 3');

function sum(numArray) {
  var sum = numArray.reduce(function(a,b) { return a + b;}, 0);
  return sum;
}

var numbers = [1,2,3,4];
console.log('The sum of the array is: ' + sum(numbers));

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.
console.log('Question 4');

function multiply(numArray) {
  var product = numArray.reduce(function(a,b) { return a * b;});
  return product;
}

console.log('The product of the array is: ' + multiply(numbers));


// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
console.log('Question 5');

var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];

function filterSixPlus(wordArray) {
  var wordsMaxSix = [];
  for (var i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length < 6) {
      wordsMaxSix.push(wordArray[i]);
    }
  }
  return wordsMaxSix;
}

console.log(filterSixPlus(words));

// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.
console.log('Question 6');

function convert() {
  degC = prompt('Enter temperature in Celsius');
  degF = Math.round((parseFloat(degC) * 1.8 + 32) * 100) / 100;
  return degF + ' Fahrenheit';
}

console.log(convert());


// 7. Adding to the code in #6, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.
console.log('Question 7');

function convert2() {
  temp = parseFloat(prompt('Enter temperature'));
  type = prompt('F to C or C to F');
  if(type === 'C to F') {
    degF = Math.round((temp * 1.8 + 32) * 100) / 100;
    return degF + ' Fahrenheit';
  } else {
    degC = Math.round(((temp - 32) / 1.8) * 100) / 100;
    return degC + ' Celsius';
  }
}

console.log(convert2());


// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()
console.log('Question 8');

function countBs(string) {
  var countB = 0;
  var character = 'B';
  for (var a = 0; a < string.length; a++) {
    var letterKey = string.charAt(a);
    if (letterKey == character) {
      countB+=1;
    }
  }
  return countB;
}

var testSentance = 'This is the BBest string with B in it BBB';
console.log(countBs(testSentance));


// 9. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!
console.log('Question 9');

console.log('My results: 20min 23s for 5 levels.');

// ADVANCED TRACK
// 10. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.
console.log('Question 10');

function countChars(string2,char) {
  var count = 0;
  for (var j = 0; j < string2.length; j++) {
    var key = string2.charAt(j);
    if (key == char) {
      count+=1;
    }
  }
  return count;
}

testSentance2 = 'A lkdj A AlksjdA lkA AAAsldkj A sldkfjAAA'
console.log(countChars(testSentance2,'A'));

// 11. Declare a function called ohZero that replaces all of the o's in a string with 0's.
console.log('Question 11');

function ohZero(string) {
  return string.replace(/o/g, 0);
}

var testString = 'oh oh oh oh'

console.log(ohZero(testString));

// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.
console.log('Question 12');

function bottlesOfBeer(number) {
  for (var i = 0; i < number; i++) {
    bottles = 99 - i;
    bottlesLeft = bottles - 1;
    console.log(bottles + ' bottles of beer on the wall, ' + bottles + ' bottles of beer! Take one down and pass it around, ' + bottlesLeft + ' bottles of beer on the wall!');
  }
};

console.log(bottlesOfBeer(10));


// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.
console.log('Question 13');


var computerNumber = Math.floor(Math.random() * 100);
var message = 'Guess a number between 0 and 100';
var attempts = 0;

function checkGuess(number){
  var result;

  if(number === computerNumber){
    result = 'correct';
  } else if (number > computerNumber) {
    result = 'too high'
  } else if (number < computerNumber){
    result = 'too low'
  }

  return result;
}  //end checkGuess function

do {

  var userGuess = parseInt(prompt(message));
  var result = checkGuess(userGuess);
  attempts +=1;

  if(result === 'correct'){
    if(attempts === 1){
      alert('You guessed it! It took you ' + attempts + ' attempt!');
    } else {
      alert('You guessed it! It took you ' + attempts + ' attempts!');
    }
  } else if (result === 'too high') {
    message = 'Too high, guess again!';
  } else if(result === 'too low') {
    message = 'Too low, guess again!';
  }

} while (userGuess !== computerNumber);

console.log('Number was ' + computerNumber + ' and number of attempts was ' + attempts);
