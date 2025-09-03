let books = [
  {
    id: 1,
    title: "Book One",
    author: "Author A",
  },
  {
    id: 2,
    title: "Book Two",
    author: "Author B",
  },
];
const createBook = (req, res) =>{
    const{title,author}=req.body;
    const newBook = { id: books.length + 1, title, author};
    books.push(newBook);
    console.log(books)
    res.json(newBook);

};
const getBook = (req, res) =>{
    res.send (books);
};
const getBookById = (req,res)=>{

const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    return res.json({
      message: "Book not found",
    });
  }
  res.json(book);
};
const updateBook = (req,res)=>{

const {title, author} = req.body;
    const book = books.find((b) =>b.id === parseInt(req.params.id));
    book.title = title;
    book.author = author;
    console.log(book)
    res.json(book) 
};
const deleteBook = (req,res)=>{

 books = books.filter((b) => b.id !== parseInt(req.params.id));
    console.log(books)
    res.json({message:"book deleted"});
};
export {createBook,getBook,getBookById,updateBook,deleteBook};