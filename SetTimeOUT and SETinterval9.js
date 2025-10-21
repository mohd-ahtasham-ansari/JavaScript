//Arrow Function in JavaScript
sum = (a,b) => {
 return  a+b;
}
console.log(sum(5,6));

// Set timeout and Set interval in JavaScript
logkaro= ()=>{
    document.querySelector('.container').innerHTML+="<b> set timeout fired</b>";
    console.log("Hello World");
}
setTimeout(logkaro, 2000); // after 2 seconds it will print Hello World