
//alert("Hello World"); // blocks rest of the scrpit from running and therefore we shoiuld use consol
 // show consol on inspect element

 //console.log("Hello World"); // log is a method or a function ff the consol class 

 // mdn is the best source for reading the documentation of javascript

 //console.error("This is an error");

 //console.warn("This is a warning");

 // data types : var ,let(we can reassign values) and const

//const age = 30; // always add value intitalise value
//age=31;  // throws ana error

// always use const whnever we know we dont want to change the value of that variable
//console.log(age);

// data-types 
// primitive : strings,numbers,boolean,null,undefined, sybmol
// no floats, integrers are there in javascript

const name='Shivang Gupta';
const age=20;
const rating = 4.5;
const iscool= true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof iscool);
console.log(typeof x); // shows an object as the typeof is bogus
console.log(typeof y);
console.log(typeof z);

// strings

       // concatination
       console.log("my name is " + name + " and I am " + age );

       // template literals 

       console.log(`My name is ${name} and my am ${age}`); // use backquotes using keyboard //

       const hello = `My name is ${name} and my am ${age}`;
       console.log(hello);

       // string properties
       const s = "Hello World";

       console.log(s.length);

       console.log(s.toUpperCase()); // lowercase

       console.log(s.substring(0,5).toUpperCase()); // using two funstions together seperated by .

       console.log(s.split(""));

       const t = 'technology, computers, it, code';
       console.log(t.split(', '));

// arrays

      /* multi line comments*/
      
      const numbers = new Array(1,2,3,4,5);
      console.log(numbers);
      
      const fruits = ['apples','oranges','pears',10,true]; // differen data types can also be added into the same array
      console.log(fruits);
      fruits[5]='grapes';
      console.log(fruits);
      console.log(fruits[1]); //  print oranges
      fruits.push('mangoes'); // for adding at the last
      console.log(fruits);
      fruits.unshift('strawberries'); // for adding in the strarting of the array
      console.log(fruits);

      fruits.pop(); // to delet the last element

  console.log(Array.isArray(fruits)); // to check if fruits is an the array f
  
  console.log(Array.isArray("Hello"));

   // to get an index of an item

   console.log(fruits.indexOf("oranges"));


// object literal - key-value pairs

    
const person = 
{
       firstname:"shivang",
       lastname : "Gupta",
       age:20,
       hobbies : ["music","SKETCH","sports"],

       address: {
              street : "A-23 Friends Colony East",
              city : "New Delhi",
              State : "Delhi"
       }
}

console.log(person);
console.log(person.firstname,person.lastname);

// pulling elements out of the perosn class
const{firstname,lastname, address: {city} }  =person;  

console.log(firstname);
console.log(city);


person.email  = 'shivang.gmail.com';
console.log(person);


// arrays of objects

const todos = 
[
       {
              id: 1,
              text:'take out trash',
              iscompleted:true
       },
       {
              id: 2,
              text:'Meeting with employees',
              iscompleted:true
       },
       {
              id: 3,
              text:'Date with aparna',
              iscompleted: false
       },


]

console.log(todos);

console.log(todos[1].text);

// json
// to convert it into json first see the differnec between free-formatter .com using json convertor
// the only difference is that all the fields are in double quotes and all the values are also in double quotes



const todojson = JSON.stringify(todos);
console.log(todojson);


// loops

// for-loops

  for(let i = 0;i<10;i++)
  {
         console.log("For loop number"+i); //  can also be written as console.log(`For loop number : ${i}`)
  }

  // while loop
  let i =0;

  while(i<10)
  {
         console.log(`While loop number : ${i}`);
         i++;
  }
   
  for(let i=0; i<todos.length;i++)
  {
      console.log(todos[i].text);
  }
  
  // better method

  for(let t of todos)
  {
         console.log(t);
  }
  
  // forEach , map, filter
             
           // forEach
              todos.forEach(function(todo)
              {
                     console.log(todo.text);
              });

           // map returns an array
           
          const todoText= todos.map(function(todo)
           {
               return todo.text;
           });
           console.log(todoText);

           // filter

           const todocompleted = todos.filter(function(todo)
           {
              return todo.iscompleted === true;
           });
           console.log(todocompleted);

           // combining map and filter
           const todocompletedmap = todos.filter(function(todo)
           {
              return todo.iscompleted === true;
           }).map(function(todo)
           {
                  return todo.text;
           });
           console.log(todocompletedmap);


// conditionals

 const x1  = 10;
  if(x1==10)      // == doesnt match data types and only value
  {
         console.log(" x1 is 10");
  }
   
  const x2 = "10";
  if(x === 10)    // === also matches the data types of the variables
  {
         console.log("x is 10")
  }else{
         console.log('x is not 10');
  }             // simmilarly else if statements can be done && || can be used as and and or

 

  const x3 = 10;
  const color = x3 > 10 ? 'red':'blue';
  console.log(color);
     
  switch(color)
  {
         case 'red':
         console.log('color id red');
         break;

         case 'blue':
                console.log('color is blue');
                break;
                default:
                       console.log('color is not red or blue'); // try changing the value of x3

  }

// functions

function addnums(num1 = 1,num2 = 1)
{
       console.log(num1+num2); // can also be used to return the value
}

addnums(5,4);
addnums();

// arrow functions 

const addnum = (num1 = 1, num2=1) =>
{
       return num1+num2;                    // can also be written as => num1+num2 instead of return
}

 console.log(addnum(5,5));

// arrow function with one parmaters

const addfive = num1 => num1+5;

console.log(addfive(2));


todos.forEach((todo)=> console.log(todo.text));
// constructor function
/*function Person(firstname,lastname,dob)
{
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
} 


Person.prototype.getBirthYear = function()
       {
              return this.dob.getFullYear();
       }
       
Person.prototype.getFullname = function()
{
       return `${this.firstname} ${this.lastname}`;   
}*/
//  Creating class

class Person
{
       constructor(firstname,lastname,dob)
       {
              this.firstname = firstname;
              this.lastname = lastname;
              this.dob = new Date(dob);
       }
       getBirthYear()
       {
              return this.dob.getFullname();
       }
       getFullname()
       {
              return `${this.firstname} ${this.lastname}`;  
       }
}

// instantiate object

const person1 = new Person('Shivang','Gupta','01-01-2000');
const person2 = new Person('Aparna','Sinha','07-16-2000'); // in mm-dd-yyyy format

console.log(person1);
console.log(person2.getFullname());

// hmtl dom










 






