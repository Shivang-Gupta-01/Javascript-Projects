 console.log("This is travel desk website")

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validEmail = false;
let validPhone = false;
let validUsers = false;

name.addEventListener('blur',()=>{
   // console.log('name is blurred');
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex,str);

    if(regex.test(str))
    {  
        validUsers = true;
        console.log("Your name is valid");
        name.classList.remove("is-invalid");
    }else{
        console.log("Your name is not valid");
        name.classList.add("is-invalid");
        validUsers = false;
    }
});

email.addEventListener('blur',()=>
{
    console.log('email is blurred');

    // Validate email here

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex,str);

    if(regex.test(str))
    {  
        validEmail = true;
        console.log("Your email is valid");
        email.classList.remove("is-invalid");
    }else{
        console.log("Your email is not valid");
        email.classList.add("is-invalid");
        validEmail = false;
    }

})

phone.addEventListener('blur',()=>
{
    console.log('phone is blurred');
   
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex,str);

    if(regex.test(str))
    {   
        validPhone = true;
        console.log("Your phone is valid");
        phone.classList.remove("is-invalid");
    }else{
        console.log("Your phone is not valid");
        phone.classList.add("is-invalid")
        validPhone = false;
}

});

submit = document.getElementById("submit");

submit.addEventListener('click',(e)=>
{   
    e.preventDefault();
    console.log('You clicked on Submit');
   console.log(validEmail,validUsers,validPhone);
    // Submit your form here
   
    if(validEmail && validPhone && validUsers)
  {  
    let failure = document.getElementById('failure');
      console.log("Phone,Email and Username are valid");
      let success = document.getElementById('success');
      success.classList.add('show');
      $('#failure').alert('close');
    }else
    {
        console.log("One or more of Phone,Email or Username are invalid.Hence not submitting form .PLease correct the errors and try Again");
        let failure = document.getElementById('failure');
        failure.classList.add('show');
       $('#success').alert('close');

    }
    
})






