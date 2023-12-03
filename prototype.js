let obj={ /////ajaks, async and awit
    fruit:'apple'
};

let myObj={
    veg:"cucumber",
    color: "green"
};
let yourObj={
    festival:"kannadaRajyotsava",
};
yourObj.__proto__={
    flower:"lotus"
};
console.log(yourObj);

console.log(myObj);
console.log(obj);

console.log(obj.fruit);

obj.__proto__=myObj; //prototye of object is myObj
myObj.__proto__=yourObj;

console.log(obj.veg);
console.log(obj.color);


console.log(obj.festival);
console.log(myObj.festival);


//DOM,async,promise,storage,datatype,typecatsing,gec,hoisting,