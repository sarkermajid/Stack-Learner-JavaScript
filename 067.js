// scoping function

// video dekha must needed.

function number(n){

    function three(){
        return n%3 == 0;
    }

    function five(){
        return n%5 == 0;
    }

    if( three() && five() ){

        console.log('3 and 5 both are divided by',n);

    }else{
        
        console.log(n,' is not divided by 3 and 5');
    }
}

number(15);