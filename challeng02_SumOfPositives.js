// //  challeng_SumOfEven
console.log("challeng_SumOfEven");
// //code1
console.log("code_01");

function evenorodd(arry) {
    let sum=0;
    for (let i = 0; i < arry.length; i++) {

    if (arry[i] % 2===0) {
    sum=sum+arry[i] ;
    }else{
    sum=sum+0;  }
    }
    console.log(sum);
}
evenorodd([1,4,8,9,2])//defrant 
evenorodd(5);// one valeu 
evenorodd([1,3,7,9,1]) //all negative 
evenorodd([10,10,10,10,2])// all positive value

console.log("#".repeat(10));
// //code2
console.log("code_02");

function name(num) {
    let sum
    {arry[i] % 2===0?    sum=sum+arry[i] : sum=sum+0;}
    console.log(sum);

}

evenorodd([1,4,8,9,2])//defrant 
evenorodd(5);// one valeu 
evenorodd([1,3,7,9,1]) //all odd 
evenorodd([10,10,10,10,2])// all even value


// challeng_SumOfPositive
console.log("challeng_SumOfPositive");
console.log("code_01");
function evenorodd(arry) {
    let sum=0;
    for (let i = 0; i < arry.length; i++) {

    if (arry[i] >0) {
    sum=sum+arry[i] ;
    }else{
    sum=sum+0;  }
    }
    console.log(sum);
}
evenorodd([-1,-4,-8,9,2])//defrant 
evenorodd([5]);// one valeu 
evenorodd([-1,-3,-7,-9,-1]) //all negative 
evenorodd([10,10,10,10,2])// all positive value

console.log("code_02 with filter");

let arryfltr= [-1,-4,-8,9,2];
let sum=0;
arryfltr.filter(function (elem) {
    elem>0 ?sum=sum+elem :sum=sum+0;
    
}
)
console.log(sum)