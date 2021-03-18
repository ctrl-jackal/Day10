function myFunction(propName) {
  var lion = {
    name: "Simba",
    legs: 4,
    tails: 1,
    roar: "roar-roar",
  };
  // Only change code below this line
  delete lion[propName];
  return lion;
  // Only change code above this line
}
console.log(myFunction("roar"));
module.exports = myFunction;
