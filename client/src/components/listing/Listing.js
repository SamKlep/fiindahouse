import React from 'react'

const Listing = () => {
  return (
    <div>
      <section id='listing' className='py-4'>
        <div className='container'>
          <a href='/listings' className='btn btn-light mb-4'>
            Back To Listings
          </a>
          <div className='row'>
            <div className='col-md-9'>
              <img src='' alt='' className='img-main img-fluid mb-3' />
              {/* Thumbnails */}
              <div className='row mb-5 thumbs'>
                <div className='col-md-2'>
                  <a href='/' data-lightbox='home-images'>
                    <img src='' alt='' className='img-fluid' />
                  </a>
                </div>

                <div className='col-md-2'>
                  <a href='/' data-lightbox='home-images'>
                    <img src='' alt='' className='img-fluid' />
                  </a>
                </div>

                <div className='col-md-2'>
                  <a href='/' data-lightbox='home-images'>
                    <img src='' alt='' className='img-fluid' />
                  </a>
                </div>

                <div className='col-md-2'>
                  <a href='/' data-lightbox='home-images'>
                    <img src='' alt='' className='img-fluid' />
                  </a>
                </div>

                <div className='col-md-2'>
                  <a href='/' data-lightbox='home-images'>
                    <img src='' alt='' className='img-fluid' />
                  </a>
                </div>

                <div className='col-md-2'>
                  <a href='/' data-lightbox='home-images'>
                    <img src='img/' alt='' className='img-fluid' />
                  </a>
                </div>
              </div>

              {/* Fields  */}
              <div className='row mb-5 fields'>
                <div className='col-md-6'>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item text-secondary'>
                      <i className='fas fa-money-bill-alt'></i> Asking Price:
                      <span className='float-right'>$ </span>
                    </li>
                    <li className='list-group-item text-secondary'>
                      <i className='fas fa-bed'></i> Bedrooms:
                      <span className='float-right'></span>
                    </li>
                    <li className='list-group-item text-secondary'>
                      <i className='fas fa-bath'></i> Bathrooms:
                      <span className='float-right'></span>
                    </li>
                    <li className='list-group-item text-secondary'>
                      <i className='fas fa-car'></i> Garage:
                      <span className='float-right'></span>
                    </li>
                  </ul>
                </div>
                <div className='col-md-6'>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item text-secondary'>
                      <i className='fas fa-th-large'></i> Square Feet:
                      <span className='float-right'> #</span>
                    </li>
                    <li className='list-group-item text-secondary'>
                      <i className='fas fa-square'></i> Lot Size:
                      <span className='float-right'>#</span>
                    </li>
                    <li className='list-group-item text-secondary'>
                      <i className='fas fa-calendar'></i> Listing Date:
                      <span className='float-right'>Date</span>
                    </li>
                    <li className='list-group-item text-secondary'>
                      <i className='fas fa-bed'></i> Realtor:
                      <span className='float-right'>Name</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Description  */}
              <div className='row mb-5'>
                <div className='col-md-12'></div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card mb-3'>
                <img className='card-img-top' src='' alt='' />
                <div className='card-body'>
                  <h5 className='card-title'>Property Realtor</h5>
                  <h6 className='text-secondary'>John Smith</h6>
                </div>
              </div>
              <button
                className='btn-primary btn-block btn-lg'
                data-toggle='modal'
                data-target='#inquiryModal'>
                Make An Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}

      <div className='modal fade' id='inquiryModal' role='dialog'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='inquiryModalLabel'>
                Make An Inquiry
              </h5>
              <button type='button' className='close' data-dismiss='modal'>
                <span>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form action='/contact' method='POST'>
                <input type='hidden' name='user_id' value='' />

                <input type='hidden' name='user_id' value='0' />

                <input type='hidden' name='realtor_email' value='' />
                <input type='hidden' name='listing_id' value='' />
                <div className='form-group'>
                  <label for='property_name' className='col-form-label'>
                    Property:
                  </label>
                  <input
                    type='text'
                    name='listing'
                    className='form-control'
                    value=''
                  />
                </div>
                <div className='form-group'>
                  <label for='name' className='col-form-label'>
                    Name:
                  </label>
                  <input
                    type='text'
                    name='name'
                    className='form-control'
                    value=''
                    required
                  />
                </div>
                <div className='form-group'>
                  <label for='email' className='col-form-label'>
                    Email:
                  </label>
                  <input
                    type='text'
                    name='email'
                    className='form-control'
                    value=''
                    required
                  />
                </div>
                <div className='form-group'>
                  <label for='phone' className='col-form-label'>
                    Phone:
                  </label>
                  <input type='text' name='phone' className='form-control' />
                </div>
                <div className='form-group'>
                  <label for='message' className='col-form-label'>
                    Message:
                  </label>
                  <textarea name='message' className='form-control'></textarea>
                </div>
                <hr />
                <input
                  type='submit'
                  value='Send'
                  className='btn btn-block btn-secondary'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing
