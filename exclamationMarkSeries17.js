function balance(left, right) {
    var leftCount = 0;
    var rightCount = 0;

    // solution from codewars by smile67, Sunflower_li
    // l = [...left].reduce((s,a) => s + (a=="?" ? 3:2),0);
    // console.log(l);
    // r = [...right].reduce((s,a) => s + (a=="?" ? 3:2),0);
    // console.log(r);

    for (var i = 0; i < left.length; i++) {
        if (left[i] === "!") leftCount += 2;
        else if (left[i] === "?") leftCount += 3;
    }

    for (var i = 0; i < right.length; i++) {
        if (right[i] === "!") rightCount += 2;
        else if (right[i] === "?") rightCount += 3;
    }
    if (leftCount > rightCount) return "Left";
    else if (rightCount > leftCount) return "Right";
    else return "Balance";
}

balance("!!???!????","??!!?!!!!!!!")
console.log(balance("!!???!????","??!!?!!!!!!!"));
