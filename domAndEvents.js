//DOM manipulation and Events
//click event using addEventListener
let elem =document.getElementById("click");
 console.log(elem);

let elem2 =document.getElementsByClassName("container");
console.log(elem2);

elem2[0].classList.add("bg-blue");
elem2[0].classList.add("text-color");

elem2[0].classList.remove("text-color");

console.log(elem2[0].innerHTML);
console.log(elem2[0].innerText);

tn = document.getElementsByTagName('div')
console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText=" this is a created para";
 
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText=" this is a created bold para";   
tn[0].replaceChild(createdElement2,createdElement);

//removeChild(element);

// tn[0].removeChild(createdElement2);

//Selecting using query
sel = document.querySelector('.container');
console.log(sel);
sel = document.querySelectorAll('.container');
console.log(sel);   

//Events in JavaScript
function clicked(){
    console.log("The button was clicked");
}

window.onload = function(){
    console.log("the document was loaded");
}
 firstContainer.addEventListener('click',function(){
    console.log("clicked on container");
});
    firstContainer.addEventListener('mouseover',function(){     
    console.log("mouse on container");
});

firstContainer.addEventListener('mouseout',function(){
    console.log("mouse out of container");      
})

firstContainer.addEventListener('mouseup',function(){
    console.log("mouse up when clicked on container");      
})
firstContainer.addEventListener('mousedown',function(){
    console.log("mouse down when clicked on container");      
})

