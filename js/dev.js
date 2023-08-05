const a = ["banana", "orange", "apple", "mango"];
const b = a.pop();
//document.getElementById("first").innerHTML = a;
console.log(a);

//shit
//const c= ["banana", "orange", "apple", "mango"];

const us= ["banana", "orange", "apple", "mango"];
 const ji = us.push("neapple");
 console.log(us,"us");

 //date method,year,month,hour(0)
 let c = new Date();
 document.getElementById("first1").innerHTML = c.getDate();

 let d = new Date();
 document.getElementById("first2").innerHTML = d.toString();

 let e = new Date();
 document.getElementById("first3").innerHTML = e.toUTCString();

 let f = new Date();
 document.getElementById("first4").innerHTML = f.toDateString();

 let g = new Date();
 document.getElementById("first4").innerHTML = g.toISOString();

 const h = new Date();
 const i = h.setFullYear(2023-28-0);
 document.getElementById("first5").innerHTML = h;

 /*round
 console.log(Math.round(4.2));
 // cell
 document.getElementById("first5").innerHTML =Math.ceil(4.2);
//floor
Math.floor(4.9); return 4
Math.floor(4.7);return 4
Math.floor(4.4); 4
Math.floor(4.2); 4
Math.floor(-4.2); -5

//trune
Math.trunc(4.9);4
Math.trunc(4.7);4
Math.trunc(4.4);4
Math.trunc(4.2);4
Math.trunc(-4.2);-4

//sign
Math.sign(-4);-1
Math.sign(0);0
Math.sign(4);1*/


//pow
document.getElementById("first5").innerHTML = Math.pow(2,3);
//sqrt
document.getElementById("first6").innerHTML = Math.sqrt(64);
//abs
document.getElementById("first7").innerHTML = Math.abs(-4);

//max 
document.getElementById("first8").innerHTML = Math.max(10,20,100);
//randow

