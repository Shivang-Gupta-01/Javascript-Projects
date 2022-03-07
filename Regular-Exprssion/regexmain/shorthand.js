let str = "I am shivang Gupta %%@&$#sh ka number 89999 shivang99999";

// Character Classes
let regex = /\whivang/;   // \w means a word character eg.{ _ or alphabets or numbers } ---> eg. _hivang
 
regex = /\w+g/;   // more than one word character by \w+

regex = /\WGupta/ ;      // Non word character eg. spaces,etc

regex = /\W+sh/ ;      // more than one word characters  

regex = /\d999/;       // digit shown by \d followed by 3 9's

regex = /number \d999/;  // the word number follwed by a digit and 3 9's

regex = /number \d+/;   // more than one digit

regex = /\D999/;    // to match a non digit we use \D

regex = /\D+999/;   // more than one non digit folllowed by 999

regex = /\ska number/;   // to  match any whitespace character or \t(tab) we use \s

regex = /\s+ka number/;  // more than one whitespace

regex = /\Ska number/;       // non whitespace character (remove whotespace before ka)

regex = /\S+ka number/;   // more than one non whotespace character

// Word boundary
str = "shivang4r5r is a cool Id"
regex = /4r5r\b/   // to set a boundary on a word we use \b. Try to remove a whitespace after 5r and see

// Assertions
regex = /s(?=h)/  //  if we compulsorily want to match s follwed by an h
regex = /s(?!h)/   // anything after s but not h (matches due to "is")


let result = regex.exec(str);
console.log(result);

if(regex.test(str))
{
    console.log(`The string ${str} matches expresiion ${regex.source}`);

}else{
    console.log(`The string ${str} doesnt matches expresiion ${regex.source}`);
}