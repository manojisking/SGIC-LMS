import React from 'react'

 function Dashboard() {
    return (
        
          
  <div class="container">
    <div class="row">
    <div class="col-md-3">
      <div class="card-counter primary">
        <span class="card-counter1"><i class="fa fa-edit"></i></span>
        <span class="count-numbers">Casual</span>
        <span class="count-name">Allocated-<span>20</span></span>
        <span class="count-name1">Remaining-<span>10</span></span>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card-counter danger">
      <span class="card-counter1"><i class="fa fa-medkit"></i></span>
        <span class="count-numbers">Medical</span>
        <span class="count-name">Allocated-<span>12</span></span>
        <span class="count-name1">Remaining-<span>8</span></span>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card-counter success">
      <span class="card-counter1"><i class="fa fa-money-bill-alt"></i></span>
        <span class="count-numbers">Leu leave</span>
        <span class="count-name">Allocated-<span>10</span></span>
        <span class="count-name1">Remaining-<span>10</span></span>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card-counter info">
      <span class="card-counter1"><i class="fa fa-users"></i></span>
        <span class="count-numbers">Casual</span>
        <span class="count-name">Allocated-<span>20</span></span>
        <span class="count-name1">Remaining-<span>10</span></span>
      </div>
    </div>
  </div>
  <hr></hr>
    <div class="row">
      <div class="col col-md-8">
        <div class="text-center">
            <h4 id="h4">Leave History</h4>
        </div>
      <div class="table-whole">
        <table class="table pt-5 table-striped table-responsive-md btn-table table-bordered table-D">
        <thead>
          <tr class="table-primary">
            <th>No</th>
            <th>Type</th>
            <th>Start</th>
            <th>End</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Casual</td>
            <td>1/4/2020</td>
            <td>4/4/2020</td>
            <td>Cousin's Wedding</td>
            <td>Pending</td>
          </tr>

          <tr>
            <th scope="row">2</th>
            <td>Casual</td>
            <td>1/4/2020</td>
            <td>4/4/2020</td>
            <td>Cousin's Wedding</td>
            <td>Pending</td>
          </tr>

          <tr>
            <th scope="row">3</th>
            <td>Casual</td>
            <td>1/4/2020</td>
            <td>4/4/2020</td>
            <td>Cousin's Wedding</td>
            <td>Pending</td>
          </tr>

          <tr>
            <th scope="row">4</th>
            <td>Casual</td>
            <td>1/4/2020</td>
            <td>4/4/2020</td>
            <td>Cousin's Wedding</td>
            <td>Pending</td>
          </tr>

          <tr>
            <th scope="row">5</th>
            <td>Casual</td>
            <td>1/4/2020</td>
            <td>4/4/2020</td>
            <td>Cousin's Wedding</td>
            <td>Approved</td>
          </tr>
        
        </tbody>
        </table>
        </div>
      </div>

      <div class="col-md-4">
        <div class="text-center">
            <h4 id="h4">Calendar</h4>
        </div>
        <div class="calendar">
          <div class="month-indicator">
            <time datetime="2019-02"> April 2020 </time>
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
    <hr></hr>
    <div class="row">
      <div class="col col-md-12">
      <div class="text-center">
            <h4 id="h4">Employee leave approval</h4>
        </div>
        <table class="table table-striped table-responsive-md btn-table table-bordered table-D">
    
              <thead>
                <tr class="table-primary">
                  <th>#</th>
                  <th>Employee</th>
                  <th>Leave Type</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Reason</th>
                  <th>Paid/Unpaid</th>
                  <th>Status</th>
                  <th>Approval</th>
                </tr>
              </thead>
            
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>P.ManojKumar</td>
                  <td>Casual</td>
                  <td>6/4/2020</td>
                  <td>8/4/2020</td>
                  <td>Attend Cousin's Wedding</td>
                  <td>Paid</td>
                  <td>Pending</td>
                  <td> <button type="button" class="btn btn-outline-success btn-sm m-0 waves-effect">Approve</button> </td>
                </tr>
    
                <tr>
              <th scope="row">2</th>
              <td>K.Thushanthini</td>
              <td>Casual</td>
              <td>1/4/2020</td>
              <td>4/4/2020</td>
              <td>Attend Sister's Wedding</td>
              <td>Paid</td>
              <td>Pending</td>
              <td> <button type="button" class="btn btn-outline-success btn-sm m-0 waves-effect">Approve</button> </td>
            </tr>

            <tr>
              <th scope="row">3</th>
              <td>D.Duckless</td>
              <td>Casual</td>
              <td>10/4/2020</td>
              <td>15/4/2020</td>
              <td>Attend birthday party</td>
              <td>Paid</td>
              <td>Pending</td>
              <td> <button type="button" class="btn btn-outline-success btn-sm m-0 waves-effect">Approve</button> </td>
            </tr>

            <tr>
              <th scope="row">4</th>
              <td>N.Vithusha</td>
              <td>Casual</td>
              <td>1/4/2020</td>
              <td>3/4/2020</td>
              <td>Attend hospital</td>
              <td>Paid</td>
              <td>Pending</td>
              <td> <button type="button" class="btn btn-outline-success btn-sm m-0 waves-effect">Approve</button> </td>
            </tr>
           
            <tr>
              <th scope="row">5</th>
              <td>K.Lakshmy</td>
              <td>Casual</td>
              <td>20/4/2020</td>
              <td>22/4/2020</td>
              <td>Attend Cousin's Wedding</td>
              <td>Paid</td>
              <td>Pending</td>
              <td> <button type="button" class="btn btn-outline-success btn-sm m-0 waves-effect">Approve</button> </td>
            </tr>
               
              </tbody>
            </table>
      </div> 
    </div> 
  </div> 
  

	
  
           
       
    )
}
export default Dashboard