
// EXAMINE THE DOCUMENT OBJECT//
//console.dir(document);

//ACCESING AND MANIPULATING  DOCUMNET METHODS//
console.log(document.domain); // gets the domain
console.log(document.URL); // gets the url of the page
console.log(document.title); // gets the title of the page
document.title = 'mazaaagya';
console.log(document.title);

console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);

//document.all[9].textContent = 'Hello'; // however this is not a good way since adding any element in the html file will change the index of the element we are assinging the value to

console.log(document.forms); // getting the forms on the html
console.log(document.forms[0]); // getting the forms on the html

console.log(document.links); // links from html file

console.log(document.images); // images from html file

// getting element by id

console.log(document.getElementById('header-title'));
 var headertitle = document.getElementById('header-title');
 console.log(headertitle);

 //headertitle.textContent = 'Hello';
// headertitle.innerText = 'Goodbye';   // the differnece between the two is that 
console.log(headertitle.textContent); // shows 123 and disregards the styling in the span 
console.log(headertitle.innerText); // does show the styling

// headertitle.innerHTML = '<h3>Hello</h3>'; // doesnt remove the existing h1 tag but adds the h3 tag to it 

var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000'; // adds or changes the css styling 

// get elemetns by classname

var items  = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'hello';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';


//items.style.backgroundColor = '#f4f4f4'; // this doesnt work since this is an html collection and normal methods dont work on them collectively

// to do that

/*for(var i=0;i<items.length;i++)
{
    items[i].style.backgroundColor = '#f4f4f4';
}*/

// get elemetns by tag name

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
//li[1].textContent = 'Hello';

// query selector

var header1 =  document.querySelector('#main-header');
header1.style.borderTop = '3px solid red';

var input = document.querySelector('input')
input.value = 'Hello World';  // only works on the first one

var submit = document.querySelector('input[type="submit"]');
submit.value='Send';

var item = document.querySelector('.list-group-item');
item.style.color = 'red'; // only the first one

// for last item

var lastitem = document.querySelector('.list-group-item:last-child');
lastitem.style.color = 'blue';

// nth child

var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color = 'coral'

// query selector all

var titles = document.querySelectorAll('.title');
console.log(titles); // gives us a node list

titles[0].textContent = 'Hey';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0; i< odd.length ; i++)
{
    odd[i].style.backgroundColor = '#f4f4f4';
}
for(var i=0; i< even.length ; i++)
{
    even[i].style.backgroundColor = '#ccc';
}