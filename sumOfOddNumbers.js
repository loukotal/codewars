function rowSumOddNumbers(n) {
	// TODO
    var arr = [];
    var temp = [];
    var num = 0;
    for (var i = 0; i < n; i++) {
        num = (2*i) + 1;
        
        arr.push(num);
    }
    console.log(temp);
    console.log(arr);
    return arr;
}

rowSumOddNumbers(3);
