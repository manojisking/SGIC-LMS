import React from 'react'

function Login() {
    return (
        <div class="container-form">
        <form>
          <div class="row">
            <h4 id="h4">Login</h4>
            <div class="input-group input-group-icon">
              <input type="email" placeholder="User Name"/>
              <div class="input-icon"><i class="fas fa-user-tie"></i></div>
            </div>
            <div class="input-group input-group-icon">
              <input type="password" placeholder="Password"/>
              <div class="input-icon"><i class="fa fa-key"></i></div>
            </div>
          </div>
     
          <div class="row">
            <div class="col text-center">
                <button type="button" class="btn btn-outline-primary">Login</button>
            </div>
          </div>
        </form>
      </div>
    )
}
export default Login