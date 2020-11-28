import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Listings = () => {
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
    <div>
      <section id='showcase-inner' className='py-5'>
        <div className='container text-dark'>
          <div className='row text-center'>
            <div className='col-md-12'>
              <h1 className='display-4'>Browse Our Properties </h1>
              <p className='lead'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
                pariatur!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='bc' className='mt-3'>
        <div className='container'>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <a href="{% url 'index' %}">
                  <i className='fas fa-home'></i> Home
                </a>
              </li>
              <li className='breadcrumb-item active'> Browse Listings</li>
            </ol>
          </nav>
        </div>
      </section>

      <section id='listings' className='py-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-lg-4 mb-4'>
              {data.map((listing, _id) => (
                <div className='card listing-preview'>
                  <img
                    className='card-img-top'
                    src={listing.photo_main}
                    alt=''
                  />
                  <div className='card-img-overlay'>
                    <h2>
                      <span className='badge badge-secondary text-white'>
                        $ {listing.price}
                      </span>
                    </h2>
                  </div>
                  <div className='card-body'>
                    <div className='listing-heading text-center'>
                      <h4 className='text-primary'>{listing.title}</h4>

                      <p>
                        <i className='fas fa-map-marker text-secondary p-2'></i>
                        {listing.address.street}
                        {listing.address.city}
                        {listing.address.state}
                        {listing.address.zipcode}
                      </p>
                    </div>
                    <hr />
                    <div className='row py-2 text-secondary'>
                      <div className='col-6'>
                        <i className='fas fa-th-large p-2'></i>{' '}
                        <strong>Sqft:</strong>
                        {listing.sqft}
                      </div>
                      <div className='col-6'>
                        <i className='fas fa-car p-2'></i>
                        <strong> Garage:</strong>
                        {listing.garage}
                      </div>
                    </div>
                    <div className='row py-2 text-secondary'>
                      <div className='col-6'>
                        <i className='fas fa-bed p-2'></i>
                        <strong> Bedrooms:</strong>
                        {listing.bedrooms}
                      </div>
                      <div className='col-6'>
                        <i className='fas fa-bath p-2'></i>
                        <strong> Bathrooms:</strong>
                        {listing.bathrooms}
                      </div>
                    </div>
                    <hr />
                    <div className='row py-2 text-secondary'>
                      <div className='col-12'>
                        <i className='fas fa-user p-2'></i>
                        {listing.realtor}
                      </div>
                    </div>
                    <div className='row text-secondary pb-2'>
                      <div className='col-6'>
                        <i className='fas fa-clock p-2'></i>
                        {listing.createdAt}
                      </div>
                    </div>
                    <hr />
                    <Link to={`/listings/${listing._id}`}>
                      <Button className='btn btn-primary btn-block'>
                        More Info
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* <div class='col-md-12'>
              <p>No Listings Available</p>
            </div> */}

            <div className='row'>
              <div className='col-md-12'>
                {/* <ul className='pagination'>
                  <li className='page-iitem'>
                    <a
                      href='?page={{listings.previous_page_number}}'
                      className='page-link'>
                      &laquo;
                    </a>
                  </li>

                  <li className='page-item disabled'>
                    <a className='page-link'>&laquo;</a>
                  </li>

                  <li className='page-item active'>
                    <a className='page-link'></a>
                  </li>

                  <li className='page-item'>
                    <a href='?page={{i}}' className='page-link'></a>
                  </li>

                  <li className='page-iitem'>
                    <a href='?page=' className='page-link'>
                      &raquo;
                    </a>
                  </li>

                  <li className='page-item disabled'>
                    <a className='page-link'>&raquo;</a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Listings
