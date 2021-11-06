import React ,{ Component } from 'react';
import CustomerService from '../services/CustomerService'

class CreateCustomerComponent extends Component {

        constructor(props){
        super(props);
        this.state = {
           id:this.props.match.params.id,
           firstName : '',
           lastName : '',
           email:''
        }
        //handler methods for firstName,lastName and email and to save or update tge customer
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveOrUpdateCustomer = this.saveOrUpdateCustomer.bind(this);
    }//constructor close

    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            CustomerService.getCustomerById(this.state.id).then((res) => {
                let customer = res.data;
                this.setState({
                    firstName:customer.firstName,
                    lastName :customer.lastName,
                    email : customer.email
                });
            });
        }
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Customer</h3>
        }else{
            return <h3 className="text-center">Update Customer</h3>
        }
    }

    changeFirstNameHandler= (event) =>{
        this.setState({firstName:event.target.value});
    }

        changeLastNameHandler= (event) =>{
        this.setState({lastName:event.target.value});
    }

        changeEmailHandler= (event) =>{
        this.setState({email:event.target.value});
    }

    saveOrUpdateCustomer = (e) => {
        e.preventDefault();
        let customer = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email : this.state.email
        };
        console.log(customer);
         if(this.state.id === '_add'){
            CustomerService.createCustomer(customer).then(res => {
                this.props.history.push('/customers');
            });
        }else{
            CustomerService.updateCustomer(customer,this.state.id).then(res => {
                this.props.history.push('/customers');
            });
        }

    }
    cancel(){
        this.props.history.push('/customers');
    }
    render(){
        return(
            <div>
                <br /><br />
                <div className="container">
                    <div className="row">
                           <div className="card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                              <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                          <label >First Name</label>
                                          <input type="text" name="firstName" id="" 
                                                    className="form-control" placeholder="First Name" 
                                                    value={this.state.firstName} 
                                                    onChange={this.changeFirstNameHandler} 
                                          />
                                        </div>
                                         <div className="form-group">
                                          <label >Last Name</label>
                                          <input type="text" name="lastName" id="" 
                                                    className="form-control" placeholder="Last Name" 
                                                    value={this.state.lastName} 
                                                    onChange={this.changeLastNameHandler} 
                                          />
                                        </div>
                                         <div className="form-group">
                                          <label >Email</label>
                                          <input type="text" name="email" id="" 
                                                    className="form-control" placeholder="Email" 
                                                    value={this.state.email} 
                                                    onChange={this.changeEmailHandler} 
                                          />
                                        </div>
                                        <button type="button" className="btn btn-success" 
                                                    onClick={this.saveOrUpdateCustomer}>Save</button>
                                        <button type="button" className="btn btn-danger"
                                                   onClick={this.cancel.bind(this)} 
                                                   style={{marginLeft:"10px"}}>Cancel</button>
                                    </form>
                              </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default CreateCustomerComponent;