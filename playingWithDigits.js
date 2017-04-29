function digPow(n, p){
  // ...
  var arr = [];
  for (var i = n; i > 0;) {
      arr.unshift(i%10);
      i = Math.floor(i/10);
      console.log(arr);
  }

  var result = arr.reduce(function(acc,value){
      return acc + Math.pow(value,p++);

  },0);
  console.log(result);
  var k = result/n;
  console.log(k);
  if (Number.isInteger(k)) return k;
  return -1;
}

digPow(695,2);
