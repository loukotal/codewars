function race(v1, v2, g) {
    // your code
    if (v1 > v2) {
        return null;
    }
    var arr = [];
    var t = g / (v2 - v1);

    var h = Math.floor(t);
    arr.push(h);
    t = 60*t - h*60;

    var m = Math.floor(t);
    arr.push(m);
    t = 60*t - m*60;

    var s = Math.floor(t);
    arr.push(s);

    return arr;
}
race(80, 91, 37);
race(80, 100, 40);
