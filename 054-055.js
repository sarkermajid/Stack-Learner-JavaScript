var obj = {
    a : 10,
    b : 20,
    c : 30,
    d : 40,
    e : 50
}

obj['d'] = 80;
console.log(obj);       // using array notation update value.

obj.a = 100;
console.log(obj);       // using dot notation update value.

obj.f = 200;
console.log(obj);       // using dot notation insert new value.

delete obj.f;
console.log(obj);       // remove a property from obj using delete method.