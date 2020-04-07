import React from 'react'

function Settings() {
    return (
        <div class="container-form">
        <form>
          <div class="row">
            <h4 id="h4">Change passward</h4>
            <div class="input-group input-group-icon">
              <input type="email" placeholder="Current passward"/>
              <div class="input-icon"><i class="fa fa-lock"></i></div>
            </div>
            <div class="input-group input-group-icon">
              <input type="password" placeholder="New Password"/>
              <div class="input-icon"><i class="fa fa-key"></i></div>
            </div>
            <div class="input-group input-group-icon">
              <input type="password" placeholder="Confirm Password"/>
              <div class="input-icon"><i class="fa fa-check"></i></div>
            </div>
          </div>
     
          <div class="row">
            <div class="col-half">
                <button type="button" class="btn btn-outline-success">Update</button>
            </div>
    
            <div class="col-half">
            <button type="button" class="btn btn-outline-danger">Clear</button>
            </div>
          </div>
        </form>
      </div>
    )
}
export default Settings