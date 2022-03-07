console.log("Ajax Tutorial")

let fetchbtn = document.getElementById('fetchbtn');

fetchbtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler()
{   
    console.log('BUTTON CLICKED')
    // create an xhr object

    const xhr = new XMLHttpRequest();
    
    // open the object
       // GET request
  //1//  xhr.open('GET','Shivang.txt',true); // true sets the value of asynchronoous to be true 
      
  // 2 //    // Post request
     xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true); // with this data is also required ot be send
     //2.1// xhr.getResponseHeader('Content-type','application/x-www-form-urlencoded'); // we send our form data to the url
            xhr.getResponseHeader('Content-type','application/json');   // in json format
     


     // what to do on progress

    xhr.onprogress = function(){      // we can use spinners showing the laoding of the site in this function
        console.log('On Progress');
    }


   xhr.onreadystatechange = function(){
       console.log('ready state is', xhr.readyState);   // there are 5 ready states 0,1,2,3,4 --- corresponding to unsent, opened, call has been sent , loading and done repectively.
   }



   // what to do when responce is ready
    xhr.onload = function()
    {   
        if(this.status === 200)  // 200 is an http status which shows 
        {
            console.log(this.responseText);
        }
        else{
            console.log('Some Error Occured');
        }
    }

    // send the request 
     // xhr.send(); -----------> for get method

     // params = " name=test&salary=123&age=23"; data in html encoding
       params =  	`{"name":"test","salary":"123","age":"23"}`;
     xhr.send(params);
    
    console.log('We are done'); // due to true value of asynchornous value this thing comes before the value in txt file.
                                // change the value of true to false and then check the difference

                                // After this we will check out POST request. Therefore head back and comment out the GET one



}

let popbtn = document.getElementById('popbtn');
popbtn.addEventListener('click',pophHandler);

function pophHandler()
{
    console.log('POP BUTTON CLICKED')
    // create an xhr object
    const xhr = new XMLHttpRequest(); 
    //console.log(xhr);
    // open the object
   xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);

   // what to do when responce is ready
    xhr.onload = function()
    {   
        if(this.status === 200)  // 200 is an http status which shows  // this referes to the xhr object(points to it)
        {
          let obj = JSON.parse(this.responseText);
          console.log(obj);

          let list = document.getElementById('list');
          str = "";
          for (key in obj)
          {
              str+= `<li>${obj[key].employee_name} </li>` ;
          }
          list.innerHTML = str;
        }
        else{
            console.log('Some Error Occured');
        }
    }

    // send the request 
      xhr.send();    
    console.log('We are done'); 

}