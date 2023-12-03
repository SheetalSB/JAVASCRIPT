//dom method
//1.get elementbyID---it return an object which element having an same id as well as value as an document object
//it is used to target single html element

let elementId=document.getElementById("demo");
console.log(elementId, typeof elementId);

//innerHTML (property of dom)
//which displays the text by taking the behaviour of specific tag
//elementId.innerHTML="<h1>i want to change</h1>";

//innertext (property of dom)
//it displays text but does not take behaviour of tag
//elementId.innerText="<h1>i too want to change</h1>";
elementId.innerText="Web Technology";

//styling the html element
ElementId.style.color="red";
elementId.style.fontsize="50px";

let getElementById1=document.getElementById("text");
console.log(elementId1, typeof elementId1);

