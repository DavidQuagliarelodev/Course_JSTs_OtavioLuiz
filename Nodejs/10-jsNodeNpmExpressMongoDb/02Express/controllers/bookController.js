import bookService from "../services/bookService.js";
const bookController = {
  getAllBooks(req, res) {
    const mensage = bookService.getAllBooks();
    res.send(mensage);
  },

  getBookById(req, res) {
    const bookId = req.params.bookId;
    const book = bookService.getBookById(bookId);
    if (book != null) {
      res.send(`${book}`);
    } else {
      res.redirect("/");
    }
  },

  createBook(req, res) {
    const book = bookService.createBook(
      req.body.title,
      req.body.year,
      req.body.autor,
      req.body.category
    );
    res.status(201).send(book);
  },
};

export default bookController;
