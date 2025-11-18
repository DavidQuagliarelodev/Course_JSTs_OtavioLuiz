import express from "express";
import bookController from "../controllers/bookController.js"
const routes = express.Router();

routes.get("/books", bookController.getAllBooks);

routes.get("/book/{:bookId}", bookController.getBookById);

routes.post("/book", bookController.createBook);

export default routes;
