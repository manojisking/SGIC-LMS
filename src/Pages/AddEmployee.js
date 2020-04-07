import React from 'react'

function AddEmployee() {
    return (
        <div class="container-form">
        <form>
          <div class="row">
            <h4 id="h4">Details</h4>
            <div class="input-group input-group-icon">
              <input type="text" placeholder="First Name"/>
              <div class="input-icon"><i class="fa fa-user"></i></div>
            </div>
            <div class="input-group input-group-icon">
              <input type="text" placeholder="Last Name"/>
              <div class="input-icon"><i class="fa fa-users"></i></div>
            </div>
            <div class="input-group input-group-icon">
              <input type="email" placeholder="Email Adress"/>
              <div class="input-icon"><i class="fa fa-envelope"></i></div>
            </div>
            <div class="input-group input-group-icon">
              <input type="password" placeholder="Password"/>
              <div class="input-icon"><i class="fa fa-key"></i></div>
            </div>
            <div class="input-group input-group-icon">
              <input type="password" placeholder="Confirm Password"/>
              <div class="input-icon"><i class="fa fa-check"></i></div>
            </div>
          </div>
          <div class="row">
            <div class="col-half">
              <h4 id="h4">Date of Birth</h4>
              <div class="input-group">
                <div class="col-third">
                  <input type="text" placeholder="DD"/>
                </div>
                <div class="col-third">
                  <input type="text" placeholder="MM"/>
                </div>
                <div class="col-third">
                  <input type="text" placeholder="YYYY"/>
                </div>
              </div>
            </div>
            <div class="col-half">
              <h4 id="h4">Gender</h4>
              <div class="input-group">
                <input type="radio" name="gender" value="male" id="gender-male"/>
                <label for="gender-male">Male</label>
                <input type="radio" name="gender" value="female" id="gender-female"/>
                <label for="gender-female">Female</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="input-group input-group-icon">
              <input type="text" placeholder="Mobile Number"/>
              <div class="input-icon"><i class="fa fa-mobile"></i></div>
            </div> 
          </div>
          <div class="row">
            <h4 id="h4">Terms and Conditions</h4>
            <div class="input-group">
              <input type="checkbox" id="terms"/>
              <label for="terms">I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label>
            </div>
          </div>
    
          <div class="row">
          <div class="col-half">
                <button type="button" class="btn btn-outline-success">Add</button>
            </div>
    
            <div class="col-half">
            <button type="button" class="btn btn-outline-danger">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    )
}

export default AddEmployee