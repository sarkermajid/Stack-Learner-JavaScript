// While loop

var i = 1;
while(i <= 10){
    console.log(i,'Sarker Majid');
    i++;
}

var isrunning = true;
while(isrunning){
    var rand = Math.floor(Math.random() * 10 + 1);
    if(rand == 9){
        console.log('Winner');
        isrunning = false;
    }else{
        console.log('You have got :',rand);
    }
}

var j = 0;
while(j <= 10){
    if(j%2==0){
        console.log(j)
    }
    j++;
}