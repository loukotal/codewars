function titleCase(title, minorWords) {
    if (title.length === 0) {
        return "";
    }
    title = title.toLowerCase().split(" ");
    
    
    if (minorWords.length == 0) {
        minorWords = "";
        }
    minorWords = minorWords.toLowerCase().split(" ");
    
    
    title[0] = title[0].charAt(0).toUpperCase() + title[0].substring(1, title[0].length);
    for (var i = 1; i < title.length; i++) {
        title[i] = title[i].charAt(0).toUpperCase() + title[i].substring(1, title[i].length);
        
        
        
        for (var j = 0; j < minorWords.length; j++) {
           if (title[i].toLowerCase() === minorWords[j]) {
                title[i] = title[i].toLowerCase();
           }
        }
        
    }
    return title.join(" ");
    


    
}
console.log(titleCase("the quick the asd brown fox", " asd the"));

