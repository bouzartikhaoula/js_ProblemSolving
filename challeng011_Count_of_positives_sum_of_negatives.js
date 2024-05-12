//  1 Count-of-positives
//  2 sum-of-negatives
// rutern array [sum-of-negatives,Count-of-positives]
// code01 with loop
let sum = 0;
let positives=[]
let result=[]
let Array=[-1,5,7, -9,5, -1, 4, -2]
  for (let i = 0; i < Array.length; i++) {
    if (Array[i] < 0) {
       sum = sum + Array[i];
    }else{
        positives.push(Array[i]);
    }
  }
console.log([sum,positives.length]);
///////////////////////
console.log("/////");
//////////////////////
// code02 with map
let sum2 = 0;
let positives2=[]
let result2=[]
let f=Array.map( (elemm) =>  elemm < 0?sum2 += elemm:positives2.push(elemm))

console.log(positives2.length);
result2.splice(0,0,sum2,positives2.length)
console.log(result2);