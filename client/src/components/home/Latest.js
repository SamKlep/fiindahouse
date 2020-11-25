import React from 'react'

const Latest = () => {
  return (
    <div>
      <section id='listings' class='py-5'>
        <div class='container'>
          <h3 class='text-center mb-3'>Latest Listings</h3>
          <div class='row'>
            <div class='col-md-6 col-lg-4 mb-4'>
              <div class='card listing-preview'>
                <img class='card-img-top' src='' alt='' />
                <div class='card-img-overlay'>
                  <h2>
                    <span class='badge badge-secondary text-white'>$</span>
                  </h2>
                </div>
                <div class='card-body'>
                  <div class='listing-heading text-center'>
                    <h4 class='text-primary'>Listing</h4>
                    <p>
                      <i class='fas fa-map-marker text-secondary'></i>{' '}
                    </p>
                  </div>
                  <hr />
                  <div class='row py-2 text-secondary'>
                    <div class='col-6'>
                      <i class='fas fa-th-large'></i> Sqft:{' '}
                    </div>
                    <div class='col-6'>
                      <i class='fas fa-car'></i> Garage:{' '}
                    </div>
                  </div>
                  <div class='row py-2 text-secondary'>
                    <div class='col-6'>
                      <i class='fas fa-bed'></i> Bedrooms:{' '}
                    </div>
                    <div class='col-6'>
                      <i class='fas fa-bath'></i> Bathrooms:{' '}
                    </div>
                  </div>
                  <hr />
                  <div class='row py-2 text-secondary'>
                    <div class='col-6'>
                      <i class='fas fa-user'></i>{' '}
                    </div>
                  </div>
                  <div class='row text-secondary pb-2'>
                    <div class='col-6'>
                      <i class='fas fa-clock'></i>{' '}
                    </div>
                  </div>
                  <hr />
                  <a href='/' class='btn btn-primary btn-block'>
                    More Info
                  </a>
                </div>
              </div>

              <div class='div col-md-12'>
                <p>No Listings Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Latest
