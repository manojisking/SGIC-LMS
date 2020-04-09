import React from 'react'

function UpdateProfile() {
    return (
        <div class="container-form">
    <form>
      <div class="row">
        <div class="col">
            <h4 id="h4">Update Profile</h4>
        </div>
      </div>
      <div class="row">
        <div class="col">
                <div id="Update" class="text-center">
                  <img src="http://placehold.it/100" class="avatar img-circle" alt="avatar"/>
                  <h6>Upload a different photo...</h6>
                  
                  <input type="file" id="Choose-file"/>
                </div>
       
              

        <div class="input-group input-group-icon">
          <input type="email" placeholder="First name"/>
          <div class="input-icon"><i class="fa fa-user"></i></div>
        </div>
        <div class="input-group input-group-icon">
          <input type="password" placeholder="Last name"/>
          <div class="input-icon"><i class="fa fa-users"></i></div>
        </div>
        <div class="input-group input-group-icon">
          <input type="password" placeholder="Position"/>
          <div class="input-icon"><i class="fas fa-sitemap"></i></div>
        </div>
        <div class="input-group input-group-icon">
          <input type="password" placeholder="Email ID"/>
          <div class="input-icon"><i class="fa fa-envelope"></i></div>
        </div>
      
    </div>
  </div>
 
      <div class="row">
        <div class="col-half text-center">
            <button type="button" class="btn btn-outline-success">Update</button>
        </div>

        <div class="col-half text-center">
        <button type="button" class="btn btn-outline-danger">Clear</button>
        </div>
      </div>
    </form>
  </div>
    )
}

export default UpdateProfile