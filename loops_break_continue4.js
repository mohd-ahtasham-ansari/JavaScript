console.log("loops BREAK and CONTINUE in JAVASCRIPT");

var arr=[1,2,3,4,5,6,7,8,9];
for (var i=0; i<arr.length; i++){
    if(i==5){
        break
    }
    else{
        console.log(arr[i]);
    }
}
arr.forEach(function(element){
    console.log(element);
})

let j=0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

// do while loop
do{
    console.log(arr[j]);
    j++;
}while(j<arr.length);

//continue statement
for (var i=0; i<arr.length; i++){
    if(i==5){
        continue;
    }
    else{
        console.log(arr[i]);
    }
}