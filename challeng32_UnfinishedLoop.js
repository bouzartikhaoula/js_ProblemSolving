function UnfinishedLoop(elm) {
    let s=[];
    for (let i = 1; i <= elm; i++) {
       
        s.push(i)
    }
    return (s);
}
console.log(UnfinishedLoop(3));