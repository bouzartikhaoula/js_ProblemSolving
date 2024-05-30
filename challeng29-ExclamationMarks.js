
// code1
function Marks(elemnt) {

    let f= elemnt.split("")
    if (f[f.length-1]=="!") {
   return f.slice(0,f.length-1).join("");
    }
    
}
console.log( Marks("khju !"));
// code2
function Marks2(props) {
   return props.replace(/!$/,"")
}
console.log( Marks2("k!hju!"));//k!hju