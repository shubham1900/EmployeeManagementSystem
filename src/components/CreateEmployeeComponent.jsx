import React, { Component } from 'react'
import { json } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export default class CreateEmployeeComponent extends Component {
constructor(props){
  super(props);
  this.state={
    firstName:"",
    lastName:"",
    email_Id:""
  }
  this.changefirstNamehandler=this.changefirstNamehandler.bind(this);
  this.changelastNamehandler=this.changelastNamehandler.bind(this);
  //this.changeemail_Idhandler=this.changeemail_Idhandler.bind(this);
  this.saveEmployee=this.saveEmployee.bind(this);

}
saveEmployee=(e)=>{
e.preventDefault();
let employee={firstName:this.state.firstName,lastName:this.state.lastName,email_Id:this.state.email_Id}
console.log("employee=>" +JSON.stringify(employee))

EmployeeService.CreateEmployee(employee).then(res=>{
  return<Link to='/employees' className='btn btn-primary'></Link>
})
}
changefirstNamehandler=(event)=>{
this.setState({firstName:event.target.value})
}
changelastNamehandler=(event)=>{
  this.setState({lastName:event.target.value})
  }
  changeemail_Idhandler=(event)=>{
    this.setState({email_Id:event.target.value})
    }
 
    cancel() {
      // Use the Link component to navigate to the homepage
      return <Link to="/employees" className="btn btn-danger">Cancel</Link>;
    }
    
  render() {
    return (
      <div>
      <div className="container"></div>  
      <div className="row"></div>
      <div className="card col-md-6 offset-md-3 offset-md-3">
        <h3 className='text-center'>Add Employee</h3>
        <div className='card-body'>
          <form className='form-group'>
            <label>First Name:</label>
            <input placeholder='firstName' name='firstName' className='form-control'
            value={this.state.name} onChange={this.changefirstNamehandler}></input>
            <br></br>

            
            <label>Last Name</label>
             <input placeholder='lastName' name='lastName' className='form-control'
            value={this.state.name} onChange={this.changelastNamehandler}></input>
            <br></br>

            
            <label>Email ID</label>
             <input placeholder='email_Id' name='email_Id' className='form-control'
            value={this.state.name} onChange={this.changeemail_Idhandler}></input>
            <br></br>

            <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
            <button className='btn btn-danger' style={{ marginLeft: "10px" }}>{this.cancel()}</button>
          </form>
          
        </div>
      </div>

      </div>
    )
  }
}
