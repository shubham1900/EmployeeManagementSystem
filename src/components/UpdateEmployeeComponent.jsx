import React, { Component } from 'react'
import { Link } from 'react-router-dom';
  import { useParams } from 'react-router-dom';
  import { withParams } from './withParams';
 import EmployeeService from '../services/EmployeeService';

 class UpdateEmployeeComponent extends Component {
    
    constructor(props){
      console.log(props)  
        super(props);
         this.state={
             id:this.props.match.params.id,
           firstName:"",
           lastName:"",
           email_Id:""
         }
        

         this.changefirstNamehandler=this.changefirstNamehandler.bind(this);
         this.changelastNamehandler=this.changelastNamehandler.bind(this);
         this.changeemail_Idhandler=this.changeemail_Idhandler.bind(this);
         this.updateEmployee=this.updateEmployee.bind(this);
      
      }componentDidMount(){
       // let {id}=useParams
       console.log(this.props)
         EmployeeService.getEmployeeById(this.props.match.params.id).then((res)=>{
             let employee=res.data;
             this.setState({firstName:employee.firstName,
                 lastName:employee.lastName,
                 email_Id:employee.email_Id
             })
         })
    }
      updateEmployee=(e)=>{
       e.preventDefault();
      console.log(this.props)
       let employee={firstName:this.state.firstName,lastName:this.state.lastName,email_Id:this.state.email_Id}
       console.log("employee=>" +JSON.stringify(employee))
      
      
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
               <h3 className='text-center'>Update Employee</h3>
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
      
                   <button className='btn btn-success' onClick={this.updateEmployee}>Save</button>
                   <button className='btn btn-danger' style={{ marginLeft: "10px" }}>{this.cancel()}</button>
                 </form>
                
               </div>
             </div>
      
             </div>
          )
        }
        
    }
    export default withParams(UpdateEmployeeComponent);

