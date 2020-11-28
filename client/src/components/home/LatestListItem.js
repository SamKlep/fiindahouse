import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Card, Row, Col, Button, ListGroup } from 'react-bootstrap'

const LatestListItem = ({ listing }) => {
  return (
    <Container className='justify-content-md-center'>
      <Card className='mb-5'>
        <Link to={`/listings/${listing._id}`}>
          <Card.Img variant='top' src={listing.photo_main} alt='serial' fluid />
        </Link>
        <Card.Body>
          <Link to={`/listings/${listing._id}`}>
            <Card.Title>
              <strong>
                <h4>{listing.title}</h4>
              </strong>
            </Card.Title>
          </Link>

          <Card.Text>
            <Container>
              <Row>
                <Col>
                  <p className='p-2'>
                    <i className='fas fa-map-marker text-secondary p-2'></i>
                    {listing.address.street}
                    {listing.address.city}
                    {listing.address.state}
                    {listing.address.zipcode}
                  </p>
                </Col>
              </Row>
            </Container>

            <Container>
              <Row>
                <Col>
                  <ListGroup>
                    <ListGroup.Item>
                      <strong>Bedrooms:</strong> {listing.bedrooms}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Bathrooms:</strong> {listing.bathrooms}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Garage:</strong> {listing.garage}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Square Ft:</strong> {listing.sqft}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Lot Size:</strong> {listing.lot_size}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button className='btn btn-block'>Learn More</Button>
        </Card.Footer>
      </Card>
    </Container>
  )
}

export default LatestListItem
