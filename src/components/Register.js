import React, { Component } from "react";
import { Button } from "react-bootstrap";
//import StudentTable from "./StudentTable";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName : '',
      lastName: '',
      email: '',
      age: ''

    }
    this.AddSubmitForm = this.AddSubmitForm.bind(this);
    this.HandleChange1 = this.HandleChange1.bind(this);
    this.HandleChange2= this.HandleChange2.bind(this);
    this.HandleChange3 = this.HandleChange3.bind(this);
    this.HandleChange4 = this.HandleChange4.bind(this);
    this.CancelHandle = this.CancelHandle.bind(this);

  };
  CancelHandle(){
    <Link to="/studentDetails">StudentTable</Link>
    this.setState({firstName: ""});
    this.setState({lastName: ""});
    this.setState({emailAddress: ""});
    this.setState({age:""});
  }
    HandleChange1(e){
this.setState({firstName: e.target.value});
}
HandleChange2(e){
  this.setState({lastName: e.target.value});
  
}
HandleChange3(e){
  this.setState({emailAddress: e.target.value});
  
}
HandleChange4(e){
  this.setState({age: e.target.value});
  
}
SubmitForm(e){
e.preventDefault();
}
AddSubmitForm(e){
  e.preventDefault();
 let students = {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    emailAddress: this.state.emailAddress,
    age: this.state.age,
  }
  console.log(" student =>" + JSON.stringify(students));
   this.setState({firstName: ""});
this.setState({lastName: ""});
this.setState({emailAddress: ""});
this.setState({age:""});
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offest-md-3 offset-md-3">
            <h4 className="text-center">Add Students</h4>
            <div className="card-body">
              <form className="registerForm">
                <div className="form-group">
                  <label>First name</label>
                  <input
                    type="text"
                    placeholder="first name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.HandleChange1}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>last name</label>
                  <input
                    type="text"
                    placeholder="last name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.HandleChange2}
                    className="form-control"
                  />
                </div>{" "}
                <div className="form-group">
                  <label> email address</label>
                  <input
                    type="text"
                    placeholder="email address"
                    name="emailAddress"
                    value={this.state.emailAddress}
                    onChange={this.HandleChange3}
                    className="form-control"
                  />
                </div>{" "}
                <div className="form-group">
                  <label>Age</label>
                  <input
                    type="number"
                    placeholder="age"
                    name="age"
                    value={this.state.age}
                    onChange={this.HandleChange4}
                    className="form-control"
                  />
                </div>
                <Button className="btn btn-success" onClick={this.AddSubmitForm} >Save</Button>
                <Button onClick={this.CancelHandle.bind(this)} className="btn btn-danger" style={{marginLeft: '20px'}}>Cancel</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
