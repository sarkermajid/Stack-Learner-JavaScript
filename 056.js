var obj1 = {
    a : 10,
    b : 50,
    c : 100
}

var obj2 = {
    a : 10,
    b : 50,
    c : 100
}

console.log(obj1 == obj2);

// aivabe 2 ta object compare kora jay nah Json use kore korte hoy.

console.log(JSON.stringify(obj1) == JSON.stringify(obj2));

// ekn kaj koreche.