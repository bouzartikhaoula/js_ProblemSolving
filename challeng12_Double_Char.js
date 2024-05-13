let mix = "khaoula";

let mixed = mix
  .split("")
  .map((elem) => elem.repeat(2))
  .join("");
console.log(mixed); //kkhhaaoouullaa
