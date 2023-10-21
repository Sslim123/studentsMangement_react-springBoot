import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
//import ListStudents from './ListStudents';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Register Students App</Navbar.Brand>
      </Container>
      <Link to="/listStudents" >ListStudents</Link>

    </Navbar>
  );
}

