
function Rnegative(elem) {
    if (elem>0){
       return -elem
    }else{
        return elem
    }
}
console.log(Rnegative(2));//-2
console.log(Rnegative(-2));//-2

//////////////////////////////
function Rnegative(elem) {
   return elem>0?-elem :elem;
};
console.log(Rnegative(2));//-2
console.log(Rnegative(-2));//-2