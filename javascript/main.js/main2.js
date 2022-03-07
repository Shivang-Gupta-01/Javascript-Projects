console.log(window) // window object is the parent object of the browser
//alert(1); // this is the method of the window object and doesnt need a window.alert statement

// single element selector
console.log(document.getElementById('my-form'));

const form = document.getElementById('my-form');
console.log(form);
// query selector
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));


// multiple element selectors

console.log(document.querySelectorAll('.item')) // gives a node list which is very simmilar to an array and array methods can be used

console.log(document.getElementsByClassName('item')) // only works on classes ---- gives an html collection !!!! NO ARRAY METHODS

console.log(document.getElementsByTagName('li')); // gets elemts by tag names

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

// CHANING THINGS IN DOM -- document object model

const ul = document.querySelector('.items');
//ul.remove();          // removed all the classes with items class

//ul.lastElementChild.remove(); // to remove the last child

//ul.firstElementChild.textContent = 'Hello'; // to change the content of the first element 

ul.children[1].innerText = 'Brad'; // second element

ul.lastElementChild.innerHTML = '<h1>Hello</h1>' ;// changes the html code of the last child


// to change styles

const btn  =document.querySelector('.btn');

//btn.style.background = 'red';  // changes the style of the element;

btn.addEventListener('click', (e)=>      // aslo check with mouseout
{   
    e.preventDefault();  // prevents the default submit to the file and prevents the default action .. now doesnt flasj=h
    console.log('click');
    console.log(e.target); // gives the element on which the  event is on
    document.querySelector('#my-form').style.background='#ccc';
    document.querySelector('body').classList.add('bg-dark'); // adding class-background from css
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello<h1>';
});



