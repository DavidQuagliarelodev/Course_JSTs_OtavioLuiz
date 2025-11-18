const bookService = {
  getAllBooks() {
    return "<h1>Hello World</h1>";
  },

  getBookById(id) {
    if (id) {
      return `This is Book for id: ${id}`;
    } else {
      null;
    }
  },

  createBook(title, year, autor, category) {
    const book = {
      title: title,
      year: year,
      autor: autor,
      category: category,
    };
    return book;
  },
};
export default bookService;