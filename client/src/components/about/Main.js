import React from 'react'

const Main = () => {
  return (
    <div>
      <section
        id='showcase-inner'
        className='py-5 text-white'
        style={{
          backgroundImage: "url('img/building.jpg') ",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-md-12'>
              <h1 className='display-4'>About BT Real Estate</h1>
              <p className='lead'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
                pariatur!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main
