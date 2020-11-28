import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Image } from 'react-bootstrap'

const Team = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`/api/realtors`)
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
    <div>
      <section id='team' class='py-5'>
        <div class='container'>
          <h2 class='text-center'>Our Team</h2>
          <div class='row text-center'>
            {data.map((realtor, _id) => (
              <div class='col-md-4'>
                <Image
                  src={realtor.photo}
                  alt='Mvp'
                  class='rounded-circle mb-3'
                  fluid
                />
                <h4>{realtor.name}</h4>
                <p class='text-success'>
                  <i class='fas fa-award text-success mb-3'></i> Realtor
                </p>
                <hr />
                <p>
                  <i class='fas fa-phone p-2'></i>
                  {realtor.phone}
                </p>
                <p>
                  <i class='fas fa-envelope-open p-2'></i>
                  {realtor.email}
                </p>
              </div>
            ))}
            <div class='div col-md-12'>
              <p>No Realtors Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team
