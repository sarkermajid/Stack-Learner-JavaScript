// for loops

for(var n=0; n<10; n+=2){
    console.log(n,"Sarker Majid");
}

for(var i = 0; i <= 20; i++){
    if(i%2==0){
        console.log(i)
    }
}

var sum = 0;
for(var j = 1; j <= 10; j++){
    sum += j;
    console.log(sum)
}

var sum1 = 0
for(var a = 0; a <= 100; a++){
    if(a%2==0){
        console.log(sum1 + " + " + a + ' = ' + (sum1+a));
        sum1 += a;
    }
}
console.log('Result = ',sum1);