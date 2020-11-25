import React from 'react'
import { Card, Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const LatestListItem = ({ listing }) => {
  return (
    <Container className='justify-content-md-center'>
      <Card className=' mb-5'>
        <Link to={`/serials/${listing._id}`}>
          <Card.Img
            className='card-img-top'
            src={listing.photo_main}
            alt='serial'
            fluid
          />
        </Link>
        <Card.Body>
          <Link to={`/listings/${listing._id}`}>
            <Card.Title as='div'>
              <strong>
                <h4 className='serial-links'>{listing.title}</h4>
              </strong>
            </Card.Title>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default LatestListItem
