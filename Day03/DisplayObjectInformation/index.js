/*
	Challenge: Write a JavaScript program to display the status (i.e. display book name, author name and reading status) of books. You are given an object library in the code's template. It contains a list of books with the above mentioned properties. Your task is to display the following:
	
	If the book is unread:
		You still need to read '<book_name>' by <author_name>.
	If the book is read:
		Already read '<book_name>' by <author_name>.
*/

function displayInformation() {
     // var library is defined, use it to print the information
     for(i=0;i<library.length;i++){
        if(library[i].readingStatus === true){
            console.log("Already read '" + library[i].title + "' by " + library[i].author +".");
        }else{
            console.log("You still need to read '" + library[i].title + "' by " + library[i].author +".");
        }
    }
} 

// tail starts here
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

displayInformation();
