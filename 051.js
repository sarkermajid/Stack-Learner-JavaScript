// object literal vs object constructor

var obj = {
    x : 10,
    y : 20
}
console.log(typeof(obj));
console.log(obj.x);
console.log(obj.y);

obj.y=30;
console.log(obj);

obj.z = 50;
console.log(obj);

// object constructor

var obj2 = Object();
obj2.a = 30;
obj2.b = 50;
obj2.c = 80;
console.log(obj2);

var obj3 = new Object();
obj3.m = 100;
console.log(obj3);