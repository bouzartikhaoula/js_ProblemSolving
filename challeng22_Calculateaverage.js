function calc(elem) {
    s=0
    elem.filter((e)=>s=s+e   )

    return s/elem.length

}
console.log("code one:",calc([2,2,4,4]));
//////////////////////////////////////////
function calc(elem) {
 
  return  elem.reduce( (acc, cur) =>
        acc + cur )/elem.length;

}
console.log("code two:",calc([2, 2, 4, 4]));

