function betterBuzz() {
  var numbers = new Array; 
  const maxNubers = 100;

  numbers[0] = 1;
  for(let i = 1; i < maxNubers; i++){ numbers[i] = numbers[i - 1] + 1; }
  for(let i = 0; i < numbers.length; i++) {
    var output = "";

    if(i % 3 === 0) {output += "Fizz";}
    if(i % 5 === 0) { output += "Buzz";}
    if(output === "") {  output = i; }

    console.log(output);
  }
};
