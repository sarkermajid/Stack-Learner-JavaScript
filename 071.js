// Higher order funciton

function add(a,b){
    return a+b;
}

function manipulate(a,b,func){
   var c = a + b;
   var d = a - b;

   function multiply(){
       var m = func(a,b);
       return c*d*m;
   }

   return multiply;
}

var multiplication = manipulate(3,4,add);
console.log(multiplication());


// second time 


function sum(x,y){
    return x+y;
}

function manipulateOne(x,y,funcOne){
    var a = x+y;
    var b = x-y;

    function multiplyOne(){
        var c = funcOne(x,y);
        return a*b*c;
    }

    return multiplyOne;

}

var finalMultiply = manipulateOne(3,4,sum);
console.log(finalMultiply());

// third time

function sumTwo(a,b){
    return a+b;
}

function manipulateTwo(a,b,funcTwo){
    var x = a + b;
    var y = a - b;

    function multiplyTwo(){
        var z = funcTwo(a,b);
        return x*y*z;
    }

    return multiplyTwo;

}

var finalMultiplyTow = manipulateTwo(3,4,sumTwo);
console.log(finalMultiplyTow());