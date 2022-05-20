// infinity for loop

for(; ;){
    var rand = Math.round(Math.random() * 10);
    if(rand == 9){
        console.log('Winner');
        break;
    }else{
        console.log('The Number is : ',rand);
    }
}