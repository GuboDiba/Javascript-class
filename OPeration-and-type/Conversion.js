let a="10";
// Implicit conversion
let b=a*10;
console.log(b);
console.log(typeof(b));
console.log(typeof(+a));
console.log(typeof(a*1));

// Explicit conversion
// use js methods
let c=Number(a);
console.log("c",typeof(c));

let d=String(c);
console.log("d",typeof(d));

let e= new Array(d);
console.log(e);

let f="45"
console.log(parseFloat(f));
console.log(typeof(f))