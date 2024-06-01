
function Remove(e) {
    let s=[];
for (let i = 0; i < e.length; i++) {
    if (i%2==0) {
        s.push(e[i]);
        
    }
}
return s;
}
console.log(Remove(["z1","kj","z2","kj","z3","kj"]));


