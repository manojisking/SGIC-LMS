import React from 'react'

function ApplyLeave() {
    return (
      <div class="container-form">
      <form>
        <div class="row">
          <h4 id="h4">Leave type</h4>
          <div class="input-group">
            <select>
              <option>Casual</option>
              <option>Medical</option>
              <option>Leu Leve</option>
              <option>Leu Leve</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-half">
            <h4 id="h4">Start Date</h4>
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
            <h4 id="h4">End Date</h4>
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
        </div>
        <div class="row">
          <h4 id="h4">Reason</h4>
          <div class="input-group">
            <input type="text" placeholder="Reason"/>   
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
          <button type="button" class="btn btn-outline-success">Apply</button>
        </div>
      </form>
    </div>
  
    )
}

export default ApplyLeave