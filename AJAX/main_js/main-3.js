// promises continued
const students = [

    { name: "Shivang", subject: "Javascript" },
    { name: "Aparna", subject: "Machine Learning" }
]

// Enroll Students

function enrollstudents(student, callback) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {

            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 3000)
    })
}

    function getstudents() {
        setTimeout(() => {
            let str = "";
            students.forEach(student => {

                str += `<li>${student.name}</li>`;
                console.log("Students have been fetched");
            });
            document.getElementById('students').innerHTML = str;
        }, 1000);
    }

    let newStudent = { name: "Reeva", subject: "Python" };
    enrollstudents(newStudent, getstudents).then(function()
    {
          getstudents();

    }).catch(function(){
        console.log("Some Error Ocurred");
    });
    
    // inside then- resolve function comes
    // inside catch reject function comes

    const promise1 = Promise.resolve("Hello World !!!");
    const promise2 = 10;
    const promise3 = new Promise((resolve,reject )=>
    setTimeout(resolve,2000,"GoodBye")
    );
    const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());    // withoout converting it to json it gives weird values

    Promise.all([promise1,promise2,promise3,promise4]).then((values)=>console.log(values));

    // Async-Await
async function init(){

   await createpost(
        {
            title:"Post 1", body:"This is Post One"
        }
    );
    
}