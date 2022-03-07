// inheretance
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
// magzine constructor
function Magzine(title,author,year,month)
{
    Book.call(this,title,author,year);

    this.month = month;
}
// inherit prototype methods
Magzine.prototype = Object.create(Book.prototype);

// instantiate magzie object
const magz1 = new Magzine('Mag One','Shivang Gupta','2020','Jan');
console.log(magz1);
console.log(magz1.getsummary());

// use magzine constructor

Magzine.prototype.constructor = Magzine;
console.log(magz1);