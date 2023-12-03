// let myArray = [
//     1,
//     "string",
//     true,
//     false,
//     function a() {},
//     {},
//     null,
//     undefined,
//     100n,
// ];
// console.log(myArray);

// let b={};
// let array = [];
// console.log(array);
// console.log(typeof array);

// //how to check the array
// console.log(Array.isArray(array)); //true
// console.log(Array.isArray(b)); //false

// console.log(array instanceof Array);//true
// console.log(b instanceof Array);//false

// //how to add an values to an array
// array[0] = 100;
// array[43] = 155;
// array[100] = "thrusday";
// console.log(array);


// let boost=[100,200,300]
// console.log(boost[3]=500);


// //how to check the length of an array
// console.log((boost[4]=500));
// console.log(boost.length);
// console.log(boost);

// //how to fetch array value
// console.log(boost[1]); 


// //how to update the value
// console.log((boost[3]="four humdrade"));
// console.log(boost);

// //how to delete an array value
// console.log(delete boost[0]);
// console.log(boost);




// //how to update an existing array value



let array11=[30, 60, 90, 120, 150, 180 ]
// let splice = arrray11.splice(0,3);     when it is 0 in the first arguments it excludes last arguments 
// let splice1 = arrray11.splice(1,4);  when it is greater than 0 in the first arguments it includes last arguments
// console.log(splice1);
// console.log(splice1);
// console.log(splice11);

//if splice has three argumnets- 1st one includes indexedDB, 2nd one how many elements wants remove event listener, 3rd- from that removed 
   //element index how many elements want to addEventListener
let splice3 = array11.splice(1, 3, 2, 4, 6, 8);
console.log(splice3);
console.log(array11);

//find
let array9 = [100, 200, 90, 45, 800, 88];

//find method in JS returns the first array element which satisfies the condition 
//find is an higher order function(hof)
// let findA = array9.fund(function (ele) {
//     return ele > 50 && ele < 100;
// });
// console.log(findA);

// //findIndex
// //findIndex is an js will return the index of an array element which satisfies the condition 
// let findIndex = array9.findIndex(function (index) {
//     return index < 30;
// });
// console.log(findIndex);

//flat
//flat in javascript will nested array into an single array 
let nest=[100, [200, 990,[540, [125]], 70]]
let flat=nest.flat(3);
console.log(flat);


//concat
//concat in JS will add or merge more than two arrays
let str = ["abc" , "abd"]
let cancatA = array11.concat(array9, nest, str);
console.log(cancatA);
//typeof keyword which type of datatype holds
//join array -- array to string
let result = ["JS", "is", "beautiful", "language"];
let join = result.join("-");
console.log(join);
console.log(typeof join);

let rev=[30,40,50];
let str1=["aa", "bb", "cc"];
let res = str1.reverse();
console.log(res);

//sort
let ss=["cbc", "bca", "abc"];
let numbers=[22, 40, 540, 100, 10, 230];

//return -1 : dont swap;
// return 1 : swap;
//return 0 : current place
//assending 
let sort=numbers.sort(function(cur, next)
{
    if ( cur < next){
        return 1;
    } else {
        return -1;
    }
});


//descending
let sort1 = numbers.sort(function (cur, next)
{
    if ( cur < next){
        return -1;
    } else {
        return 1;
    }
});
console.log(sort1);

//assending using arrow function
let sort2 = numbers.sort((cur, next) => cur - next );
console.log(sort2);

//decending using arrow function
let sort3 = numbers.sort((cur, next) => next - cur );
console.log(sort3);




//some 
//some method in js will return true when some elements of an array will satisfies the given condition 
let number=[330, 440, 110, 550]
let some=number.some(function(ele){
    return ele > 500;
});
console.log(some);



//every array method in js will true when every element in an array will satisfies the condition
let every=number.every(function(ele){
    return ele > 500;
});
console.log(every);



//map,filter reduce-------------interview point of question
//data transformation methods

//map----map is used to loop an given array to a new array with transformed data
let birthYear=[1990, 2000, 2001, 1998, 1999, 2002];
let map = birthYear.map(function ( ele){
    return 2023 - ele;
});
console.log(map);

//of --- values   in-----index
for(let values in birthYear) {
    console.log(values);
}


let age=[]
for(let values of birthYear) {
let ages = 2023 - values;
age.push(ages);
}
    console.log(age);


//filter-----filter method in js filter the each array element with a given condition 
let transaction=[2000, -100, -40000, 1000];

let deposit =transaction.filter(function(ele){
    return ele > 0;
});
console.log(deposit);

let withdrawal =transaction.filter(function(ele){
    return ele < 0;
});
console.log(withdrawal);


//in arrow function
let w=transaction.filter(()=>{

})


//skip a value in a givn array ?


//reduce------------reduce method in js reduce or boils the given array elements into an single value
//the result value stored in accumulator 
let numb=[33, 20, 50, 66, 74];
let reduce=numb.reduce(function(acc,ele) //----accumulator , element
{
    return acc + ele;
}, 0);
console.log(reduce);



//how to destructure array 
//array methods and 
//why array how fetch, delete



console.log(2+5+5+"10"-5);
console.log(2*"2");
console.log(2 - "2");
console.log(2/"2");
console.log(2/"2"+true);
console.log(2/"2"+true+"3"-2-null);
console.log(null+null);
console.log(null+null+true-2);


let h=Number("10");
console.log(h, typeof h);

let h1=Number("ten");
console.log(h, typeof h);

//string to bigint ---- can't convert


//destructure an array-----
let newArray=[34, 44, 79,84,74];
let [a,b,c,d,e,f]=newArray;
console.log(a,b,c,d,e,f);

let details =["john", "fransisc", 34, "female"];
let[firstname, , age1, gender="female"]= details;
console.log(firstname);
//console.log(lastname);
console.log(age1);
console.log(gender);

function topResult()
{
    return["Shilpa", "Sheetal", "Srashti", "Sakshi", "XYZ"]
}
let[result3, result1, result2]=topResult();
console.log(result1, result2, result3);


//spread operator--spread operator in js extract all the array elemenys and displayed indivisualy, if we use 3 dot
let spread=[300,400,500,600,700,750]

//let fspread=[spread[0], spread[1], spread[2], spread[3],spread[4], spread[5]];
//console.log(fspread);
console.log(...spread);

let str10="hello";
console.log(...str10);

let numii =[1,2,3,4]
console.log(...numii);

function addition(p,q,r,s){
    return p + q + r + s;
}
console.log(numii);

let aa=[20,40,60];
let bb=[10,30,50] ;
let cc=[...aa,...bb];
console.log(cc);

console.log(...aa, ...bb);


//Rest operator(...)---it will collects remaining elements of an array
let rest=[90,100,60,70,80];
console.log(...rest);

let[a1,b1,...other]=rest;
console.log(a1,b1,other);



let nextLevel=[2,3,4,[50,60],[80,90[50,[80,85],105]]]
let [a0, b0, c0, d0, [e0, f0, [g0,h0, i0]]] = nextLevel;
console.log(a0);
console.log(b0);
console.log(c0);
console.log(d0);
console.log(e0);
console.log(f0);