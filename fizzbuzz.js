//if you put below the body then won't need document ready

/*
Function
Input: number
Output: string "fizzbuzz" or "fizz" or "buzz" or the value of the number 
*/
function calculateFizzBuzz(num){
  if (( num%5 === 0) && (num%3 === 0)) {
    console.log ("fizzbuzz");
    return "fizzbuzz";
  } else if (num%3 === 0) {
    console.log ("fizz");
    return "fizz";
  } else if (num%5 === 0) {
    console.log ("buzz");
    return "buzz";
  } else {
      console.log(num);
      return num;
  };
}

//make fizzbuzz viewable on the page
function append(value) {
  $('body').append('<p>' + value + '</p>');
}

//test with fizzbuzz
for (var i = 1; i < 100; i++){
  var result = calculateFizzBuzz(i);
  append(result);
}

//test to show loop 
for(var j=200; j<300; j++){
  append(j);
}

  

