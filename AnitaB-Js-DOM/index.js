document.getElementsByClassName("container").item(0)
document.getElementById(`container`).style.color=`red`;
document.getElementById(`container`).style.background=`#e2e2e2`;

document.getElementById(`text`).innerHTML=`My name is Gubo and i am 50 years old`

let child=document.getElementById(`container`).childNodes;
console.log({child});

let children=document.getElementById(`container`).children;
console.log({children});

let p=document.createElement(`p`);
p.innerHTML=`i am learning javascript`
document.getElementById(`container`).appendChild(p);
p.setAttribute(`class`,`paragraph`);
p.setAttribute(`id`,`paragraph`)
document.getElementById(`paragraph`).style.color=`green`

// Eventlisterner
let button=document.getElementById(`button`);
button.addEventListener(`click`,function () {
    button.innerHTML=`Clicked!!`
    button.style.backgroundColor=`#19ba96`;
    button.style.padding=`10px`;
    button.style.borderRadius=`5px`;
    button.style.border=`none`
    
})
