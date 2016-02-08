// //if you put below the body then won't need document ready

// /*
// Function
// Input: number
// Output: string "fizzbuzz" or "fizz" or "buzz" or the value of the number 
// */

function promptUser(){
  var answer = prompt("pick a whole number 1-100");
  var convertAnswer = +answer; //convert to integer
  if (verifyNumber(convertAnswer)) {
    startFizzBuzz(convertAnswer);
  } else {
    promptUser();
  }
}

function verifyNumber(num) {
  var result = (typeof num === 'number' && num % 1 === 0);
  return result;
}

// ==============================================  Another way of doing the above.
// var correctnumber = false;
// while(!correctnumber) {
//   var answer = prompt("pick a whole number 1-100");
//   var convertAnswer = +answer; //convert to integer
//   if (typeof convertAnswer === 'number' && convertAnswer % 1 === 0) {
//     correctnumber = true;
//   }
// }
// startFizzBuzz(convertAnswer);
// ==============================================


function calculateFizzBuzz(num){
  if (( num%5 === 0) && (num%3 === 0)) {
    return "fizzbuzz";
  } else if (num%3 === 0) {
    return "fizz";
  } else if (num%5 === 0) {
    return "buzz";
  } else {
    return num;
  };
}

function append(value) {
  $('body').append('<p>' + value + '</p>');
}

function startFizzBuzz(num) {
  for (var i = 1; i <= num; i++){
    var result = calculateFizzBuzz(i);
    append(result);
  }
}

promptUser();


  



//Block level scope

{
  var a = 3;

}

// a is undefined here

function() {
  
}