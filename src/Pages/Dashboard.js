import React from 'react'

 function Dashboard() {
    return (
        
          
      <div class="container">
    <div class="row">
      <div class="col col-md-6">
      <h2>Leave Allocated</h2>
        <table class="table table-striped table-responsive-md btn-table table-bordered table-D">   
          <thead>
            <tr class="table-primary">
                <th>Leave</th>
                <th>Allocated</th>
                <th>Used</th>
                <th>Remaining</th>
              </tr>
          </thead>
        
          <tbody>
            <tr>
              <td>Casual</td>
              <td>20</td>
              <td>8</td>
              <td>12</td>
            </tr>

            <tr>
              <td>Medical</td>
              <td>12</td>
              <td>2</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Leu leve</td>
              <td>15</td>
              <td>5</td>
              <td>10</td>
            </tr>
           
          </tbody>
        </table>
      </div>

      <div class="col-md-6">
        <h1>calender</h1>
        <div class="calendar">
          <div class="month-indicator">
            <time datetime="2019-02"> February 2019 </time>
          </div>
          <div class="day-of-week">
            <div>Su</div>
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
          </div>
          <div class="date-grid">
            <button>
              <time datetime="2019-02-01">1</time>
            </button>
            <button>
              <time datetime="2019-02-02">2</time>
            </button>
            <button>
              <time datetime="2019-02-03">3</time>
            </button>
            <button>
              <time datetime="2019-02-04">4</time>
            </button>
            <button>
              <time datetime="2019-02-05">5</time>
            </button>
            <button>
              <time datetime="2019-02-06">6</time>
            </button>
            <button>
              <time datetime="2019-02-07">7</time>
            </button>
            <button>
              <time datetime="2019-02-08">8</time>
            </button>
            <button>
              <time datetime="2019-02-09">9</time>
            </button>
            <button>
              <time datetime="2019-02-10">10</time>
            </button>
            <button>
              <time datetime="2019-02-11">11</time>
            </button>
            <button>
              <time datetime="2019-02-12">12</time>
            </button>
            <button>
              <time datetime="2019-02-13">13</time>
            </button>
            <button>
              <time datetime="2019-02-14">14</time>
            </button>
            <button>
              <time datetime="2019-02-15">15</time>
            </button>
            <button>
              <time datetime="2019-02-16">16</time>
            </button>
            <button>
              <time datetime="2019-02-17">17</time>
            </button>
            <button>
              <time datetime="2019-02-18">18</time>
            </button>
            <button>
              <time datetime="2019-02-19">19</time>
            </button>
            <button>
              <time datetime="2019-02-20">20</time>
            </button>
            <button>
              <time datetime="2019-02-21">21</time>
            </button>
            <button>
              <time datetime="2019-02-22">22</time>
            </button>
            <button>
              <time datetime="2019-02-23">23</time>
            </button>
            <button>
              <time datetime="2019-02-24">24</time>
            </button>
            <button>
              <time datetime="2019-02-25">25</time>
            </button>
            <button>
              <time datetime="2019-02-26">26</time>
            </button>
            <button>
              <time datetime="2019-02-27">27</time>
            </button>
            <button>
              <time datetime="2019-02-28">28</time>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col col-md-12">
      <h2>History</h2>
        <table class="table table-striped table-responsive-md btn-table table-bordered table-D">
        <thead>
          <tr class="table-primary">
            <th>No</th>
            <th>Employee</th>
            <th>Leave Type</th>
            <th>Start</th>
            <th>End</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>P.ManojKumar</td>
            <td>Casual</td>
            <td>1st September, 2018</td>
            <td>3rd September, 2018</td>
            <td>Attend Cousin's Wedding</td>
            <td>Pending</td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>P.ManojKumar</td>
            <td>Casual</td>
            <td>1st September, 2018</td>
            <td>3rd September, 2018</td>
            <td>Attend Cousin's Wedding</td>
            <td>Pending</td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>P.ManojKumar</td>
            <td>Casual</td>
            <td>1st September, 2018</td>
            <td>3rd September, 2018</td>
            <td>Attend Cousin's Wedding</td>
            <td>Pending</td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>P.ManojKumar</td>
            <td>Casual</td>
            <td>1st September, 2018</td>
            <td>3rd September, 2018</td>
            <td>Attend Cousin's Wedding</td>
            <td>Pending</td>
          </tr>
        
        </tbody>
        </table>
      </div> 
    </div> 
  </div> 
  

	
  
           
       
    )
}
export default Dashboard