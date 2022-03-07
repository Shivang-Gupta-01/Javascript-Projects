//var button = document.getElementById('button');
//var box = document.getElementById('box');
//button.addEventListener('click',runEvent);
//button.addEventListener('dblclick',runEvent);
//button.addEventListener('mousedown',runEvent);
//button.addEventListener('mouseup',runEvent);+
//box.addEventListener('mouseenter',runEvent);
//box.addEventListener('mouseleave',runEvent);

//box.addEventListener('mouseover',runEvent);
//box.addEventListener('mouseout',runEvent);

//box.addEventListener('mousemove',runEvent );

var iteminput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select  = document.querySelector('select');
//iteminput.addEventListener('keydown',runEvent) 
//iteminput.addEventListener('keyup',runEvent);
//iteminput.addEventListener('keypress',runEvent);
//iteminput.addEventListener('focus',runEvent);
//iteminput.addEventListener('blur',runEvent);

//iteminput.addEventListener('cut',runEvent);
//iteminput.addEventListener('paste',runEvent);

//iteminput.addEventListener('input',runEvent);

//select.addEventListener('change',runEvent);
//select.addEventListener('input',runEvent);

form.addEventListener('submit',runEvent)

function runEvent(e)
{  
    e.preventDefault(); // for submit prevent 
    console.log('EVENT TYPE: '+ e.type);
   // output.innerHTML = '<h3>MouseX: '+e.offsetX+ '</h3><h3>MouseY: '+e.offsetY+'</h3>';
  // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
   //document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
   //console.log(e.target.value); // catches the text enterd in the input section
   //document.getElementById('ouput').innerHTML='<h3>'+e.target.value+'</h3>';
   //console.log(e.target.value);

}