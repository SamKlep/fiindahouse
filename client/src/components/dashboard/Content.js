import React from 'react'

const Content = () => {
  return (
    <div>
      <section id='dashboard' className='py-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2>Welcome </h2>

              <p>Here are the property listings that you have inquired about</p>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Property</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <a className='btn btn-light' href='/listing'>
                        View Listing
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p>You have not made any inquiries</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Content
