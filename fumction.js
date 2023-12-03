// //1.Anonymous Function ---- a function which does not have function name.
// // -------------------------it cannt execute anonymous function bcz it does not have function name.
// //--------------------------to execute this anonymous function 1.named function 2. function with expression, IIFE 

// // syntax for anonymous function
// // function{

// // }
// // ()

// //2. named function-------a function which a function name is called as named function.

//  function demo(){
//     console.log("hello this is named function");
// } 
// demo();
// demo();

// //passing an arguments for the function
// //happy is argument and name is an parameter
// function test(name)
// {
//     alert(name+"ganesh chaturthy");
// }
// test("happy");

// //function with expression
// let a=function()
// {
//   console.log("this is function with expression function");
// };
// a();
// console.log(a()); //undefined bcz of log statements


// //3.first class function------whwn we are using function with expression, we are passing function as an value for the expression that value we call it as first class function.

// //4.arrow function-------to reduce the syntax we go for arrow function.
// // ()=>(we call it as fat arrow)
// let c=(a,d)=> 
// {
//   console.log(a+d);
// };
// c(10,77);

// let f=()=>{
    
// }

//first rule
let ArrFun = () =>
console.log("hello");
ArrFun();

//second rule
let ArrFun1 = () => {
  let festivalG = "gannu";
  console.log(festivalG);
};
ArrFun1();

//third rule
let ArrFun2 = () => {
  let day = "monday";
  return day;
}
alert(ArrFun2());
console.log(ArrFun2);

//fourth rule
//let ArrFun3=()=>{
  //console.log(comngDay);
//};
//console.log(ArrFun3()); //undefined bcz of two log statements
//ArrFun3();

