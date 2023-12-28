import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="container"  style={{margin: '30px auto',height: '100px',
      textAlign: "center",
      background: "black",
      color: "white",
      fontStyle: "Arial",display: "flex", justifyContent: 'space-around', alignItems: 'center',
    }}>
        {/* <div
      <div className="row">
          className="nav"
          style={{
            textAlign: "center",
            background: "black",
            color: "white",
            fontStyle: "Arial",
          }}
        > */}
          <h2>Students Management App</h2>
          <Link to="listStudents">ListStudents</Link>
        {/* </div> */}
      {/* </div> */}
    </div>
  );
}
