function offer(day) {
    
   let  pris=40*day
    if (day<3) {
        return pris
    } else if (day<7) {
        return pris-=20
    } else {
        return pris-=50
    } {
        
    }
}
console.log(offer(4));