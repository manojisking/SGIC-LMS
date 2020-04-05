import React from 'react';

function Sidebar() {
  return (

    <nav id="sidebar">
            <div class="sidebar-header">
                <h3>SGIC-Jaffna</h3>
            </div>

            <ul class="list-unstyled components">
                <p>Employee</p>
                <li>
                <a href="./Dashboard">Dashboard</a>
                </li>
                <li>
                <a href="./ApplyLeave">ApplylLeave</a>
                </li>
                <hr></hr>
                <p>Admin</p>
                
                <li>
                    <a href="./AddEmployee">Add Employee</a>
                </li>
                <li>
                    <a href="./LeaveApproval">Manage leave</a>
                </li>
                <li>
                    <a href="./EmpDetails">Employee Details</a>
                </li>
            </ul>

            <ul class="list-unstyled CTAs">
                <li>
                    <a href="#" class="download">Settings</a>
                </li>
                <li>
                    <a href="#" class="article">Logout</a>
                </li>
            </ul>
        </nav>
    
         );
        }
        
export default Sidebar