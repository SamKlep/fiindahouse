import React from 'react'

const Main = () => {
  return (
    <div>
      <section id='showcase-inner' className='py-5 text-white'>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-md-12'>
              <h1 className='display-4'>Title</h1>
              <p className='lead'>
                <i className='fas fa-map-marker'></i> Houston, TX 77008
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='bc' className='mt-3'>
        <div className='container'>
          <nav>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <a href='/'>Home</a>
              </li>
              <li className='breadcrumb-item'>
                <a href='/listings'>Listings</a>
              </li>
              <li className='breadcrumb-item active'></li>
            </ol>
          </nav>
        </div>
      </section>
    </div>
  )
}

export default Main
