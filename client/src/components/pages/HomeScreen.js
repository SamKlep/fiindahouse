import React from 'react'

const HomeScreen = () => {
  return (
    <div>
      <section id='showcase'>
        <div className='container text-center'>
          <div className='home-search p-5'>
            <div className='overlay p-5'>
              <h1 className='display-4 mb-4'>Find Your Dream Home Today</h1>
              <p className='lead'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae quas, asperiores eveniet vel nostrum magnam
                voluptatum tempore! Consectetur, id commodi!
              </p>
              <div className='search'>
                <form action=''>
                  <div className='form-row'>
                    <div className='col-md-4 mb-3'>
                      <label className='sr-only'>Keywords</label>
                      <input
                        type='text'
                        name='keywords'
                        className='form-control'
                        placeholder='Keyword (Pool, Garage, etc)'
                      />
                    </div>

                    <div className='col-md-4 mb-3'>
                      <label className='sr-only'>City</label>
                      <input
                        type='text'
                        name='city'
                        className='form-control'
                        placeholder='City'
                      />
                    </div>

                    <div className='col-md-4 mb-3'>
                      <label className='sr-only'>State</label>
                      <select name='state' className='form-control'>
                        <option selected='true' disabled='disabled'>
                          State (All)
                        </option>

                        {/* <option value="{{ key }}">{{ value }}</option> */}
                      </select>
                    </div>
                  </div>

                  <div className='form-row'>
                    <div className='col-md-6 mb-3'>
                      <label className='sr-only'>Bedrooms</label>
                      <select name='bedrooms' className='form-control'>
                        <option selected='true' disabled='disabled'>
                          Bedrooms (All)
                        </option>

                        {/* <option value='{{ key }}'>{{ value }}</option> */}
                      </select>
                    </div>
                    <div className='col-md-6 mb-3'>
                      <select name='price' className='form-control' id='type'>
                        <option selected='true' disabled='disabled'>
                          Max Price (Any)
                        </option>

                        {/* <option value="{{ key }}">{{ value }}</option> */}
                      </select>
                    </div>
                  </div>
                  <button
                    className='btn btn-secondary btn-block mt-4'
                    type='submit'>
                    Submit form
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeScreen
