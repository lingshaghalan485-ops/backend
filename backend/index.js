import express from "express"

import bookRoutes from "./routes/book.route.js";
const app = express();

app.use(express.json());
app.use("/books",bookRoutes);

app.get('/',(req, res)=>{
    res.send("server is running");
});

app.get("/about",(req,res)=>{
    res.send("This is about page");
});

let books = [
    {
        id:1,
        title: "book one",
        author:"author A"
    },
    {
        id:2,
        title: "book two",
        author:"author B",
    },
    
];
app.get("/books",(req,res)=>{
    res.json(books);
});

app.get("/books/:id",(req,res)=>{
    console.log(req.params)
    const book = books.find((b) => b.id === parseInt(req.params.id));
    if (!book) {
        return res.json({
            message:"books not found",
        })
    }

    res.json(book);

});

app.post("/books",(req,res)=> {
    
    const{title,author}=req.body;
    const newBook = { id: books.length + 1, title, author};
    books.push(newBook);
    console.log(books)
    res.json(newBook);
})


app.put("/books/:id",(req, res)=>{
    const {title, author} = req.body;
    const book = books.find((b) =>b.id === parseInt(req.params.id));
    book.title = title;
    book.author = author;
    console.log(book)
    res.json(book);
});

app.delete("/books/:id",(req, res)=>{
    books = books.filter((b) => b.id !== parseInt(req.params.id));
    console.log(books)
    res.json({message:"book deleted"});
});
app.listen(3000, () => {
    console.log("server is running on port 8000")
})