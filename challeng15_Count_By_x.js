
function contBy(x,n) {
    let z=[]
    for (let i = 1; i < n+1; i++) {
       z.push(x*i)
    }
    return z
}
console.log(contBy(2,5));//[2, 4, 6, 8, 10]
console.log(contBy(1,10));//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
////////////
