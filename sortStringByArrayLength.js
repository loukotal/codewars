function sorted(arr){
    return arr.sort(function(a,b){
        return a.length - b.length;
    });
}

var sortedArr = sorted(["Telescopes", "Glasses", "Eyes", "Monocles"]);
console.log(sortedArr);
