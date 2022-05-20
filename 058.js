var object = {
    a : 100,
    b : 200,
    c : 300
}

console.log(Object.keys(object));
console.log(Object.values(object));
console.log(Object.entries(object));   // two dimentional array r mto result dey.

// 49 number video er mto eta o same hobe ekta object theke arekta copy kora hoise.. kintu man change korle 2 tar value change hobe na.

var object2 = Object.assign({}, object);
object2.a = 500;
console.log(object);
console.log(object2);