// events 
// 1// 
var button = document.getElementById('button').addEventListener('click',buttonclick);
function buttonclick(e)
{
    //console.log("Button CLicked");
    //document.getElementById('header-title').textContent='Changed';
    //document.querySelector('#main').style.backgroundColor = '#f4f4f4';
    console.log(e);
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.classList); // gives the list of classes in the target
    var output = document.getElementById('output');
    output.innerHTML = '<h3>'+e.target.id+'</h3>';


    console.log(e.type); // type of the event
    console.log(e.clientX); // horizontal posiiton of the mouse from the browser window
    console.log(e.clientY); // vertical posiiton of the mouse from the browser window

    console.log(e.offsetX); // gives the position of the mouse from the element
    console.log(e.offsetY); // gives the position of the mouse from the element

    console.log(e.altKey); // returns if alt key has been pressed while doing the event
    console.log(e.ctrlKey); 
    console.log(e.shiftKey); 
}

/*var button = document.getElementById('button').addEventListener('click',function()
{
    console.log('123');
}); */           // instead of defining a function insdie the eventlistener we can also specify a differnet function 



//2//
// var button = document.getElementById('button').addEventListener('click',buttonclick());
