import React, { useEffect, useState } from "react";
//import StudentsServices from "../server/StudentsServices";
import { Link } from "react-router-dom";
function ListStudents() {
  const [students, setStudents] = useState([]);
  //const [data, setData] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/student")
      .then((response) => {
        return response.json();
      })
      .then((students) => {
        console.log(students);
        return setStudents(students);
      });
  });

  return (
    <div className="container">
      <Link to="/">Register Student</Link>
      <div className="row">
        <h2 style={{ textAlign: "center" }}>List of Students</h2>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>id </th>
              <th> First Name </th>
              <th> Last Name </th>
              <th> Age </th>
              <th> EmailAddress </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, age) => (
              <tr key={student.age}>
                <td>{student.id}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.age}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ListStudents;
