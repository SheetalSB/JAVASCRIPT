// var a=12;
// let b=13;
// console.log(window.a);
// console.log(window.b);

// if(true)
// {
//     var c=13;
//     let d=34;
//     console.log(c);
//     console.log(d);
// }
// let e;
// console.log(e);
// console.log(c);
// console.log(d);


// var aa="global"
// let bb="script"
// if(true)
// {
//     var cc="global block"
//     let dd="block"
// }


// function test(){
//     var a=13;
//     let b=14;
//     console.log(a);
//     console.log(b);
// }
// test()

// console.log(a);
// console.log(b);

// function add()
// {
//     console.log(this);
// }
// add()

// let arr=()=>{
//     console.log(this);
// }
// arr()

// let myObj={
//     name1:"raj",
//     named:function()
//     {
//       console.log(this);
//     },
//     arrow:()=>{
//         console.log(this);
//     }
// }

// myObj.named()
// myObj.arrow()

let std1={
    name1:"preetham",
    id:123,
  
}
let std2={
    name1:"shashank",
    id:456
}
let std3={
    name1:"chakradhar",
    id:143
}
let std4={
    name1:"keerthana",
    id:286
}

function printId(bike,job){
    console.log(this.name1,this.id
        +"bike is "+bike+" job is"+job);
}

var name1="global"
var id="globbal 123"
printId("rx","mechanic")

printId.call(std1,"r15","DEVELOPER")
printId.apply(std1,["splendor","big DEVELOPER"])
// printId.call(std2)
// printId.call(std3)