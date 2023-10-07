import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom';


 class ListEmployeeComponent extends Component {
     constructor(props){
        super(props)
        this.state={
            employees: []
        }
        // this.addEmployee=this.addEmployee.bind(this);
        this.editEmployee=this.editEmployee.bind(this);
    }
    editEmployee(id){
        this.props.history.push`/update-employee/${id}`
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees:res.data});
        })
    }
    
    // addEmployee(){
    //     this.props.history("/add-employee");
    // }
  render() {
    return (
      <div>
        <h2 className="text-Center">Employee List</h2>
        
        <div className='row'>
                    <Link to='/add-employee' className='btn btn-primary'>Add Employee</Link>
                    <Link to='/update-employee/${id}' className='btn btn-primary'>Update Employee</Link>
                </div>
        <div className="row">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email ID</th>
                        <th>Actions</th>
                        <th>Delete Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.employees.map(
                            employee=>
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email_Id}</td>
                                    <td>
                                    <Link to={`/update-employee/${employee.id}`} className="btn btn-info">Update</Link>
                                    </td>
                                    <td>
                                    <button onClick={()=> this.editEmployee(employee.id)}className="btn btn-danger">Delete</button>
                                    </td>
                                    
                                </tr>

                        )
                    }
                </tbody>
            </table>
        </div>



      </div>
    )
  }
}
 export default ListEmployeeComponent