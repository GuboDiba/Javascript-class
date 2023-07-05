function divideArray(arr){
    if(arr.length <= 1){
        return arr;
    }
    let middle =Math.floor(arr.length/2);
    let left =arr.slice(0,middle);
    let right =arr.slice(middle);
    console.log({left});
    console.log({right});
    return sortedArray(divideArray(left),divideArray(right))
}
function sortedArray(left,right){
    let emptyArray = [];
    while(left.length && right.length){
        if(right[0] <left[0]){
            emptyArray.push(right.shift());
        }else{
            emptyArray.push(left.shift());
        }
    }
    console.log({emptyArray});
    return[...emptyArray,...left,...right]
}
let arr=[3,10,2,26,15,11,4];
console.log(divideArray(arr));