import React from 'react'

const Bread = () => {
  return (
    <div>
      <section id='bc' className='mt-3'>
        <div className='container'>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <a href="/">
                  <i className='fas fa-home'></i> Home
                </a>
              </li>
              <li className='breadcrumb-item active'> About</li>
            </ol>
          </nav>
        </div>
      </section>
    </div>
  )
}

export default Bread
