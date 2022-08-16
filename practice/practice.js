// var actors=[
//     {
//     "name"         : "Kamalhassan",
//     "birthday"     : "07-nov-1954",
//     "firstmovie"   : "kalathoorkannamma",
//     "totalmovies"  :  231,
//     "blockbuster"  :  "Vikram",
//     },
//     {
//     "name"         : "Vijay",
//     "birthday"     : "22-june-1974",
//     "firstmovie"   : "nalaiyatheerpu",
//     "totalmovies"  :  67,
//     "blockbuster"  :  "Bigil",
//     },
//     {
//     "name"         : "Rajinikanth",
//     "birthday"     : "12-dec-1950",
//     "firstmovie"   : "aboorvaragangal",
//     "totalmovies"  :  163,
//     "blockbuster"  :  "2.O",
//     },
//     {
//     "name"         : "Ajithkumar",
//     "birthday"     : "01-may-1971",
//     "firstmovie"   : "amaravathi",
//     "totalmovies"  :  59,
//     "blockbuster"  :  "Viswasam",
//     },
//     {
//     "name"         : "Surya",
//     "birthday"     : "17-july-1975",
//     "firstmovie"   : "nerukkuner",
//     "totalmovies"  :  49,
//     "blockbuster"   : "Singam-2",
//     },
//     {
//     "name"         : "Sivakarthikeyan",
//     "birthday"     : "17-feb-1985",
//     "firstmovie"   : "merina",
//     "totalmovies"  :  19,
//     "blockbuster"  :  "Don",
//     },
//     {
//     "name"         : "Vikram",
//     "birthday"     : "17-apr-1966",
//     "firstmovie"   : "enkadhalkanmani",
//     "totalmovies"  :  61,
//     "blockbuster"  :  "I",
//     },
//     {
//     "name"         : "Dhanush",
//     "birthday"     : "28-july-1983",
//     "firstmovie"   : "thulluvathoilamai",
//     "totalmovies"  :  46,
//     "blockbuster"  :  "Asuran",
//     },
//     {
//     "name"         : "Karthi",
//     "birthday"     : "25-may-1977",
//     "firstmovie"   : "paruthiveeran",
//     "totalmovies"  :  24,
//     "blockbuster"  :  "Kaithi"
//     },
//     {
//     "name"         : "Vijaysethupathy",
//     "birthday"     : "16-jan-1978",
//     "firstmovie"   : "pisasu-2",
//     "totalmovies"  :  61,
//     "blockbuster"  :  "Vikram",
//     }
//     ]
//  console.log(typeof actors);
//  console.log(actors);

// var list=document.getElementById('actor');
// console.log(list);
//  //for loop
//  for(i=actors[0];i<actors.length;i++){
//     console.log( actors[i].name+'-'+actors[i].birthday+'-'+actors[i].firstmovie);
// }
// //for in loop
// for(key in actors){
//     console.log(key+':',actors[key]);
// }
// //for of loop
// for(key of actors){
//     console.log('actor:',key);
// }

 
 


                               //fundamentals apply program//
//variables
// var a=10;//variable name
// console.log(a);

//datatype
//   var a=23;
// var b='yuvi';
// var c=a==b;
//  var d="";
//  var e;
//  console.log(d+e);

//operators
// var x=10;//assign operator
// var y=5;
// x+=y;
// x-=y;
// x*=y;
// x/=y;
// console.log(x);

// var a=20;//comparison operator
// var b=20;
//a==b;
//a===b;
// a!=b;
// a!==b;
// a<b;
// a<=b;
// a>b;
// a>=b;
 //console.log(a===b);

// var a=45;//Arithmetic operator
// var b=5;
// var c=40
// if(a<b || a<c ){
// console.log(true);
// }
// else{
//     console.log(false);
// }

//conditions
// var a=-1;
// var b=09;
// var c=0;
// if(a<b && c<b && a<c){
//     console.log(a,c,b);
// }
// else if(a<c && b<c && a<b){
//     console.log(a,b,c);
// }
// else if(b<c && a<c && b<a){
//     console.log(b,a,c);
// }
// else if(b<a && c<a && b<c){
//     console.log(b,c,a);
// }
// else if(c<b && a<b && c<a){
//     console.log(c,a,b);
// }
// else if(c<a && b<a && c<b){
//     console.log(c,b,a);
// }


//loops 
// var n=30;
// for(i=1;i<=n;i++){
//     console.log(i);
// }
//var i=1;
// while(i<n){
//     console.log(i);
//     i++;
    
// }


//function
// var a=40;
// var b=10;
// function add(x,y){
//     return c=a+b;
// }
// var d=add(); 
// console.log(d);
// function sub(x,y){
//     return c=a-b;
// }
// var d=sub(); 
// console.log(d);
//  function div(x,y){
//     return c=a/b;
// }
// var d=div(); 
// console.log(d);


//Array
// var marks=[90,87,79,100,95];
// var total=0;
// length=marks.length;
// for(i=0;i<length;i++){
// total+=marks[i];
// }
// average=total/length;
// console.log(total);
// console.log(average);

            //DOM
// var button=document.getElementById('btn');
// button.addEventListener('click',show);

// function show(){
// var div=document.createElement('div');
// var span=document.createElement('span');
// var text=document.createTextNode('Hello baby');
// var text2=document.createTextNode('How are you');
// var append=span.appendChild(text);
// var append1=span.appendChild(text2);
// console.log(span);
// var append2=div.appendChild(span);
// //console.log(div);
// var bold=document.getElementById('bold');
// bold.appendChild(div);
// bold.style.color='red';
// bold.style.textAlign='center';
// bold.style.fontSize='50px';
// div.style.border='blue';

// var anger=document.createElement('a');
// var attri=anger.setAttribute('href','https://www.google.com');
// //console.log(anger);
// var write=document.createTextNode('Go to Google');
// var merge=anger.appendChild(write);
// //console.log(anger);
// bold.appendChild(anger);
// }

//promise
// const a=new Promise((resolve,reject)=>{
//  let number=9+9;
//  if(number==18){
//     resolve('success'+number);
//  }else{
//     reject('error');
//  }

// })
// a.then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

//arrow function

//console.log(Number.isSafeInteger(1099288973294289));

     //default value for function params
// function add(a,b){           
//     return a+b;
// }
// console.log(add(5,4)); 
// //
// function add(a,b){
//     console.log(a+b);
// }
// add(5);

    //arrow function
// var add=(a,b)=>console.log((a+b)); 
// add(4,5);

       //spread operator
// const a=[1,2,3,4,5];
// console.log(...a);
// b=[...a];
// console.log(b);//but address is change
 
    //destructuring
// const a={
//     name:'francis',
//     age: 24,
// }
// const{name,age}=a;
// console.log({a});
    

                        //  ES6
//Spread operator
// var a=[1,2,3,4];
// var b=[5,6,7,8];
// var c=[...a,...b];
// console.log(c);

//Compiling Array
// const cart1=['magi','noodles','beans'];
// const add=['oil','salt','matchbox'];
// let total=cart1.concat(add);
// console.log(total);
// let final=total.slice(0,3);
// console.log(final);

//Empty array get
// var numbers=[1,2,3,4];
// // var numbers=[];
// numbers.splice(0,numbers.length)
// console.log(numbers);

//Arrow function
// a=10;
// b=12;
// const add=(a,b)=>a+b;
// console.log(add(a,b)); 


//Spread operator
// const arr=[1,2,3,4,5];
// console.log(...arr);

//Callback
// function one(two){
//     console.log('First function');
//     two();
// }
// one(two)
// function two(third){
//     console.log('Second function');
//     third();
// }
// two(third)
// function third(){
//     console.log('Third function');
// }
// function one(){
//     console.log('First');
// }
// function second(){
//     console.log('Second');
// }
// one();
// second();

// var a=[1,2,3,4,5];
// a.filter(){
 
// }

// console.log(b);

//callback
// function a(callback){
//     console.log('First Function');
//     callback(call2);
// }
// a(callback);
// function callback(gfg){
//     console.log("Second function");
//     gfg();
    
// }
// function call2(){
//     console.log('Third function');
// }

//Callback hell
    // function one(){
    //     console.log('First');
    //     function two(){
    //         console.log('Second');
    //         function three(){
    //          console.log('Third');
    //          function four(){
    //             console.log('Fourth');
    //          }
    //          four()
    //         }
    //         three()
    //     }
    //     two()
    // }
    // one()

    //Promises
//     const getname=()=>{
//         var number=0;
//         return new Promise((resolve,reject)=>{
//            if(number){
//             resolve();
//            }
//            else{
//             reject();
//            }
//           })
//     }
//     getname()
//     .then(()=>{
//         console.log('Success');
//     })
//    .catch(()=>{
//     console.log('Error');
//    })

// Promise.all 

const getname=()=>{
    let number=0;
    return new Promise((resolve,reject)=>{
        if(number){
            resolve();
        }
        else{
            reject();
        }
    })
}
const getage=()=>{
    let number=0;
    return new Promise((resolve,reject)=>{
        if(number){
            resolve();
        }
        else{
            reject();
        }
    })
}
Promise.all([getname,getage])
.then(()=>{
    console.log('Success');
})
.catch(()=>{
    console.log('Error');
})
