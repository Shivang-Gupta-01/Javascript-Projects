console.log("This is sets.js")

const mySet = new Set();  // Initalise an empty set
console.log('The set looks like', mySet);

// Adding values to set
mySet.add('This');
mySet.add('My Name');
mySet.add('that');
mySet.add(34);
mySet.add(true);
mySet.add(false);
mySet.add('that2');
console.log('The set looks like this now: ',mySet);

let mySet2 = new Set([1,45,'this',false,{a:2,b:8},'thi']);  // This doesnt take any duplicate values
console.log('Myset2 is ', mySet2);

console.log(mySet.size);  // Gets size of the set

console.log(mySet.has(34));  // to check if an element is present in set
console.log(mySet.has(346));

console.log('Before removing myset',mySet.has('that2'))

mySet.delete('that2')   // To delete an element from the set

console.log('After Removal',mySet)

for (let item of mySet)
{
    console.log('Item is :',item);
}
    
mySet.forEach((item)=>
{
     console.log('Item is :',item);
});

myArray = Array.from(mySet);
console.log(myArray);











