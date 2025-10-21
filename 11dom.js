let div = document.querySelector('div');
console.log(div);

let id = div.getAttribute ('id');
console.log(id);

let para= document.querySelector('p');
console.log(para);

console.log(para.setAttribute('class','new_class'));

div.style.backgroundColor = 'red';
div.style.border = '5px solid black';
div.style.height = '150px';
div.style.width = '150px';

let newelement = document.createElement('button');
newelement.innerText= 'hello bacho';
 document.body.appendChild(newelement);

 newelement.style.height = '50px';
 newelement.style.width = '100px';
 newelement.style.backgroundColor = 'green';    
    newelement.style.color = 'white';
    newelement.style.border = '2px solid black';