let a=[2,4,8,9,1]
//  code01 

let sum1=0;
for (let i = 0; i < a.length; i++) {
    if (a[i]!==Math.max(...a)) {
      sum1=sum1+a[i]  ;
    }
}console.log(sum1);
//  code02 with filter
let sum2=0;
let s=a.filter( (lem)=>{
   if ( lem !== Math.max(...a) ) {
    return sum2+=lem;
   }}
)
console.log(sum2);

