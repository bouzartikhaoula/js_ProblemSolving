// Counting sheep=true 

let arraynb=[
    true,true,true,false,
    true,false,true,false,
    true,false,false,true,
    true,true,true,true,
    false,false,true,true
]
// with function

let S1=0;
arraynb.filter(function (elm) {
   
    if (elm===true) {
        S1++;
    }
   
})
console.log(`S1= ${S1}`);

// with loop

let S2=0;

for (let i = 0; i < arraynb.length; i++) {
    if (arraynb[i]===true) {
                S2++;

    }
    
}
console.log(`S2= ${S2}`);
