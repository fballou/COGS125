import logo from './logo.svg';
import deer from './deer.jpeg';
import './App.css';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function About() {
    
    return (
        <div className="background">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                <Navbar.Brand >
                    <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
                    {' Fadi\'s Portfolio'}
                </Navbar.Brand>
                <Nav className="me-auto">
                <Link to="/COGS125.github.io/home">Home</Link>
                    <Link to="/COGS125.github.io/about">About</Link>
                </Nav>
                </Container>
            </Navbar>
            <div class="who-i-am">
              <p class="my-career">Software Engineer & UX Designer</p>
              <p class="my-info">
                Hello, my name is Fadi Ballou. I'm a junior at UCSD studing Cognitive Science w/Design & Interaction and Computer Science. I've worked in the UX Design industry and have had 2 internships in Software Engineering. I aspire to use my skills to become a Full Stack Developer that's capable of designing an optimal front end and creating a functional backend as well.
              </p>
              <button type="button" class="btn btn-light contact-me">Contact Me</button>
            </div>
            {/* <img src="/src/images/deer.jpeg" alt="Deer why don't you work?" className="deer-image" /> */}
            <img src={deer} alt="deer image" className="deer-image" />
        </div>
    );



}

export default About;

