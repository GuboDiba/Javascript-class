//given an array of numbers,search for the following target and return -1 if
// not found if else the index

function binary(arr,target){
    let leftIdex=0;
    let rightIndex=arr.length-1;
    console.log("left1",leftIdex);
    console.log("right1",rightIndex);
    
    while(leftIdex <= rightIndex){
        console.log("left2",leftIdex);
    console.log("right2",rightIndex);
    
        let middle=Math.floor((leftIdex+rightIndex)/2);
        if (arr[middle]===target){
            return middle;
        }
        else if(arr[middle ]> target){
            rightIndex=middle-1

        }
        else{
            leftIdex = middle+1 
        }
    }
    return -1;
}
let num =[1,3,6,8,9,56,89];
let target=9;
console.log(binary(num,target));