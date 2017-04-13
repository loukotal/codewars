
function XO(str) {
    //code here
    var O = str.match(/o/gi);
    console.log(O);
    var X = str.match(/x/gi);
    console.log(X);
    if (X === null && O === null) return true;
    else if (X === null || O === null) return false;
    if (X.length == O.length) return true;
    return false;
}
XO("xoXo");
