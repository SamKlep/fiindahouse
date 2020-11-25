import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Row, Col, Jumbotron } from 'react-bootstrap'
import LatestListItem from './LatestListItem'

const LatestContainer = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`/api/listings`)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (loading) {
    return <p>Loading listings...</p>
  }

  return (
    <div className='container mt-3 text-center'>
      <h1 className='text-dark'>Latest Listings</h1>

      <Row>
        <br />
        <Col>
          <section className='cards'>
            {data.map((listing, _id) => (
              <LatestListItem key={_id} listing={listing} />
            ))}
          </section>
        </Col>
      </Row>
    </div>
  )
}

export default LatestContainer
