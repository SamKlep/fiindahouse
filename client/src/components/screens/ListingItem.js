import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Container } from 'react-bootstrap'
import { SRLWrapper } from 'simple-react-lightbox'

const ListingItem = ({ match }) => {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchListing = async () => {
      const { data } = await axios.get(`/api/listings/${match.params.id}`)

      console.log(data)
      setData(data)
    }

    fetchListing()
    // eslint-disable-next-line
  }, [match])

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Link className='btn btn-dark my-3' to='/'>
              Go Back
            </Link>
            <Row className='justify-content-md-center  mb-5'>
              <Col md={6}>
                <Image src={data.photo_main} alt={data.title} fluid />
              </Col>
              <Col md={3}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <strong>
                      <h3>{data.title}</h3>
                    </strong>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>
                      <h5>{data.price}</h5>
                    </strong>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h6>{data.description}</h6>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>

            <div className='row justify-content-md-center'>
              <SRLWrapper>
                <div className='card-columns'>
                  <div className='card'>
                    <Image
                      className='img-thumbnail'
                      src={data.photo_1}
                      alt='Listing 1'
                    />
                  </div>

                  <div className='card'>
                    <Image
                      className='img-thumbnail'
                      src={data.photo_2}
                      alt='Listing 2'
                    />
                  </div>

                  <div className='card'>
                    <Image
                      className='img-thumbnail'
                      src={data.photo_3}
                      alt='Listing 3'
                    />
                  </div>

                  <div className='card'>
                    <Image
                      className='img-thumbnail'
                      src={data.photo_4}
                      alt='Listing 4'
                    />
                  </div>

                  <div className='card'>
                    <Image
                      className='img-thumbnail'
                      src={data.photo_5}
                      alt='Listing 5'
                    />
                  </div>

                  <div className='card'>
                    <Image
                      className='img-thumbnail'
                      src={data.photo_6}
                      alt='Listing 6'
                    />
                  </div>
                </div>
              </SRLWrapper>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ListingItem
