import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function App() {
  return (
    <div className="background">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
            {' Fadi\'s Portfolio'}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
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

export default App;
