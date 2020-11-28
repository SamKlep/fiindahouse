import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const LatestListItem = ({ listing }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 col-lg-4 mb-4'>
          <div className='card listing-preview'>
            <img className='card-img-top' src={listing.photo_main} alt='' />
            <div className='card-img-overlay'>
              <h2>
                <span className='float-left badge badge-success text-white'>
                  $ {listing.price}
                </span>
              </h2>
            </div>
            <div className='card-body'>
              <div className='listing-heading text-center'>
                <Link to={`/listing/${listing._id}`}>
                  <h4 className='text-primary'>{listing.title}</h4>
                </Link>
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
                  <i className='fas fa-th-large p-2'></i> <strong>Sqft:</strong>
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

              <Link to={`/listing/${listing._id}`}>
                <Button className='btn btn-primary btn-block'>More Info</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestListItem
