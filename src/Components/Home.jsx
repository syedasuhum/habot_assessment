import React from "react";
import { Navbar, Nav,NavDropdown, Container,Row, Col, Form, Button,InputGroup    } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '../Assesst/Style.css';
import logo from '../Assesst/Images/habot-logo.jpg';
import { MdHomeRepairService, MdLocationPin} from "react-icons/md";
const Home=()=>{
    return(
        <div style={{boxShadow: "0px 9px 26px 0px #7373731A" } }>

  <Navbar expand="lg" style={{ alignItems:"center", display:"flex"}}>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="logo" className="logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#Suppliers">Find Suppliers</Nav.Link>
            <NavDropdown title="Find Service tags" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        </NavDropdown>
            
            <Nav.Link href="#signup"><button className="login">Login/Signup</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="hero-section">
      <Container className="text-center hero-content">
        <h1 className="hero-header">Are You a Supplier?</h1>
        <h2 className="hero-text">Explore Matching Opportunities.</h2>
        <Row className="justify-content-center mt-4">
        <Col md={4}>
        <InputGroup className="mb-3">
        <InputGroup.Text style={{backgroundColor:"white", border:"none"}}>
        <MdHomeRepairService size={22} color="#E7760D" />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search your requried services here"
          
        />
      </InputGroup>
        
        </Col>
        <Col md={4}>
        <InputGroup className="mb-3">
        <InputGroup.Text style={{backgroundColor:"white", border:"none"}}>
        <MdLocationPin  size={22} color="#E7760D" />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search your desried location here"
        />
      </InputGroup>
        </Col>
        
          <Col md={1}>
            <Button className="search_btn">Search</Button>
          </Col>
          
        </Row>
        <Row >
        <div className="d-flex justify-content-center">
            <h4 className="hero-para">Are you a buyer?</h4>
            <p className="hero-a">Click here if you are looking to post a requirements</p>
        </div>
        </Row>
        
      </Container>
    </div>
  </div>

    );
}
export default Home;