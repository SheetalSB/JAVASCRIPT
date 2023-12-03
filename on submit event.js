// let btn=document.querySelector('form')
// btn.addEventListener('submit',()=>{
// let idName=document.getElementsById('name');
// let pass=document.getElementsById('pass');
// let mail=document.getElementsById('mail');
// //e.preventDefault();
// console.log(idName, pass, mail);
// })

//preventDefault-----normally when we submit the form data has to go to data base in order to prevent the data to go to some where else we need 
//prevent default method to show in the user interface 
//it is method which prevents the clients data to go to the server and displays in the user interface


let btn=document.querySelector('button');
btn.addEventListener('click',()=>{
let idName=document.getElementById('name').value;
let pass=document.getElementById('pass').value;
let div=document.querySelector('div');
div.innerText=`${idName} and ${pass}`;
div.style.color="red";
div.style.fontsize="50px";
})
