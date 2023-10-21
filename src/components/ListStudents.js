import React, { Component } from "react";
import StudentsServices from "../server/StudentsServices";
import { Link } from "react-router-dom";
//import { Container } from "react-bootstrap/Container";
class ListStudents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
  
  }
  componentDidMount() {
    StudentsServices.getStudents().then((res) => {
      this.setState({ students: res.data });
    });
  }
  render() {
    return (
      <div className="container">
        <Link to='/register student'>Register Student</Link>
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
              {this.state.students.map((student) => 
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.age}</td>
                  <td>{student.email}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ListStudents;
