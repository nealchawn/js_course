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

Book.prototype.equalsTo = function(other_book){
  if(this.title != other_book.title){
    return false
  }
  if(this.author != other_book.author){
    return false
  }
  if(this.isbn != other_book.isbn){
    return false
  }
  return true;
}

function UI(){
  this.container = document.querySelector('.container');
  this.form = document.getElementById('book-form');
  this.bookTable = document.getElementById('book-list');
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
  //re-render full table via empty
  this.bookTable.innerHTML = "";

  this.bookList.forEach((book)=>{
    tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href='#' class='delete'>X</a></td>
    `;
    this.bookTable.appendChild(tr);

    // const td_title = document.createElement('td');
    // td_title.appendChild(document.createTextNode(book.title));
    // tr.appendChild(td_title);
    
    // const td_author = document.createElement('td');
    // td_author.appendChild(document.createTextNode(book.author));
    // tr.appendChild(td_author);

    // const td_isbn = document.createElement('td');
    // td_isbn.appendChild(document.createTextNode(book.isbn));
    // tr.appendChild(td_isbn);
  });
}

UI.prototype.clearForm = function(){
  this.title.value = "";
  this.author.value = "";
  this.isbn.value = "";
}

UI.prototype.renderAlert = function(messages = [], color = "black"){
  //console.log(messages, color);
  // create div
  alert = color;
  if(color == 'green'){
    alert = 'success';
  }
  if(color == 'red'){
    alert = 'error'
  }
  const div = document.createElement('div');
  div.className = `alert ${alert}`;
  div.appendChild(document.createTextNode(messages.join(' ')));
  // get parent
  this.container.insertBefore(div, this.form);
  setTimeout(function(){
    ui.container.removeChild(div);
  },2000);
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
  this.renderAlert(book.message.messages, book.message.color);
  
}

UI.prototype.removeFromBookList = function(bookRow){
  let title = bookRow.children[0].innerText;
  let author = bookRow.children[1].innerText;
  let isbn = bookRow.children[2].innerText;

  // remove bookFrom list
  let copy_bookList = this.bookList;
  copy_bookList.forEach((book, index)=>{
    console.log(this.bookList[index])
    console.log(new Book(title, author, isbn));
    if(this.bookList[index].equalsTo(new Book(title, author, isbn))){
      this.bookList.splice(index,1);
      // or delete row here
      //bookRow.parentElement.removeChild(bookRow);
    }
  });
  
  // re-render dom
  ui.renderBookList();
  

};



const ui = new UI();
ui.form.addEventListener('submit',  function(e) {
  e.preventDefault();
  ui.formSubmit();
});

ui.bookTable.addEventListener('click',function(e){
  e.preventDefault();
  if(e.target.className == 'delete' && e.target.tagName == 'A'){
    // console.log('delete book');
    
    // let elem = e.target;
    // let row = e.target.parentElement.parentElement;
    // let title_t = row.children[0].innerText;
    // let author_t = row.children[1].innerText;
    // let isbn_t = row.children[2].innerText;
    
    // console.log(title_t, author_t, isbn_t);
    // console.log(e.target.parentElement.parentElement);
    ui.removeFromBookList(e.target.parentElement.parentElement);
  }
  //
})

ui.renderBookList();