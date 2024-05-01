import logo from './logo.svg';
import './App.css';

import React from 'react';
import Table from 'react-bootstrap/Table';
import { About } from './about';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Home() {
    return (
        <div className="background">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
                    {' Fadi\'s Portfolio'}
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                </Container>
            </Navbar>

            <Container className="text-center mt-5">
                <h1>Fadi's Website</h1>
                <p>Welcome to my portfolio homepage.</p>
            </Container>
        </div>
    );

}