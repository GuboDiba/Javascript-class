let success = false;
let promise=new Promise((resolve,reject)=>{
    if(success){
        setTimeout(()=>{resolve("i succeeded")},5000)
        
    }else(
        setTimeout(()=>{ reject("i am still looking for a job")},5000)
       
    )
})
.then(()=>{console.log("i will work hard");})
.catch(()=>{console.log("i will upskill");})
.finally(()=>{console.log("i am worthy");})
console.log({promise});

async function student() {
    let result=await promise;
    console.log({result});
}
student()