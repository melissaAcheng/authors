import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DisplayAll = () => {
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        console.log(res.data);
        setNameList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteAuthor = (id) => {
    axios
      .delete(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        console.log(res);
        const filteredAuthors = nameList.filter((name, index) => {
          return name._id != id;
        });
        setNameList(filteredAuthors);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h1>Favorite Authors</h1>
      <Link to={"/new"}>Add an author</Link>
      <div>
        <h3>We have quotes by:</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Author</th>
              <th>Actions available</th>
            </tr>
          </thead>
          <tbody>
            {nameList
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((author, index) => {
                return (
                  <tr key={index}>
                    <td>{author.name}</td>
                    <td>
                      <button className="btn-info mx-1">
                        <Link to={`/edit/${author._id}`}>Edit</Link>
                      </button>
                      <button className="btn-danger mx-1" onClick={() => deleteAuthor(author._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayAll;
