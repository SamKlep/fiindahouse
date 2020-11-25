import React from 'react'

const Listings = () => {
  return (
    <div>
      <section id='showcase-inner' class='py-5 text-white'>
        <div class='container'>
          <div class='row text-center'>
            <div class='col-md-12'>
              <h1 class='display-4'>Browse Our Properties </h1>
              <p class='lead'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
                pariatur!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='bc' class='mt-3'>
        <div class='container'>
          <nav aria-label='breadcrumb'>
            <ol class='breadcrumb'>
              <li class='breadcrumb-item'>
                <a href="{% url 'index' %}">
                  <i class='fas fa-home'></i> Home
                </a>
              </li>
              <li class='breadcrumb-item active'> Browse Listings</li>
            </ol>
          </nav>
        </div>
      </section>

      <section id='listings' class='py-4'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-6 col-lg-4 mb-4'>
              <div class='card listing-preview'>
                <img class='card-img-top' src='' alt='' />
                  <div class='card-img-overlay' >
                  <h2>
                    <span class='badge badge-secondary text-white'>$</span>
                  </h2>
                </div>
                <div class='card-body'>
                  <div class='listing-heading text-center'>
                    <h4 class='text-primary'>Title</h4>
                 
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
                  <div class='col-12'>
                    <i class='fas fa-user'></i>{' '}
                  </div>
                </div>
                <div class='row text-secondary pb-2'>
                  <div class='col-6'>
                    <i class='fas fa-clock'></i>{' '}
                  </div>
                </div>
                <hr />
                <a href='' class='btn btn-primary btn-block'>
                  More Info
                </a>
              </div>
            </div>
          </div>

          <div class='col-md-12'>
            <p>No Listings Available</p>
          </div>

          <div class='row'>
            <div class='col-md-12'>
              <ul class='pagination'>
                <li class='page-iitem'>
                  <a
                    href='?page={{listings.previous_page_number}}'
                    class='page-link'>
                    &laquo;
                  </a>
                </li>

                <li class='page-item disabled'>
                  <a class='page-link'>&laquo;</a>
                </li>

                <li class='page-item active'>
                  <a class='page-link'></a>
                </li>

                <li class='page-item'>
                  <a href='?page={{i}}' class='page-link'></a>
                </li>

                <li class='page-iitem'>
                  <a href='?page=' class='page-link'>
                    &raquo;
                  </a>
                </li>

                <li class='page-item disabled'>
                  <a class='page-link'>&raquo;</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Listings
