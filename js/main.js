

// create function

/*function fullNanme (first_name, last_name) {
    return first_name + '-' + last_name
}

const x = jogKora("Usha", "Akter")

console.log(x)*/

//Number
let w= 10;
let v= 20;
let b= "the result is"+w+v;
console.log(b);

let a,c,d;
a = 100;
c = "10";
d = a/c;
console.log(d);
let n=0xFF;
console.log(n);

//to string method

let firstNumber = 123;
 let x = firstNumber.toString();
console.log(x);

//exponential method()
let y = 9.656;
console.log(y.toExponential(3));

//toFixed;
let z = 9.56;
let r = z.toFixed(4);
console.log(r);

//toPrecision method
let e = 10.324565;
console.log(e.toPrecision(6));

//ValueOf
let f = 100+23;
let g = f.valueOf();
console.log(g,"valueof");

//Number Mathod
//console.log(number("10"));

//parseInt method
//console.log(parseInt("10 20 30"));

//Positive infinity
let h = -1/0;
console.log(h);

//not a number
let j = Number.NaN;
console.log(j);

//Array
const n2 = ["saab", "volvo","BMW"];
n2[0] ="opel" 
//document.getElementById("2").innerHTML = n2;
console.log(n2);

const fruits = ["banana", "orange", "apple", "mango"];
fruits[4] = "pineapple";
console.log(fruits[fruits.length -1]);
const u = ["banana", "orange", "apple", "mango"];
const ccc =  u.push("neapple");
 console.log(ccc);

 const k = ["banana", "mango"];
  console.log(k[k.lenght]= "papaya") ;
  /*array fis array
 const j = ["apple", "banana"];
 const n3 =Array.isArray(j);
console.log(n3);*/

//array method
const n4 = ["banana", "orange", "mango"]
document.getElementById("3").innerHTML = n4.join(" ** ");

const n5 = ["banana", "orange", "apple"];
const n6 = n5.pop();
console.log(n5);
//shift

const nd = ["banana", "orange", "apple", "mango"];
  nd[0] = "vaaav"
document.getElementById("4").innerHTML = nd;

//delet elements
const gd = ["banana", "orange", "apple", "mango"];
let hd = delete gd[3];
document.getElementById("8").innerHTML = hd;

//splicing an array
const fd = ["banana", "orange", "apple", "mango"];
fd.splice(1,0,"lemon", "kiwi");
document.getElementById("9").innerHTML = fd;

//concat
let jh = "My favorite game";
//let hj = "football";
let hg = jh.concat("", "football");
console.log(hg);


let text1="hello";
let text2="world";
let gf= text1.concat("",text2);
console.log(gf);

//replace
let hh= 'My friend lamiya'
 let dd = hh.replace("lamiya", " samiya");

console.log(dd);

let df = "you";
let en = `i hate ${df} jdhdl`;
console.log(en);

//sort
const dk = ["banana", "orange", "apple", "mango"];
let ha = dk.sort();
document.getElementById("10").innerHTML = ha;

//reverse
const as = ["banana", "orange", "apple", "mango"];
const ff = as.reverse();
document.getElementById("11").innerHTML = ff;

// point sort
const points = [40,50,60,70,1,2,3,5,6,8,10,11];

 points.sort(function(a,b){

    return(a-b);
    
});
console.log(points);

//array sort
const car = [
    {type:"volvo", year: 2016},
    {type:"saab", year: 2001},
    {type:"BMW", year: 2010},
];
car.sort(function(a,b){
    return(a.year - b.year);

});
//document.getElementById("first").innerHTML = car;
console.log(car);

//each
const numbers = [45,4,9,16,25];
function myFunction(value,index,array){

}
let gh = numbers.forEach(myFunction);
console.log(gh);

//map
const number = [45,4,9,16,25];
function myFunction(value){
    return(value*2);
}
const kk = number.map(myFunction);
console.log(kk);


const us= ["banana", "orange", "apple", "mango"];
 const ji = us.push("neapple");
 console.log(us,"us");

 //filter
 const h1 =[45,4,9,16,25];
 function myFunction(value){
    return(value>10);
 }
 const h2 = h1.filter(myFunction);
 console.log()
 

//map
const g1 = [45,5,8,6,5];
function myFunction(value){
    return (value*2)
}
 const g2 = g1.map(myFunction);
 document.getElementById("12").innerHTML = g2;

 /*filter find
 const g3 = [10,20,2,6,85,6,5];
 function myFunction(value){
    return value > 10;
 }
 const g4 = g3.filter(myFunction);
 console.log(g4,"filter");

 reduce     ------right
 const g5 = [10,20,2,6,85,6,5];
function myFunction(total,value){
    return total + value;
}
const g6 = g5.reduce(myFunction);
console.log(g6);*/

//reduce
const g7 = [11,12,55,47,58,5];
function myFunction(total,value){
    return total + value;
}
const g8 = g7.reduceRight(myFunction);
console.log(g8);

//every some

let x1 = new Date("january","February","March");
const months=["january","February","March"];
//console.log(x1.toUTCString);
document.getElementById("first12").innerHTML = months[x1.getMonth(2)];

const hp = ["banana", "orange", "apple", "mango"];
const go =hp.includes("mango");
console.log(go);

//><
let nn = 10;
console.log(nn>9);

//sin cos
let sin = 90;
document.getElementById("demo").innerHTML = 90*Math.PI/180;

//array (forloop in)
const kg =[4,5,6,1,2,3];
for(let y in kg){
    console.log
}

//new Set
const letter =new Set(["a","b","c"]);
document.getElementById("demo1").innerHTML= letter.size;


const letters =new Set();
letters.add("g");
letters.add("h");
document.getElementById("demo2").innerHTML = letters;


const lett = new Set(["a","b","c"]);
let text = "";
lett.forEach (function(value) {
  text += value + "<br>";
})

document.getElementById("demo3").innerHTML = text;

//maps
const food = new Map([
   ["apples",500],
    ["banana",550]
]);
//document.getElementById("demo4").innerHTML = food.get("apples");
console.log(food.get("banana"));

//maps set ()
const favorite = new Map();
favorite.set("orange",100);
favorite.set("lemon",500);

favorite.delete("lemon");
console.log(favorite.has("lemon"));

//constructor property
document.getElementById("demo5").innerHTML = 
  "john".constructor +"<br>"+
  (3.14).constructor+"<br>"+
  false.constructor + "<br>" +
  [1,2,3,4].constructor + "<br>" +
  {name:'john', age:34}.constructor + "<br>" +
  new Date().constructor + "<br>" +
  function () {}.constructor;



  console.log(Number("mim"));
  
  //index of
  const u2 =["arif","rima","runa","riya"];
  //document.getElementById("demo6").innerHTML = u2.indexOf("runa");
  document.getElementById("demo6").innerHTML = u2.length;
  //includes 
  const u3 =["arif","rima","runa","riya"];
  document.getElementById("demo7").innerHTML = u3.includes("ripa");

  //parsefloar,parseInt
  //let u4 = 3.545;
  //document.getElementsById("demo8").innerHTML = parseInt("3.545");
  console.log(parseInt("3.32"));

  //round tofixed
  let u5 = 40.5;
  document.getElementById("demo9").innerHTML = u5.toFixed();

  // toprecision
  let u6 = 10.2525879;
  document.getElementById("demo10").innerHTML = u6.toPrecision("7");

  // bainary
  let u7 = 5;
  document.getElementById("demo11").innerHTML = u7.toString(2);

  // bitwise
  let u8,u9;
  u8 = 5;
  u9 = 1;
  let result = u8 & u9;
  document.getElementById("demo12").innerHTML = result.toString(vc       );

  let first10 = 5;
  let first11 = 1;
  let ns = first10 | first11;
  document.getElementById("demo13").innerHTML = ns.toString();
