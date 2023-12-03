//Array-Jt is an homogenous and heterogenous type of data
let myArray=[
    1,
    "string",
    true,
    false,
    function a() {},
    {},
    null,
    undefined,
    10n
];
console.log(myArray);



let b={};
let array=[];
console.log(array);
console.log(typeof array);

//how to check array
console.log(Array.isArray(array));//true
console.log(Array.isArray(b));//false


console.log(array instanceof Array);//true
console.log(b instanceof Array);//false

//how to add an values to an array
array[0]=100;
array[48]=true;
array[100]="thursday";
console.log(array);

let boost=[100,200,300];
console.log((boost[3]=400));

//how to check the length of an array
console.log((boost[4]=500));
console.log(boost);
console.log(boost.length);

//how to fetch an array value
console.log(boost[2]);

//how to update an existing  array value
console.log((boost[3]="four hundred"));
console.log(boost);

//how to delete the valueof an array
console.log(delete boost[0]);
console.log(boost);


//ARRAY METHODS
//1.Push

let myPet=["gandhi","waste","fellow"];
console.log(myPet);

//push
//to add the value to behind of an existing array
//push effects the original length of an array
// pushArray=myPet.push("definitely");
// console.log(pushArray);
// console.log(myPet);

//2.Unshift
//Unshift is adding the values from the beginning of Array
//Unshift effects the Original length of an array
// let unshift=myPet.unshift(840);
// console.log(unshift);
// console.log(myPet);

//3.Pop
//Pop method removes an value from the end of an array
//Pop does not accepts any arguments
//Pop effects the original length of an array
// let popAry-myPet.pop();
// console.log(popAry);
// console.log(myPet);

//4.Shift
//Shift method will remove an value from the beginning of an array
//Shift does not accepts any arguments
//Shift effects the original length of an array
// let shiftAry=myPet.shift();
// console.log(shiftAry);
// console.log(myPet);

//5.Slice
//Slice is used to extract an piece of value from an existing value
//It accepts one argument or two arguments,In that it includes first one(arg) and excludes second one(arg)
//It does not effect original length of an array 
//minus value in an argument indicates that values from the end
// let sliceAry=myPet.slice(1,2);
// let sliceAry1=myPet.slice(-3,-1)
// // console.log(sliceAry);
// console.log(sliceAry1);
// console.log(myPet);

//It creates an Shallow copy from an array and we can create n no.of shallow copies and manipulate
// let shallowCopy=myPet.slice();
// console.log(shallowCopy);
// console.log(myPet);

//6.Splice
//It accepts one argument or two arguments,In that it includes first one(arg) and excludes second one(arg) or three arguments(first one index,second-how many values want to remove from that index,third-elements to add from the removes element index)
//It effects the original length of an array
// let spliceAry=myPet.splice(0,1,"hello");//At the 0th index remove 1 value and the add hello there(hello,Waste,fellow)
// console.log(spliceAry);
// console.log(myPet);


//let array11=[30,60,90,120,150,180];
// let splice=array11.splice(0,3); When it is 0 in the first argument it excludes last argument
// let splice1=array11.splice(1,4); When it is greater than 0 in the first argument it includes last argument
// console.log(splice1);  
// console.log(splice);
// console.log(array11);

//If splice has three arguments-last one indicates index includes,2nd one -how many elements wants to be removed element index ,3rd one-from that removed element index how many elements want to add
// let splice3=array11.splice[1,3,2,4,6,8];
// console.log(splice3);
// console.log(array11);

//7.Find
//let array9=[10,20,9,51,800,556];

//find method in javascript returns the first array element which satisfies the conditon
//find is an hof
// let findA=array9.find(function (ele) {
//     return ele>50 && ele<100
// });
// console.log(findA);

//8.findIndex
//findIndex in an JS will return the index of an array element which satisfies the condition
// let findIndex=array9.findIndex(function(index) {
//     return index <30;
// })
// console.log(index);


//9.Flat
//Flat is JS will nested array into an single array
// let nest=[100,[200,900,[500,[125]],70]];
// let flat=nest.flat(3);
// console.log(flat);

//10.Concat
//concat in JS will add or merge more than two arrays
// let str=["abc","abd"];
// let concatA=array11.concat(array9,nest,str);
// console.log(concatA);

//11.JOIN
// let result=["javascript","is","beautiful","language"];
// let join=result.join(".");
// console.log(join);
// console.log(typeof join);

// let rev=[30,50,250];
// let str1=["aa","cc"];
// let res=str1.reverse();
// console.log(res);

//Sort
//let ss=["cbc","bca","abc"];

let number=[22,40,540,100,11,10,230];
//return -1: don't swap
//return 1:Swap
//return 0:Current place

let sort=number.sort(function(cur,next){
    if(cur<next){
        return 1;
    }else{
        return -1;
    }
});
let sort1=number.sort(function(cur,next){
    if(cur<next){
        return -1;
    }else{
        return 1;
    }
});
console.log(sort1);

//Ascending using arrow function
let sort2=number.sort((cur,next)=> cur-next);
console.log(sort2);

//Descending using arrow function
let sort3=number.sort((cur,next)=> cur-next);
console.log(sort3);