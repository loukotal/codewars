function dashatize(num) {
  //get 'em
  if (!Number.isInteger(num))  {
      return "NaN";
  }
  if (num < 0) {
      num  *= -1;
  }
  if (num < 10) {
      return ""+num;
  }
  var arr = [];
  var temp = 0;
  for (var i = num; i > 0; i = Math.floor(i/10)) {
      temp = i % 10;
      if (temp % 2 == 1) {
          arr.push("-",temp,"-");

      }
      else arr.push(temp);
  }
  var sliced = [];
  if (arr[0] == "-") {
      arr.shift();
  }
  if (arr[arr.length-1] == "-") {
      arr.pop();
  }
  //console.log(arr);
  for (var j = 0; j < arr.length; j++) {
      if (arr[j] == "-" && arr[j-1] == "-") {
        j++;
      }
      sliced.push(arr[j]);
  }

  sliced = sliced.reverse().join("");
  return sliced;
}

// SOLUTION FROM CODEWARS BY ooflorent
// function dashatize(num) {
//   return String(num)
//     .replace(/([13579])/g, "-$1-")
//     .replace(/--+/g, "-")
//     .replace(/(^-|-$)/g, "")
// }
