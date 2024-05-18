function revr(elem) {
    
    return Array.from(elem).reverse().join("")
}
console.log(revr("hi are"));//era ih

//code 2

function revr2(elem2) {
    
    return elem2.split(" ").reverse().join("")
}
console.log(revr2("hi are"));//eraih