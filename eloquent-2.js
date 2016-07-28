// Exercise 1
// #
// ##
// ###
// ####
// #####
// ######
// #######

  for (var i = "#"; i.length <= 7; i += "#")
  console.log(i);

// Exercise 2
  for (var i = 1; i <= 100; i++) {
  if (i%3 == 0 && i%5 == 0) {
  console.log("fizzBuzz");
  }else if (i % 3 == 0) {
  console.log("fizz");
  }else if (i % 5 == 0) {
  console.log("buzz");
  } else {
    console.log(i);
  }
};

//Exercise 3
var size = 8;
var space = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0){
      space += " ";
  }  else {
      space += "#";
  }
  space += "\n";
}
console.log(space);
