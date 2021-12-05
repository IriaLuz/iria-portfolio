import React from 'react';
import  Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { graphql, useStaticQuery} from 'gatsby'

function Header(props) {
    const navbarQueryResponse = useStaticQuery(graphql`
query navBar {
    contentfulNavbar(name: {eq: "Navbar"}) {
      links {
        slug
        name
      }
    }
  }  
`)
const navbarData = navbarQueryResponse.contentfulNavbar
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    
                    <Navbar.Brand href="/">Iria Portfolio</Navbar.Brand>
                    <Nav className="me-auto">
                        {navbarData.links.map((link)=>
                            <Nav.Link href={link.slug==="home"?"/":link.slug}>{link.name}</Nav.Link>
                        )}
                        <Nav.Link href="https://thegoldenshoe-irialuz.netlify.app/">TGS</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    );
}

export default Header;