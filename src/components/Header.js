import React from 'react';
import { Navbar, Nav, Form, FormControl,Button, NavDropdown} from 'react-bootstrap';
import './Header.css'

class Header extends React.Component {
    state= { term: ''};


    onInputChange = event => {
      this.setState({ term: event.target.value });

    };

    onFormSubmit = event => {
      event.preventDefault();

      this.props.onFormSubmit(this.state.term);
    };


    render() {
        return (
            <Navbar className="navbar-container" expand="lg">
            <Navbar.Brand className="brand" href="#home"><div className="name">FiCINEMA</div></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline onSubmit={this.onFormSubmit} >
                <FormControl
                 type="text" 
                 value={this.state.term}
                 onChange={this.onInputChange}
                 placeholder="Search" 
                 className="mr-sm-2" 
                 />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default Header;