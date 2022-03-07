class Book
{
    constructor(title,author,year)
    {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getsummary()
    {
        return `The book ${this.title} was written by ${this.author} in ${this.year}`
    }
    getage()
    {
        const years = new Date().getFullYear() - this.year;
        return years;
    }
    revise(newyear)
    {
        this.year = newyear;
    this.revised  =true;
    }

    static topBookstore()
    {
        return 'Janta Book Depot';
    }
}

book1 = new Book('Book one','Shivang Gupta','2020');
console.log(book1);
console.log(book1.getsummary());
book1.revise('2021');
console.log(book1);

// to call static function we use class name itself and not the objects of the class

console.log(Book.topBookstore());


//  magzine subclasses

class Magzine extends Book
{
   constructor(title,author,year,month)
   {
    super(title,author,year); // to use parent method
    this.month = month;
   }
}

const mag1 = new Magzine('Magzine 1', 'Shivang Gupta' ,'2020','Jan');
console.log(mag1);
console.log(mag1.getsummary());