let arr=["hello","world","javascript","otp","generate",123,true];
for (let value of arr){
    console.log(value)
}
console.log(arr.slice(2,4));
arr.unshift("new value");
console.log(arr);
arr.push("last value");
console.log(arr);
console.log(arr.indexOf("javascript"));
function generateHex(){
    /*let x=Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    console.log(x);*/
    let arr=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    let ans="#";
    for (let i=0;i<6;i++){
        ans += arr[Math.floor(Math.random() * 15)];
    }
    console.log(ans);
    document.body.style.backgroundColor=ans;
}
generateHex();
//implicit type conv
let result=10-"4";
console.log(result);
console.log(typeof result);
let result1="value is " + true;
console.log(result1);
console.log(typeof result1);
//explicit
let strnumber1="123";
let num1=Number(strnumber1);
console.log(num1,typeof num1);

let strnumber2="45.67";
let num2=parseFloat(strnumber2);
console.log(num2,typeof num2);
 
function add(a,b){
    return a+b;

}
let 
