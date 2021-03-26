function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.status = function(){
    // check all params
    this.message = {messages: [], color: ""};
    if(this.title === null || this.title == ""){
      this.message.messages.push("invalid title");
    }
    if(this.author === null || this.author == ""){
      this.message.messages.push("invalid author");
    }
    if(this.isbn === null || this.isbn == ""){
      this.message.messages.push("invalid isbn");
    }
    if(this.message.messages.length > 0){
      this.message.color = "red";
      return false;
    }else{
      this.message.messages.push("added book.");
      this.message.color = "green";
      return true;
    }
  };
  
  this.message = {messages: [], color: ""};
}

function UI(){
  this.form = document.getElementById('book-form');
  this.bookList = [];

  this.title = document.getElementById('title');
  this.author = document.getElementById('author');
  this.isbn = document.getElementById('isbn');
}

// prototype uniqueBook
// delete book, then renderBooks
// color form elements when missing or not missing
// create alert element


UI.prototype.addToBookList = function(book){
  this.bookList.push(book);  
}

UI.prototype.renderBookList = function(){
  console.log(this.bookList);
}

UI.prototype.clearForm = function(){
  this.title.value = "";
  this.author.value = "";
  this.isbn.value = "";
}

UI.prototype.renderMessage = function(messages = [], color = "black"){
  console.log(messages, color);
}

UI.prototype.formSubmit = function(){
  //e.preventDefault();
  // validate form
  let book;

  book = new Book(title.value, author.value, isbn.value);
  if(book.status()){
    this.addToBookList(book);
    this.renderBookList();
    this.clearForm();
  }
  this.renderMessage(book.message.messages, book.message.color);
  
}



const ui = new UI();
ui.form.addEventListener('submit',  function(e) {
  e.preventDefault();
  ui.formSubmit();
});

ui.renderBookList();