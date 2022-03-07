console.log("This is shorthand property")

const str = "This is shivang Gupta";
// character sets
let regex = /shi[a-z]ang/; //-----> anything between a-z
regex = /shi[ryu]ang/; // ---->either from r,y or u
regex = /shi[^ryu]ang/;   // can be anythng but not r,y or u

// multiple character sets

regex = /shi[^aty]an[gr]/;

regex = /shi[a-zA-Z]ang/;  // can be anything from a-z or A-Z

regex = /shi[a-zA-Z]an[0-9]/; // digits from 0-9

//Quantifiers  ---> to specify the quantity of any characters

regex = /shiv{2}ang/;   // if we want 2 v's in the name

regex =  /shiv{0,2}ang/;   // if v can occur 0 to 2 times


// Groupings  -->we use paranthesis () for grouping

regex = /(shi){2}vang/;  // ---> this implies that the group shi shiuld occur exactly 2 times

regex = /(shi){2}van([0-9]g){3}/;   // eg. shishivan0g1g2g



let result = regex.exec(str);
console.log(result);

if(regex.test(str))
{
    console.log(`The string ${str} matches expresiion ${regex.source}`);

}else{
    console.log(`The string ${str} doesnt matches expresiion ${regex.source}`);
}