function accum(s) {
	// your code
    var result = "";
    for (var i = 0; i < s.length; i++) {
        result += s[i].toUpperCase();
        result += s[i].toLowerCase().repeat(i);
        if (i != s.length - 1) result += "-";

    }
    console.log(result);
    return result;
}
accum("EvidjUnokmM");
accum("wahsd");
