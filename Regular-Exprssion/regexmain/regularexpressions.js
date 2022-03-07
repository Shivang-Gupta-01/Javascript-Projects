console.log("This is regular expression");
let reg = /shivang/g; //--> g stands for global flag
// /shivang/i ---> i means global case insensitive
console.log(reg);
console.log(reg.source);

// functions to match expressions
let s = "This is great code with shivang and shivang loves Aparna ";

// 1. exec() function ---> returns an array of string in expression for match or null for no match

let result = reg.exec(s);
if (result) {
  // first occurance of string in expression
  console.log(result);
  console.log(result.input);
  console.log(result.index);
}
result = reg.exec(s); // if g (global flag) is not used , this function always returns the value of the first occrunce
console.log(result);
result = reg.exec(s); // if g (global flag) is not used , this function always returns the value of the first occrunce
console.log(result);

// 2. test() function ----->returns true or false

let result2 = reg.test(s);
console.log(result2);  // ----> this will print true if reg is present in the s

// 3.match()  -->it is applied on string returns an array of results or null
let result3 = s.match(reg);
console.log(result3);


// 4.search() function------> return index of first match else -1

let result4 = s.search(reg);
console.log(result4);


// 5. replace function -----> returns the string replaced string with all the replacement
let result5 = s.replace(reg,'APARNA');
console.log(result5);
