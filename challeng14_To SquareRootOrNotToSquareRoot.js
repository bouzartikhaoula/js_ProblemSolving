// if nmber  Square return Square of nmber else return nmber*nmber in this exmpl=>[2, 9, 3, 49, 4, 1]

// code 1
let arry = [4, 3, 9, 7, 2, 1];

let Solutions = arry.map((elem) =>
  Math.sqrt(elem) == Math.sqrt(elem).toFixed(0) ? Math.sqrt(elem) : elem * elem
);

console.log("code01", Solutions);

// code02

let arry2 = [4, 3, 9, 7, 2, 1];

let Solutions2 = arry2.map((elemm) =>
  Number.isInteger(Math.sqrt(elemm)) ? Math.sqrt(elemm) : elemm * elemm
);

console.log("code02", Solutions2);
