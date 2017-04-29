function rot13(message){
  //your code here
  var result = "";

  var temp = 0;
  var tmp = 0;
  console.log("Z".charCodeAt(0));
  for (var i = 0; i < message.length; i++) {

      temp = message.charCodeAt(i);
      if (temp >= 97 && temp <= 122){

          temp += 13;
          if (temp > "z".charCodeAt(0)) {
              tmp = temp - "z".charCodeAt(0);
              // -1 so it accounts for "a" too
              temp = tmp + "a".charCodeAt(0) - 1;
          }
      }
      else if (temp >=65 && temp <= 90) {

          temp += 13;

          if (temp > "Z".charCodeAt(0)) {
              tmp = temp - "Z".charCodeAt(0);
              // -1 so it accounts for "a" too
              temp = tmp + "A".charCodeAt(0) - 1;
          }

      }

      result += String.fromCharCode(temp);
      //console.log(result);
  }
  //result +=
  //console.log(result);
  return result;
}

rot13("Test123");
