//console.log(window);
//console.log(navigator.appVersion);


// object literals
const book1 = 
{
   title:'Book1',
    
   author:'Shivang Gupta',
   year : 2020,

   getsummary : function()
   {
       return `${this.title} was written by ${this.author} in ${this.year}`;
   
   }
};

console.log(book1.getsummary());
console.log(Object.values(book1));
console.log(Object.keys(book1));



// constructor 

function Book(title,author,year)
{
    //console.log('Book Initilaised...');
    this.title =title;
    this.author =author;
    this.year =year;
}
//  function

Book.prototype.getsummary= function()
{
    return `${this.title} was written by ${this.author} in ${this.year}`;
}
// age of the book
Book.prototype.getage = function()
{
    const years = new Date().getFullYear() - this.year;
    return years;
}
// revise

Book.prototype.revise = function(newyear)
{
    this.year = newyear;
    this.revised  =true;
}
// inititalise object

const newbook1 = new Book('Book 1','Shivang Gupta',2010);
const newBook2 = new Book('Book 2','Aparna Gupta',2020);

console.log(book1.title);
console.log(newBook2);
console.log(newBook2.getsummary());
console.log(newbook1.getage());

newBook2.revise('2010')
console.log(newBook2);

