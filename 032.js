// Nasted loop

n = 10;
for(var i = 1; i <= n; i++){
    var result = '';
    for(var j = 1; j <= i; j++){
        result += j + '';
    }
    console.log(result);
}

m = 10;
for(var j = 1; j <= m; j++){
    var result2 = " ";
    for(var k = 1; k <= m; k++){
        result2 += "* ";
    }
    console.log(result2);
}