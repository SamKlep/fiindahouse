import React from 'react'

const Main = () => {
  return (
    <div>
      <section id='showcase-inner' className='py-5 text-white'>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-md-12'>
              <h1 className='display-4'>User Dashboard</h1>
              <p className='lead'>Manage your BT Real Estate account</p>
            </div>
          </div>
        </div>
      </section>

      <section id='bc' className='mt-3'>
        <div className='container'>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <a href='/'>
                  <i className='fas fa-home'></i> Home
                </a>
              </li>
              <li className='breadcrumb-item active'> Dashboard</li>
            </ol>
          </nav>
        </div>
      </section>
    </div>
  )
}

export default Main
