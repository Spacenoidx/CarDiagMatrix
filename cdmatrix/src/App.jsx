import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Nav, Navbar, NavbarBrand, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container
        className="m-0 p-0"
        fluid
        style={{
          height: "100vh",
          width: "100vw",
          border: "5px red inset",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        {/* <Navbar bg="dark" expand="lg" className="m-0 p-0 w-100">
          <NavbarBrand href="#home">CarDiagMatrix</NavbarBrand>
          <Nav.Link href="#home">Home</Nav.Link>
        </Navbar> */}
<Navbar bg="info" expand="lg" className="m-0 p-0 w-100">
  
    <Navbar.Brand href="#home" className="mx-4">ODDB</Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
    <Nav>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
        <Nav.Link href="#help">Help</Nav.Link>
        <Nav.Link href="#mycars" className="text-danger">My Cars</Nav.Link>
        
  </Nav>
  </Navbar.Collapse>
</Navbar>

      </Container>
    </>
  );
}

export default App;
