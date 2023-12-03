// //const  {log} 


// function demo()
// {
//     return "hello";
// }
// let d=demo();
// console.log(d)


//the use of generator function
//to make efficient to iterate 
//to make asynchronous




//the syntex of generator function
// function test
// {
//     console.log("this is normal function");
// }
// test()

//generator function is an function which returns an generator object that is stored in one veriable

//the syntax of generator funcion
// function* generatorFun()
// {
//     console.log("this is generator function")
// }

// let generator= generatorFun()
// console.log( generator);


function* generatorFun()
{
    //yield is a keyword.
  yield 32;
  yield "hello"
  yield "46"
  yield "gm"
  yield 59;
  yield 90;
  return "cricket"
  

}
let generator=generatorFun()
console.log(generator.next());
console.log(generator);
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator);


//after return if we take yield then value will not print.
//after return value if we take yield then it is true.
//when take next then only next value will print


//generator function will produce new keyword that is  yield
//yield keyword will holds the values of generaor function
//the yield values gets executed when the next function calls
//the number of yield is equal to the number of next function calls  
//generator function returns two properties : value and done
//the value property will hold the yield value 
//the done property will tells that generator function status 
//if the done is false the generator function will not at old
//if generator function is true the generator function will get overed
//the return keyword tells that generstor function will get over after that if any statements are there all represents done value as true

//print the values of generator by using for of
for(let name of generator)
{
    console.log(name)
}


//what is generator function ? why it is used ? syntax of GF and how it works 