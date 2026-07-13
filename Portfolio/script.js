
const words = [

"Cybersecurity Enthusiast",

"Web Security Learner",

"OSINT Explorer",

"Open Source Builder",

"Computer Science Student"

];

let i = 0;

let j = 0;

let current = "";

let isDeleting = false;

const typing = document.getElementById("typing");

function type(){

current = words[i];

if(!isDeleting){

typing.textContent=current.substring(0,j++);

if(j>current.length){

isDeleting=true;

setTimeout(type,1200);

return;

}

}else{

typing.textContent=current.substring(0,j--);

if(j===0){

isDeleting=false;

i=(i+1)%words.length;

}

}

setTimeout(type,isDeleting?40:90);

}

type();
