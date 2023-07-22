/*function Date(){
    
}
date()

<button onclick="document.getElementById('demo1').innerHTML=Date()"> the time is </button>*/
let v="abcdefghijklmnopqr   stuvwxyx"
//console.log(v.length);
document.getElementById("demo1").innerHTML=v.length;

let a="People you //may// know";
document.getElementById("demo").innerHTML = a;
//console.log(a);

let b="We are the so-colled \"Vikings\" from the north";
document.getElementById("demo").innerHTML= b;
//console.log(b);

let x="hello"+
"world";
console.log(x);

/*let y= \
"hello world";
console.log(y);*/
let z= "we are the so colled \
from the north";
console.log(z);

let firstName=new String("Johan");
document.getElementById("demo2").innerHTML = typeof firstName;

let lastName="johan";
let n= new String ("johan");
console.log(lastName===n);

let str="apple, banana, kiwi";
document.getElementById("demo3").innerHTML= str.slice(10);

let l="I love deloar";
console.log(l.replace("deloar", "babu"));
//console.log(k);

let text50="you";
let sentence=`i love ${text50} Deloar`;
console.log(sentence);

let t


let text1="hello";
let text2="world";
let g= text1.concat("",text2);
console.log(g);

let text= "hello";
console.log(text.charAt(0));

let text12="hello world";
console.log(text12.charCodeAt(0));

let text13="hello";
console.log(text13[0]);

let text5="5";
console.log(text5.padStart(4,0));

let text20="hello world";
console.log(text20.split(""));