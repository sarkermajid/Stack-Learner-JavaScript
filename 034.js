// Continue statement

for(var i = 1; i <= 10; i ++){
    if(i == 3 || i == 5){
        continue;
    }else if(i == 7 || i == 9){
        continue;
    }else{
        console.log(i);
    }
}