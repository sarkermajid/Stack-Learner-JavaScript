// Break statement

while(true){
    var rand = Math.round(Math.random() * 10);
    if(rand == 9){
        console.log('Winner');
        break;
    }else{
        console.log('The Number is : ',rand);
    }
}

for(var i = 1; i <= 10; i++){
    if(i == 5){
        break;
    }else{
        console.log(i);
    }
}