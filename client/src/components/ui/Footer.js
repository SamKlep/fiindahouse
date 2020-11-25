import React from 'react'
import { Nav, Container, Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <Nav id='main-footer' className='py-4 bg-dark text-white text-center'>
        <Container>
          <Row>
            <Col>
              Copyright &copy;
              <span class='year'> 2020 </span> Find A House Real Estate
            </Col>
          </Row>
        </Container>
      </Nav>
    </div>
  )
}

export default Footer
