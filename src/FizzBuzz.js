function fizzBuzz(i) {
  /*var Fizz = 'Fizz';
  var Buzz = 'Buzz';
  var FizzBuzz = 'FizzBuzz';*/
  if(i%3 === 0) return 'Fizz';
  if(i%5 === 0) return 'Buzz';
  if(i%15 === 0) return 'FizzBuzz';

  return i;
}

module.exports = fizzBuzz;
