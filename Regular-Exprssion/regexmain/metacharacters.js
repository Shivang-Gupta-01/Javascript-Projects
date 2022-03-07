let regex = /shivang/;
let str = "shivang loves aparna and Reeva is shivang daughter";

// Metacharacter Symbols
regex = /^s/;  //----->starts with symol ^
regex = /er$/; // if the string ends with er $ sign
regex = /s.ivang/  // matches any one character
regex = /s*ivang/  // matches 0 or more character
regex = /sh?ivang?/  // h and g are optional
regex = /s\*ivang/   // here using / means we mean * not as a metacharacter but as an asterics itself

let result = regex.exec(str);
console.log("The result from exec is",result);

if(regex.test(str))
{
    console.log(`The string ${str} matches expresiion ${regex.source}`);

}else{
    console.log(`The string ${str} doesnt matches expresiion ${regex.source}`);
}