/*jshint esversion: 6 */
function comp(array1, array2){
  //your code here
  if (array1 === null || array2 === null) {
      return false;
  }
  var temp = array1.map(x => Math.pow(x,2));
  temp.sort((a,b) => a-b);
  
  array2.sort((a,b) => a-b);
  console.log(temp);
  console.log(array2);

  for (var i = 0; i < temp.length; i++) {
      if (temp[i] != array2[i])
      {
          return false;
      }
  }
  
  return true;


}


console.log(comp([],[]));
