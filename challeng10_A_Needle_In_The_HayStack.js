
// code01

function find(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]==="needle") {
            console.log(`found the needle at position ${i}`);
        }
    }
    
}

find([ "hli" , "tta", "needle","hji","kplo","golotr"])

// code02


function findnmb(elem) {
    return "found the needle at position"+elem.indexOf("needle")
}
console.log(findnmb([ "hli" , "tta", "needle","hji","kplo","golotr"])
);