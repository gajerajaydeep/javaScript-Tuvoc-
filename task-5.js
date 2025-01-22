//e. Define an object to represent a book, with properties for title, author, and a method to display a summary.
//ES 6 consepts
const book = {
    title: 'power of hebits',
    auther : 'Charles Duhigg',

    summary : function(){
        console.log(`book name is ${this.title}`);
        console.log(`author name is ${this.auther} `);
        
    }
}

console.log(book.summary());