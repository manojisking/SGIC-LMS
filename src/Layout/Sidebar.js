import React from 'react';

function Sidebar() {
  return (

    <nav id="sidebar">
            <div class="sidebar-header">
                <h3>SGIC-JAFFNA</h3>
            </div>

            <ul class="list-unstyled components">
                <p>Employee</p>

                <li>
                    <a href="./Dashboard">
                        <span class="sicon"><i class="fas fa-book"></i></span>
                        <span class="S-list">Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="./ApplyLeave">
                        <span class="sicon"><i class="fas fa-pencil-alt"></i></span>
                        <span class="S-list">ApplylLeave</span>
                    </a>
                </li>

                <hr className="Color"></hr>

                <p>Admin</p>
                <li>
                    <a href="./AddEmployee">
                        <span class="sicon"><i class="fas fa-user-plus"></i></span>
                        <span class="S-list">Add Employee</span>
                    </a>
                </li>
                
                <li>
                    <a href="./LeaveApproval">
                        <span class="sicon"><i class="fas fa-tasks"></i></span>
                        <span class="S-list">Manage leave</span>
                    </a>
                </li>
                
                <li>
                    <a href="./EmpDetails">
                        <span class="sicon"><i class="fas fa-user-tag"></i></span>
                        <span class="S-list">Employee Details</span>
                    </a>
                </li>
            </ul>
            <hr className="Color"></hr>

            <ul class="list-unstyled CTAs">
                <li>
                    <a href="./Settings" class="download">Settings</a>
                </li>
                <li>
                    <a href="./Login" class="article">Logout</a>
                </li>
            </ul>
        </nav>
    
         );
        }
        
export default Sidebar