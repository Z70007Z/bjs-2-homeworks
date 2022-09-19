
// Задание 1
class PrintEditionItem  {

	constructor(name, releaseDate, pagesCount){
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
        this.type = null;
	}

    fix() {
        return this.state *= 1.5; 
    }

    set state(Number) {
        if (Number < 0) {
            this._state = 0;
        } else if (Number > 100) {
            this._state = 100;
        } else {
            this._state = Number;        
        }
    }

    get state() {
        return this._state;
    }    

}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
	}
}

class NovelBook  extends Book {
	constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
	}
}
class FantasticBook  extends Book {
	constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
	}
}

class DetectiveBook  extends Book {
	constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
	}
}

// Задание 2

class Library {
	constructor(name) {
		this.name = name;
        this.books = [];
	}

    addBook(book) {
        if (book.state > 30) {
            return this.books.push(book);
        }
        return;
    }

    findBookBy(type, value) {
        
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i];
            }     
        }      
        return null;             
    }

    giveBookByName(bookName) {

        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                let getBook = this.books[i];
                this.books.splice(this.books.indexOf(this.books[i]), 1);
                return getBook;               
            }  
        } 
        return null;       
    }
}

// Задание 3

class Student {
  //  ваш код
    constructor(fullName) {
        this.name = fullName;
        this.journal = [];
    }  
    
    addMark(value, subject) {
        if ((value > 0) && (value < 6) && (typeof value == "number")) {
            return this.journal.push({
                subject: subject,
                value: value
            });
        } else {
            return console.log("Ошибка, оценка должна быть числом от 1 до 5");
        }
    }

    getAverageBySubject(name) {

        let typeSum = 0;
        let j = 0;
        for (let i = 0; i < this.journal.length; i++) {
            if (this.journal[i].subject === name) {
                typeSum += this.journal[i].value;
                j += 1;
            }
        }
        if (j !== 0) {
            typeSum = typeSum / j;
        }
        return typeSum;

    }   

    getAverage() {
        let sumOfSubject = 0;
        for (let i = 0; i < this.journal.length; i++) {
            sumOfSubject += this.getAverageBySubject(this.journal[i].subject);
        }
        return sumOfSubject / this.journal.length; 
    }

}