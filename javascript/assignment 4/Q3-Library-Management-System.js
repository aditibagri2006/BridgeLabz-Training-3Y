// Q3 – Library Management System (Classes + Objects)
"use strict";

class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
            return false;
        }

        this.isIssued = true;
        console.log(`"${this.title}" has been issued successfully.`);
        return true;
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`"${this.title}" was not issued.`);
            return false;
        }

        this.isIssued = false;
        console.log(`"${this.title}" has been returned.`);
        return true;
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN002"),
    new Book("Atomic Habits", "James Clear", "ISBN003", true),
    new Book("Ikigai", "Hector Garcia", "ISBN004")
];

function displayAvailableBooks() {
    const availableBooks = books.filter(book => !book.isIssued);

    console.log("\nAVAILABLE BOOKS:");
    if (availableBooks.length === 0) {
        console.log("No books are currently available.");
        return;
    }

    availableBooks.forEach(book => {
        console.log(`${book.title} | ${book.author} | ISBN: ${book.isbn}`);
    });
}

function issueBookByISBN(isbn) {
    const book = books.find(item => item.isbn === isbn);

    if (!book) {
        console.log(`No book found with ISBN ${isbn}.`);
        return;
    }

    book.issueBook();
}

displayAvailableBooks();

// Example: search for a book by ISBN and issue it.
issueBookByISBN("ISBN002");
displayAvailableBooks();
