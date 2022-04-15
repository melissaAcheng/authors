import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const createAuthor = (e) => {
    e.preventDefault();
    console.log(name);
    axios
      .post("http://localhost:8000/api/authors", { name })
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
        <h3>Add a new author:</h3>
        <form onSubmit={createAuthor}>
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

export default Form;
