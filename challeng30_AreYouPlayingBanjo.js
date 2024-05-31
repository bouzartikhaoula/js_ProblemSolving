function playingBanjo(name) {
    
  return  name.startsWith("r")||name.startsWith("R")?`${name} play banjo`:`${name} does not play banjo`


}
console.log("code 1",playingBanjo("Rhu"));

function playingBanjo2(name) {
    
    return  name[0]==="r"||name[0]==="R"?`${name} play banjo`:`${name} does not play banjo`    
    
    }
    console.log("code 2",playingBanjo2("rha"));