function test(array) {
    
    for (let i = 1; i < array.length; i++) {
        if (array[i]-1 !== array[i-1]) {
            return array[i]
        }
    }
    return "null"
}
console.log(test([1,2,3,9,4,5,6]));