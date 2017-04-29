function prefill(n,v) {
    var check = Number(n);
    console.log(check);
    //if (isNaN(Number(n)) || n == Infinity || n == -Infinity) {
    if (!Number.isSafeInteger(check) || n < 0 || n === true || n === false){
        throw new TypeError(n + " is invalid");
    }


    var arr = [];

    for (var i = 0; i < n; i++) {
        arr.push(v);
    }
    return arr;
}
console.log(prefill(true, 1));

//console.log(prefill("xyz",1));
console.log(prefill("3",prefill(2,"abc")));
