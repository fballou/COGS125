import logo from './logo.svg';
import './App.css';

import React from 'react';
import Table from 'react-bootstrap/Table';
import { About } from './about';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="background">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                <Navbar.Brand>
                    <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
                    {' Fadi\'s Portfolio'}
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/COGS125.github.io/home">Home</Link>
                    <Link to="/COGS125.github.io/about">About</Link>
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