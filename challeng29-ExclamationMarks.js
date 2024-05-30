function Marks(elemnt) {

    let f= elemnt.split("")
    if (f[f.length-1]=="!") {
    console.log(f.slice(0,f.length-1));
    }
    
}
console.log( Marks("khju !"));

