import React from 'react'

const Login = () => {
  return (
    <div>
      <section id='login' className='bg-light py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mx-auto'>
              <div className='card'>
                <div className='card-header bg-primary text-white'>
                  <h4>
                    <i className='fas fa-sign-in-alt'></i> Login
                  </h4>
                </div>
                <div className='card-body'>
                  <form action='/login' method='POST'>
                    <div className='form-group'>
                      <label for='username'>Username</label>
                      <input
                        type='text'
                        name='username'
                        className='form-control'
                        required
                      />
                    </div>

                    <div className='form-group'>
                      <label for='password2'>Password</label>
                      <input
                        type='password'
                        name='password'
                        className='form-control'
                        required
                      />
                    </div>

                    <input
                      type='submit'
                      value='Login'
                      className='btn btn-secondary btn-block'
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
