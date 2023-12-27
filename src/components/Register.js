import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function Register() {
  const history = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [age, setAge] = useState("");
  const [dirty, setDirty] = useState(true);

  let students = {
    firstName: firstName,
    lastName: lastName,
    email: emailAddress,
    age: age,
  };
  function CancelHandle() {
    setFirstName("");
    setLastName("");
    setEmailAddress("");
    setAge("");
  }
  function HandleChange1(e) {
    setFirstName(e.target.value);
    if (firstName === "") {
      setDirty(!dirty);
    } else {
      setDirty("");
    }
  }
  function HandleChange2(e) {
    setLastName(e.target.value);
    if (lastName === "") {
      setDirty(!dirty);
    } else {
      setDirty("");
    }
  }
  function HandleChange3(e) {
    setEmailAddress(e.target.value);
    if (emailAddress === "") {
      setDirty(!dirty);
    } else {
      setDirty("");
    }
  }
  function HandleChange4(e) {
    setAge(e.target.value);
    if (age === "") {
      setDirty(!dirty);
    } else {
      setDirty("");
    }
  }
  function SubmitForm(e) {
    e.preventDefault();
  }
  function AddSubmitForm(e) {
    e.preventDefault();
    if (firstName === "") {
      alert("please enter your Name");
    } else if (lastName === "") {
      alert("please enter your last name");
    } else if (emailAddress === "") {
      alert("please enter a valid email address");
    } else if (age.length > 2 || age === "") {
      alert("please enter a valid age");
    } else {
      axios
        .post("http://localhost:8080/api/v1/student", students)
        .then((res) => {
          return history("/listOfStudents");
        });

      setFirstName("");
      setLastName("");
      setEmailAddress("");
      setAge("");
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-7 offset-md-3 ">
          <h4 className="text-center">Add Students</h4>
          <div className="card-body">
            <form onSubmit={SubmitForm} className="registerForm">
              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  placeholder="first name"
                  name="firstName"
                  value={firstName}
                  onChange={HandleChange1}
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>last name</label>
                <input
                  type="text"
                  placeholder="last name"
                  name="lastName"
                  value={lastName}
                  onChange={HandleChange2}
                  required
                  className="form-control"
                />
              </div>{" "}
              <div className="form-group">
                <label> email address</label>
                <input
                  type="text"
                  placeholder="email address"
                  required
                  name="emailAddress"
                  value={emailAddress}
                  onChange={HandleChange3}
                  className="form-control"
                />
              </div>{" "}
              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  placeholder="age"
                  name="age"
                  value={age}
                  onChange={HandleChange4}
                  required
                  className="form-control"
                />
              </div>
              <Button
                disabled={dirty}
                className="btn btn-success"
                onClick={AddSubmitForm}
              >
                Save
              </Button>
              <Button
                onClick={CancelHandle}
                className="btn btn-danger"
                style={{ marginLeft: "20px" }}
              >
                Cancel
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
