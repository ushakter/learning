const a=["Simi","Niloy","Ripa","Arif"];
document.getElementById("name").innerHTML = a.sort();

const roll_number = [40,50,60,70,1,2,3,5,6,8,10,11];
roll_number.sort(function(a,b){
    return(a-b);
})
document.getElementById("name1").innerHTML = roll_number;

//leapYear
function isLeapYear(year){
    if((year % 400===0)|| ((year % 4===0) && (year % 100!==0))){
        console.log(`${year} is a leap year`);
    }
    else{
        console.log(`${year} is not a leap year`);
    }

}
isLeapYear(2028);

//const myArr = Array.from("ABCDEFG");
document.getElementById("name2").innerHTML = Array.from("ABCDEFG");

const point =[1,4,5,5,6,7,6,8,9,10,4];
const duplicates =point.filter(function(value,index,array){
    return array.indexOf(value)!== index
});
console.log(duplicates);

//><
let nn = 8;
console.log(nn<9);

//else if
let age= 17;
if(age>=18){
    console.log("true");
}
else{
    console.log("you are not adlt");
};

//ternary operator
  numbers = 18;
console.log(numbers>10?"true":"false");

//forloop (object)
const aa={ name:"johan", fullName:"johan islam",age: 40};
for(let x in aa){
    console.log(aa[x]);
}

//array
const y =["a","b","c"];
for(let i=0; i<y.length; i++){
    console.log(i);
}
console.log("hate");

//logical operator
let number1= 14;
if(number1>10 && number1==14){
    console.log("true number")
}
else{
    console.log("false");
}

//!not
let number2 = 6;
let number3 = 3;

document.getElementById("demo").innerHTML = 
!(x === y) + "<br>" +
!(x > y);

//loop
//const d5 =10;
let text="";
for(let i=0; i<10; i++){
    if(i===3){break;}
    text += "The number is " + i + "<br>";
    
}
console.log(text);