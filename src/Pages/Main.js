
import React from 'react';
import {Route} from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import ApplyLeave from '../Pages/ApplyLeave'
import AddEmployee from '../Pages/AddEmployee'
import LeaveApproval from '../Pages/LeaveApproval'
import EmpDetails from '../Pages/EmpDetails'


 function Main() {
    return (
        <main role="main">
            <Route path='/Dashboard' component={Dashboard}></Route>
            <Route path='/ApplyLeave' component={ApplyLeave}></Route>
            <Route path='/AddEmployee' component={AddEmployee}></Route>
            <Route path='/LeaveApproval' component={LeaveApproval}></Route>
            <Route path='/EmpDetails' component={EmpDetails}></Route>

        </main>
    )
}

export default Main