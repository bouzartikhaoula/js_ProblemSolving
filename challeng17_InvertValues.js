function invers(elemn) {
  return elemn.map(function (e) {
    return -e;
  });
}
console.log(invers([-2, 8, 7, -7])); //[2, -8, -7, 7]
