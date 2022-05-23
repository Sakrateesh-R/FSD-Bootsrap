import { Link } from "react-router-dom";
import  {Table, Container, Row, Col, Button, ButtonGroup, Form, Navbar,Nav, NavbarBrand, FormGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Demo App</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/Signup">Signup</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        /*<Navbar bg="dark" variant="light" >
            <Navbar.Brand className="Link" Style={{justifyContent:"space-around"}}>
                <Link to = '/'>Home</Link>
                <Link to = '/login'>Login</Link>
                <Link to = '/Signup'>SignUp</Link>
            </Navbar.Brand>
        </Navbar>*/
        
    );
  }
