const Author = require("../models/author.model");

module.exports = {
  // queries here
  createNewAuthor: (req, res) => {
    Author.create(req.body)
      .then((newAuthor) => {
        console.log(newAuthor);
        res.json(newAuthor);
      })
      .catch((err) => {
        console.log("createAuthor failed", err);
        res.status(400).json(err);
      });
  },
  getAllAuthors: (req, res) => {
    Author.find()
      .then((authors) => {
        console.log(authors);
        res.json(authors);
      })
      .catch((err) => {
        console.log("getAllAuthors failed", err);
        res.json(err);
      });
  },
  getOneAuthor: (req, res) => {
    Author.findOne({ _id: req.params.id })
      .then((oneAuthor) => {
        console.log(oneAuthor);
        res.json(oneAuthor);
      })
      .catch((err) => {
        console.log("getOneAuthor failed", err);
        res.status(400).json(err);
      });
  },
  updateOneAuthor: (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then((updatedAuthor) => {
        console.log(updatedAuthor);
        res.json(updatedAuthor);
      })
      .catch((err) => {
        console.log("updateAuthor failed", err);
        res.status(400).json(err);
      });
  },
  deleteOneAuthor: (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then((deletedAuthor) => {
        console.log(deletedAuthor);
        res.json(deletedAuthor);
      })
      .catch((err) => {
        console.log("deleteOneAuthor failed", err);
        res.json(err);
      });
  },
};
