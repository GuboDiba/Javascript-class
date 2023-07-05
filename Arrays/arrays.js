let items=[2,3,"sweet",false,45];
//Array Method
items.push(62);
console.log(items); //push add item at the end of an array
items.unshift(6.5);
console.log(items);  //unshift add item at the start of an array
items.pop();
console.log(items);  //remove the items at the end of an array
items.shift();
console.log(items);  //remove an item at start of an array

let num=[1,9,34,12,25,30];
let sorted=num.sort((a,b)=>a-b); //arrane the array in ascending order
console.log(sorted);

//given an array of x element return an array with each element in x multiplied by 2

const result=num.map(
    (item)=>{
        return item*2
    }
)
console.log(result);

let newArray=[]
const result2=num.forEach((item,index)=>{newArray.push(item*2)});
console.log(newArray);
console.log({result2});

let d=[1,2,3];
let f=[4,5,6];

let joined1=d.concat(f);
console.log({joined1});

//destructuring
let c =(1,40, ...m, ...n);
console.log({c});

let [z,x, ...e]=c;
console.log({z});
console.log({x});
console.log({e});








