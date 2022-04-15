const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
  app.post("/api/authors", AuthorController.createNewAuthor);
  app.get("/api/authors", AuthorController.getAllAuthors);
  app.get("/api/authors/:id", AuthorController.getOneAuthor);
  app.put("/api/authors/:id", AuthorController.updateOneAuthor);
  app.delete("/api/authors/:id", AuthorController.deleteOneAuthor);
};
