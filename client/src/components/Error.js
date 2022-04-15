import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
      <p>
        We're sorry, but we could not find the author you are looking for. <br />
        Would you like to <Link to={"/new"}>add an author</Link> to our database?
      </p>
    </div>
  );
};

export default Error;
