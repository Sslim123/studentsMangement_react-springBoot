import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="nav"
          style={{
            textAlign: "center",
            background: "black",
            color: "white",
            fontStyle: "Arial",
          }}
        >
          <h2>Students Manger App</h2>
          <Link to="listStudents">ListStudents</Link>
        </div>
      </div>
    </div>
  );
}
