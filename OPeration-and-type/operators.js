// Assignment operators
let a=30;
console.log(a);

// Arithmetic operators
const num = 10;
const num2 = 30;
// Addition
console.log(num+num2);
// Substraction
console.log(num - num2);
console.log(num/num2);
console.log(num*num2);
console.log(num%num2);

let age =39;
let newAge=++age;
console.log({newAge})
--age;
console.log("age",age);

age+=5;
console.log("new age",age)

let powernum=num**num2;
console.log(powernum);

let b=10
let c="10"
let comparison=b==c
let notEqual=b!=c
console.log("Comparison",comparison);
console.log("Not Equal",notEqual);

let strictly=b===c;
console.log("strictly",strictly);

let strictlyNot=b!==c;
console.log({strictlyNot});

// Logical operators
const age1=25;
const age2=38;

if(age1 > age2 && num>num2){
    console.log(true)

}
else{
    console.log(false)
}
if(age1 > age2 || num<num2){
    console.log(true)

}
else{
    console.log(false)
}


