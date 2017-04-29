//Did not solve this one. Was curious of the solution.
function cache(func) {
    var result = {};
    return function () {
        var key = JSON.stringify(arguments); 
            if (!(key in result)) {
                result[key] = func.apply(null,arguments);
            }
        return result[key];
    };
}

