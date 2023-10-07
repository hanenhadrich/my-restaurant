import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function AppNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Task Manager</Navbar.Brand>
        <Nav className="d-flex align-items-center" >
          <Nav.Link as={NavLink} to="/tasks">Tasks</Nav.Link>
          <Nav.Link as={NavLink} to="/collaborators">Collaborators</Nav.Link>
          <Button size="sm" as={Link} to="/create-task" >Create Task</Button>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default AppNavbar