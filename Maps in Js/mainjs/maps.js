console.log("This is maps.js");

const myMap = new Map();
console.log(myMap);

const key1 = "mystr1";
const key2 = "mystr2";
const key3 = "mystr3";

const key4 = "goodstr",
  key5 = {},
  key6 = function () {};

// Setting Map values
myMap.set(key1, "This is a String");
myMap.set(key2, "This is String 2");
myMap.set(key3, "This is String 3");
myMap.set(key4, "This is String 4");
myMap.set(key5, "This is a blank object");
myMap.set(key6, "This is an empty function");

console.log(myMap);

// Getting values from a map

let value1 = myMap.get(key2);
console.log(value1);

// Getting Size of the map

console.log(myMap.size);

// You can loop using for..of to get key and values

for (let [key, value] of myMap)
{
  console.log(key,value);  
}
for(let key of myMap.keys())
{
  console.log('key is ',key);
}
for(let key of myMap.values())
{
  console.log('value is ',key)
}

// You can loop through a map using for each loop

myMap.forEach((value,key)=>{
   
  console.log('key is', key);
  console.log('value is',value)
});

// Converting map to array

let myArray = Array.from(myMap);

console.log('Map to array is',myArray);

// Converting map keys to array

let myKeysArray = Array.from(myMap.keys());

console.log('Map Keys to array is',myKeysArray);

// Converting map values to array

let myValuesArray = Array.from(myMap.values());

console.log('Map Values to array is',myValuesArray);

