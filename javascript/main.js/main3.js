const myform = document.querySelector('#my-form');
const nameinput = document.querySelector('#name');
const emailinput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userlist = document.querySelector('#users');

const ul = document.querySelector('.items');
ul.remove();   
myform.addEventListener('submit',onSubmit);

function onSubmit(e)
{
    e.preventDefault();
    console.log(nameinput.value );    // without value gives the entire attribute

    //form validation

    if(nameinput.value === '' || emailinput.value === '')
    {
       //  alert('Please enter fields'); not that good a method
       msg.classList.add('error');
       msg.innerHTML  ='Please Enter all fields';

       setTimeout(()=> msg.remove(),3000); // tells how long the effect on the parameter should be there
    }else
    {
            //console.log('success');
         const li = document.createElement('li');
         li.appendChild(document.createTextNode(`${nameinput.value} : ${emailinput.value}`));
         userlist.appendChild(li);

         // clear lists 
         nameinput.value='';
         emailinput.value='';
    }
}