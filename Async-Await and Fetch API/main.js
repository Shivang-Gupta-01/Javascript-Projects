console.log("This is Async and Await");

async function shivang()          // async funciton returns a promise
{
    console.log('Inside Shivang function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();          // resonse.json() also returns a promise
    console.log("users resolved");
    return users;
    
}
console.log("before calling Shivang");
let a = shivang();
console.log("After calling Shivang");
console.log(a);
a.then((data)=> console.log(data))
console.log("Last line of js file");
