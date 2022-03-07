// Object Of Protos

const bookprotos = 
{
    getsummary :function()
    {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },

    getage : function()
    {
        const years = new Date().getFullYear() - this.year;
        return years;
    }
}

// create object

const book1 = Object.create(bookprotos);
book1.title = 'book One';
book1.auhtor = 'Shivang Gupta';
book1.age = '2020';

console.log(book1);

const book2 = Object.create(bookprotos, {
    title:{value: 'Book Two'},
    author:{value: 'Aparna Sinha'},
    year:{value: '2020'}
});
console.log(book2);