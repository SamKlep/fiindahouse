import React from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Nav id='top-bar'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <i className='fas fa-phone'></i> (713)-555-5555
            </div>
            <div className='col-lg-4'>
              <i className='fas fa-envelope-open'></i> contact@findahouse.info
            </div>
            <div className='col-md-4'>
              <div className='social text-right'>
                <a href='https://www.twitter.com'>
                  <i className='fab fa-twitter'></i>
                </a>
                <a href='https://www.facebook.com'>
                  <i className='fab fa-facebook'></i>
                </a>
                <a href='https://www.linkedin.com'>
                  <i className='fab fa-linkedin'></i>
                </a>
                <a href='https://www.instagram.com'>
                  <i className='fab fa-instagram'></i>
                </a>
                <a href='https://www.pinterest.com'>
                  <i className='fab fa-pinterest'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Nav>
      <Navbar variant='dark' bg='dark' expand='lg'>
        <Navbar.Brand href='/'>
          <Image className='logo' src='img/logo.png' fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>About</Nav.Link>
            <Nav.Link href='#link'>Featured Listings</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='#link'>
              <a className='nav-link' href='/register'>
                <i className='fas fa-user-plus'></i> Register
              </a>
            </Nav.Link>
            <Nav.Link href='#link'>
              {' '}
              <a className='nav-link' href='/login'>
                <i className='fas fa-sign-in-alt'></i>
                Login
              </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
