console.log("functions IN JAVASCRIPT");

//DRY CONCEPT: DON'T REPEAT YOURSELF

//FUNCTIONS IN JAVASCRIPT
function avg(a,b){
    return (a+b)/2;
}
 c1 = avg(4,6);
 c2 = avg(14,16);
console.log(c1);
console.log(c2);

//conditionals in javascript
 var age =18;
 //if else condition
  if(age =>18){
    console.log("You are eligible to vote");
  }
  else{
    console.log("You are not eligible to vote");
  }

//if-else ladder
 var num = 0;   
  
    if(num > 0){        
        console.log("The number is positive");
    }

    else if(num < 0){
        console.log("The number is negative");
    }
    else{
        console.log("The number is zero");
    }

//nested if-else

    if(age >= 60){      
        console.log("You are a senior citizen and eligible to vote");
    }
    else{
        if(age >= 18){
            console.log("You are eligible to vote");
        }
        else{
            console.log("You are not eligible to vote");
        }
    }       
        
