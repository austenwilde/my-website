// import { Link } from 'react-router-dom';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

const MainNavbar = () => (
<Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="/">Austen Wilde</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="Click Me" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Projects</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Resume</NavDropdown.Item>
          {/* <NavDropdown.Item href="#action/3.3">idk</NavDropdown.Item> */}
          <NavDropdown.Divider />
            <NavDropdown.Item
               href="messages"> Contact me
            </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)

export default MainNavbar;