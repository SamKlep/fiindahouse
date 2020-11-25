import React from 'react'

const Team = () => {
  return (
    <div>
      <section id='team' class='py-5'>
        <div class='container'>
          <h2 class='text-center'>Our Team</h2>
          <div class='row text-center'>
            <div class='col-md-4'>
              <img src='' alt='' class='rounded-circle mb-3' />
              <h4>Name</h4>
              <p class='text-success'>
                <i class='fas fa-award text-success mb-3'></i> Realtor
              </p>
              <hr />
              <p>
                <i class='fas fa-phone'></i>{' '}
              </p>
              <p>
                <i class='fas fa-envelope-open'></i>{' '}
              </p>
            </div>

            <div class='div col-md-12'>
              <p>No Realtors Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team
