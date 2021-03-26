class Book{
  constructor(title = "", author = "", isbn = ""){
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

  equalsTo(other_book){
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

  static equalsTo(book, other_book){
    if(book.title != other_book.title){
      return false
    }
    if(book.author != other_book.author){
      return false
    }
    if(book.isbn != other_book.isbn){
      return false
    }
    return true;
  }


}

class UI{
  constructor(){
    this.container = document.querySelector('.container');
    this.form = document.getElementById('book-form');
    this.bookTable = document.getElementById('book-list');
    this.bookList = []; // rendered superfluous with localStorage

    this.title = document.getElementById('title');
    this.author = document.getElementById('author');
    this.isbn = document.getElementById('isbn');
  }

  addToBookList(book){
    //this.bookList.push(book);

    // add to localstorage
    let bookList;
    if(localStorage.getItem('bookList') == null){
      bookList = [];
    }else{
      bookList = JSON.parse(localStorage.getItem('bookList'));
    }
    bookList.push(book);
    localStorage.setItem('bookList', JSON.stringify(bookList));
    this.bookList = bookList;
  }

  renderBookList(){
    this.bookTable.innerHTML = "";
    this.bookList = JSON.parse(localStorage.getItem('bookList'));
    this.bookList.forEach((book)=>{
      let tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='delete'>X</a></td>
      `;
      this.bookTable.appendChild(tr);
    });
  }

  clearForm(){
    this.title.value = "";
    this.author.value = "";
    this.isbn.value = "";
  }

  renderAlert(messages = [], color = "black"){
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

  formSubmit(){
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

  removeFromBookList(bookRow){
    let title = bookRow.children[0].innerText;
    let author = bookRow.children[1].innerText;
    let isbn = bookRow.children[2].innerText;
  
    // remove bookFrom list
    //let copy_bookList = this.bookList;
    let copy_bookList;
    let bookList;
    // get from localStorage
    bookList = JSON.parse(localStorage.getItem('bookList'));
    console.log(bookList)
    copy_bookList = bookList;
    copy_bookList.forEach((book, index)=>{
      console.log(bookList[index])
      console.log(new Book(title, author, isbn));
      if(Book.equalsTo( bookList[index], (new Book(title, author, isbn)))){
        bookList.splice(index,1);
        // or delete row here
        //bookRow.parentElement.removeChild(bookRow);
      }
    });

    // remove from localstorage
    localStorage.setItem('bookList', JSON.stringify(bookList));
    this.bookList = bookList;
    
    // re-render dom
    ui.renderBookList();
  }
}

const ui = new UI();
ui.form.addEventListener('submit',  function(e) {
  e.preventDefault();
  ui.formSubmit();
});

ui.bookTable.addEventListener('click',function(e){
  e.preventDefault();
  if(e.target.className == 'delete' && e.target.tagName == 'A'){
    ui.removeFromBookList(e.target.parentElement.parentElement);
  }
})

ui.renderBookList();
