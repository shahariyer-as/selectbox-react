import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul className="nav d-flex justify-content-center">
        <Link
          className="mx-2 text-decoration-none bg-danger p-2 rounded text-light  border-none"
          to="input"
        >
          Home
        </Link>

        <Link
          className="mx-2 text-decoration-none bg-danger p-2 rounded text-light  border-none"
          to="data"
        >
          My data
        </Link>
      </ul>
    </div>
  );
};

export default Home;
