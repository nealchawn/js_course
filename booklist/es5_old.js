const bookProtoType = {
  addBook: addBookFunction
  //deleteBook: addBookFunction,
}

// , {table_body: {value: document.getElementById('book-list')} }
const bookList = Object.create(bookProtoType);

bookList.table_body = document.getElementById('book-list')

function addBookFunction(){
  console.log(this.table_body);
  //this.table_body.addChild(tr);
}

// formId, titleId, authorId, isbnId
function formAction(book_list){
  this.formDom = document.getElementById('book-form');
  this.title = document.getElementById('title');
  this.author = document.getElementById('author');
  this.isbn = document.getElementById('isbn');
  this.book_list = book_list;
}
formAction.prototype.addBook = function(e, f){
  
  // validate form
  // add book to booklist
  // clear form
  console.log(this);
  console.log(arguments);
  console.log(f);
  e.preventDefault();

  this.book_list.addBook();
  console.log(arguments);
  console.log("test");
}

const form = new formAction(bookList);

form.formDom.addEventListener('submit', form.addBook);