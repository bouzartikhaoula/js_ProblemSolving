function position(elm) {
    let alpha='abcdefghijklmnopqrstuvwxyz'
for (let i = 0; i < alpha.length; i++) {
       if (elm==alpha[i]){
        return i+1
       }
}
}
console.log(position("b"));