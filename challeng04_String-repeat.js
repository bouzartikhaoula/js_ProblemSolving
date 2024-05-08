
// with repeat
function repeatStr(nmbr,str) {
    console.log(`${str}`.repeat(nmbr));
}
repeatStr(5,"hi")


// with for
// code01
function restrng(nmbr,str) {
    
    for (let i = 0; i < nmbr; i++) {
        console.log(`${str}`);
    }
}
restrng(2,"hello")

// code2
function restrng2(nmbr,str) {
   let stttr="";
    for (let i = 0; i < nmbr; i++) {
        stttr+=str;
    }
    return stttr
}
console.log(restrng2(2,"hello"));
