/*jshint esversion: 6 */
function diffArray(arr1, arr2) {
  var newArr = [];
  var temp = -1;
  for (let i = arr1.length; i >= 0; i--) {
    for (let j = arr2.length; j >= 0 ; j--) {
        if (arr1[i] === arr2[j]) {
            //console.log("arr1: " + arr1[i] + " arr2: " + arr2[j]);
            //console.log(arr1);
            arr1.splice(i,1);
            arr2.splice(j,1);
            //console.log(arr2);
            continue;
        }
    }

  }
  for (let i = 0; i < arr1.length; i++) {
      newArr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
      newArr.push(arr2[i]);
  }

  // Same, same; but different.
  return newArr;
}
var x = diffArray([1, 2, 3, 4, 5], [1, 2, 3, 5]);
console.log(x);

x = diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
console.log(x);
