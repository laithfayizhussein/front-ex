import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';


export class Header extends Component {
    render() {
        return (
            <div>
                <Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/">main</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="/favorite">favorite</Nav.Link>
  </Nav.Item>
</Nav>
                
            </div>
        )
    }
}

export default Header
