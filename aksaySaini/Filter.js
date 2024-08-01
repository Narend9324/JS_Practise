const arr = [2, 3, 4, 5, 6, 7, 8];

// To find/filter odd values from array
function isOdd(x) {
  return x % 2 !== 0;
}

// To find/filter even values from array
function isEven(x) {
  return x % 2 == 0;
}

// To find/filter Greater values from array
function greater(x) {
  return x > 3;
}

// To find/filter Lesser values from array
function lesser(x) {
  return x < 4;
}

//type1
const output = arr.filter(lesser);

//type2
const output1 = arr.filter(function lesser(x) {
  return x < 4;
});

//type3
const output2 = arr.filter((x) => x < 4);

console.log("output", output2);
