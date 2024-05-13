function bassicop(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "/") {
    return value1 / value2;
  } else if (operation === "*") {
    return value1 * value2;
  }
}
console.log(bassicop(`*`, 3, 2));
