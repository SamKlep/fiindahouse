import React, { useState, useEffect } from 'react'
import axios from 'axios'

const About = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`/api/realtors/5fc18c858cc7bd74132b0ab9`)
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
      <section id='about' className='py-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <h2>We Search For The Perfect Home</h2>
              <p className='lead'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
                pariatur!
              </p>
              <img src='' alt='' />
              <p className='mt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis esse officia repudiandae ad saepe ex, amet neque
                quod accusamus rem quia magnam magni dolorum facilis ullam
                minima perferendis? Exercitationem at quaerat commodi id libero
                eveniet harum perferendis laborum molestias quia.
              </p>
            </div>

            <div className='col-md-4'>
              <div className='card'>
                <img
                  className='card-img-top'
                  src={data.photo}
                  alt='Seller of the month'
                />
                <div className='card-body text-center'>
                  <h5 className='card-title'>Seller Of The Month</h5>
                  <h6 className='text-secondary'>{data.name}</h6>
                  <p className='card-text'>{data.email}</p>
                  <p className='card-text'>{data.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
