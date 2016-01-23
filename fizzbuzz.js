//if you put below the body then won't need document ready
var result;
for( var i = 1; i < 100; i++) 
  {
   if (( i%5 === 0) && (i%3 === 0)) {
    console.log ("fizzbuzz");
    result="fizzbuzz";
  } else if (i%3 === 0) {
    console.log ("fizz");
    result="fizz";
  } else if (i%5 === 0) {
    console.log ("buzz");
    result="buzz";
  } else {
      console.log(i);
      result=i;
  };
  $('body').append('<p>' + result + '</p>');
};
  

