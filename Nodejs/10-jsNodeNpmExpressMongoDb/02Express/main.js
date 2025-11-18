import express from "express";
import bookRoutes from "./routes/bookRoutes.js";
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(bookRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Hello World </h1>");
});

app.listen(port, async (e) => {
  try {
    console.log("Open Servidor");
  } catch {
    console.log("error: " + e);
  }
});
