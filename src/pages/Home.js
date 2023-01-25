import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="navigation">
      <h1>Homepage, click on assignment</h1>
    
      <ul>
        <li>
          <Link to="/assignement">Assignement</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
