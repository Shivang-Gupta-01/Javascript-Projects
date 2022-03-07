console.log('This is main-1.js');
// set timeout function
setTimeout(() => {
    for(let index = 0;index<4000;index++)
{
    const element = index;
    console.log("this is index number" +index);
}
}, 100);  // this loop runs after 100 miliseconds and thus makes it non-blocking


/*for(let index = 0;index<4000;index++)
{
    const element = index;
    console.log("this is index number" +index);
}
*/
console.log('Done Printing') // normally this comes only after the execution of the previous statements
// we use settimeout function to print done printing while the loop runs

// callbacks -----> can be both synchornous and asynchornous. foreeach are asynchronous.
   
const students = [
   
    { name : "Shivang", subject: "Javascript" },
    { name : "Aparna", subject: "Machine Learning" }
]

// Enroll Students

function enrollstudents(student, callback)
{
    setTimeout(function() {

        students.push(student);
        console.log("Student has been enrolled");
        callback();
        
    }, 3000);
}

function getstudents()
{
    setTimeout(() => {
        let str ="";
        students.forEach( student => {
            
            str+= `<li>${student.name}</li>`;
            console.log("Students have been fetched");
        });
        document.getElementById('students').innerHTML = str;
    },1000);
}

let newStudent = {name: "Reeva", subject:"Python"};
enrollstudents(newStudent,getstudents);
//getstudents();

let newstudent2 = {name:"Kartik",subject:"Photoshop"};


// Async and Await----->A more elegant way to handle promsies

async function init()
{
    await enrollstudents(newstudent2);
    getstudents();
}

init();

// Async /Await with fetch

async function fetchusers()
{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    
    const data = await res.json();
    console.log(data);
}
fetchusers();