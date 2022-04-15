import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const { id } = useParams();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
      })
      .catch((err) => {
        console.log(err);
        navigate("/error");
      });
  }, []);

  const updateAuthor = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/authors/${id}`, { name })
      .then((res) => {
        console.log("success", res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log("error", err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <h1>Favorite Authors</h1>
      <Link to={"/"}>Home</Link>
      <div>
        <h3>Edit this author</h3>
        <form onSubmit={updateAuthor}>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
          <div className="m-3">
            <button className="mx-2" type="submit">
              Submit
            </button>
            <button className="mx-2">
              <Link to={"/"}>Cancel</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
