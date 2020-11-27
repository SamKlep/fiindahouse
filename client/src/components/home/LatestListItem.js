import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'

const LatestListItem = ({ listing }) => {
  return (
    <Container className='justify-content-md-center'>
      <Card className=' mb-5'>
        <Link to={`/listings/${listing._id}`}>
          <Card.Img
            className='card-img-top'
            src={listing.photo_main}
            alt='serial'
            fluid
          />
        </Link>
        <Card.ImgOverlay>
          <Card.Title>
            <span className='badge badge-info text-white'>
              ${listing.price}
            </span>
          </Card.Title>
        </Card.ImgOverlay>
        <Card.Body>
          <Link to={`/serials/${listing._id}`}>
            <Card.Title as='div'>
              <strong>
                <h4>{listing.title}</h4>
              </strong>
            </Card.Title>
          </Link>
          <p>
            <i className='fas fa-map-marker text-secondary'></i>
            {listing.address.street}
            {listing.address.city}
            {listing.address.state}
            {listing.address.zipcode}
          </p>
        </Card.Body>
      </Card>
    </Container>
    // <section id='listings' class='py-5'>
    //   <div className='container'>
    //     <div className='row'>
    //       <div className='col-md-6 mb-4'>
    //         <div className='card listing-preview'>
    //           <img className='card-img-top' src={listing.photo_main} alt='' />
    //           <div className='card-img-overlay'>
    //             <h2>
    //               <span className='badge badge-secondary text-white'>
    //                 ${listing.price}
    //               </span>
    //             </h2>
    //           </div>
    //           <div className='card-body'>
    //             <div className='listing-heading text-center'>
    //               <h4 className='text-primary'>{listing.title}</h4>
    //               <p>
    //                 <i className='fas fa-map-marker text-secondary'></i>
    //                 {listing.address.street}
    //                 {listing.address.city}
    //                 {listing.address.state}
    //                 {listing.address.zipcode}
    //               </p>
    //             </div>
    //             <hr />
    //             <div className='row py-2 text-secondary'>
    //               <div className='col-6'>
    //                 <i className='fas fa-th-large'></i> Sqft:{listing.sqft}
    //               </div>
    //               <div className='col-6'>
    //                 <i className='fas fa-car'></i> Garage:{listing.garage}
    //               </div>
    //             </div>
    //             <div className='row py-2 text-secondary'>
    //               <div className='col-6'>
    //                 <i className='fas fa-bed'></i> Bedrooms:{listing.bedrooms}
    //               </div>
    //               <div className='col-6'>
    //                 <i className='fas fa-bath'></i> Bathrooms:
    //                 {listing.bathrooms}
    //               </div>
    //             </div>
    //             <hr />
    //             <div className='row py-2 text-secondary'>
    //               <div className='col-6'>
    //                 <i className='fas fa-user'></i>{' '}
    //               </div>
    //             </div>
    //             <div className='row text-secondary pb-2'>
    //               <div className='col-6'>
    //                 <i className='fas fa-clock'></i>
    //                 {listing.createdAt}
    //               </div>
    //             </div>
    //             <hr />
    //             <Link
    //               to={`/listing/${listing._id}`}
    //               className='btn btn-primary btn-block'>
    //               More Info
    //             </Link>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <div className='div col-md-12'>
    //           <p>No Listings Available</p>
    //         </div> */}
    //     </div>
    //   </div>
    // </section>
  )
}

export default LatestListItem
