import React from 'react'
import Listings from '../listings/Listings'
import { Container, Row, Col } from 'react-bootstrap'

const FeaturedScreen = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Listings />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FeaturedScreen
