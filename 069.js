// What is pure function ?

//*** It Returns the same result if given the same arguments.
//*** It does not cause any observale side effects.

function sqr(n){
    return n*n;
}

console.log(sqr(3));
console.log(sqr(3));
console.log(sqr(3));


// side effect function -->

var point = {
    x : 10,
    y : 20
}

function printPoint(point){
    point.x = 100,
    point.y = 200

    console.log(point)
}

printPoint(point);
console.log(point);

// point object er value change hoye gese... etar side effect ase tai amn typer function gulo pure function nah.