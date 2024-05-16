
function Rspace(elem) {
let f= Array.from(elem)
let s =new Set(f)
s.delete(" ")
console.log(s);
}
Rspace("hi mlp");