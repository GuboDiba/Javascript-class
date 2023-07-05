let success = false;
let promise=new Promise((resolve,reject)=>{
    if(success){
        resolve("i succeeded")
    }else(
        reject("i am still looking for a job")
    )
}).then(()=>{console.log("i will work hard");})
.catch(()=>{console.log("i will upskill");})
.finally(()=>{console.log("i am worthy");})
console.log({promise});
