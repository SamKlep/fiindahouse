import React from 'react'
import { Navbar, Nav, Image, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Nav id='top-bar' class='p-3'>
        <Container>
          <Row>
            <Col md={4}>
              <i className='fas fa-phone'></i> (713)-555-5555
            </Col>
            <Col md={4}>
              <i className='fas fa-envelope-open'></i> contact@findahouse.info
            </Col>
            <Col md={4}>
              <div className='social text-right'>
                <a href='https'>
                  <i className='fab fa-twitter'></i>
                </a>
                <a href='https://twitter.com/'>
                  <i className='fab fa-facebook'></i>
                </a>
                <a href='https://facebook.com/'>
                  <i className='fab fa-linkedin'></i>
                </a>
                <a href='https://instagram.com/'>
                  <i className='fab fa-instagram'></i>
                </a>
                <a href='https://pinterest.com/'>
                  <i className='fab fa-pinterest'></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Nav>
      <Navbar variant='dark' bg='dark' expand='lg'>
        <Navbar.Brand href='/'>
          <Image className='logo' src='img/logo.png' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto p-2'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/listings'>Featured Listings</Link>
          </Nav>
          <Nav.Link>
            <Link className='nav-link' to='/register'>
              <i className='fas fa-user-plus'></i> Register
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className='nav-link' to='/login'>
              <i className='fas fa-sign-in-alt'></i> Login
            </Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
