// Arithmatic opetator (+,-,*,/,%,++,--)

var a = 10;
var b = 3;
console.log(a%b);  // vag ses ber korar kaje use hoy, % eta k modulus operator bola hoy.

//increment
//pre incremental
//post incremental
var x = 10;
console.log(++x); // pre-incremental (agay add hobe)
var x1 = 5
console.log(x1++); // post-incremantal (pore add hobe)
console.log(x1);

var y = 20;
console.log(--y); // pre decremental (agay minus hobe)

var y1 = 15;
console.log(y1--); // post decremantal (pore minus hobe)
console.log(y1);

// assignment operator

var numberOne = 10;
var numberTwo = 20;

numberOne += numberTwo;
console.log(numberOne);

numberOne -= numberTwo;
console.log(numberOne);

numberOne *= numberTwo;
console.log(numberOne);

numberOne /= numberTwo;
console.log(numberOne);

numberOne %= numberTwo;
console.log(numberOne);

// comparison operator

var numberX = 50;
var numberY = 60;

console.log(numberX == numberY);
console.log(numberX != numberY);
console.log(numberX > numberY);
console.log(numberX < numberY);
console.log(numberX <= numberY);
console.log(numberX >= numberY);

var numberA = 50;
var numberB = '50';
console.log(numberA === numberB); // data type + value check kore.
console.log(numberA !== numberB);

console.log(typeof('majid'));
console.log(typeof(8.9));
console.log(typeof(15));
