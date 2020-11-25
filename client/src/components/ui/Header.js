import React from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Nav id='top-bar' class='p-3'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-4'>
              <i class='fas fa-phone'></i> (713)-555-5555
            </div>
            <div class='col-md-4'>
              <i class='fas fa-envelope-open'></i> contact@findahouse.info
            </div>
            <div class='col-md-4'>
              <div class='social text-right'>
                <a href='https'>
                  <i class='fab fa-twitter'></i>
                </a>
                <a href='https://twitter.com/'>
                  <i class='fab fa-facebook'></i>
                </a>
                <a href='https://facebook.com/'>
                  <i class='fab fa-linkedin'></i>
                </a>
                <a href='https://instagram.com/'>
                  <i class='fab fa-instagram'></i>
                </a>
                <a href='https://pinterest.com/'>
                  <i class='fab fa-pinterest'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Nav>
      <Navbar variant='dark' bg='dark' expand='lg'>
        <Navbar.Brand href='/'>
          <Image className='logo' src='img/logo.png' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/listings'>Featured Listings</Nav.Link>
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
