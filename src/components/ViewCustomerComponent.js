import React ,{ Component } from 'react';
import CustomerService from '../services/CustomerService'

class ViewCustomerComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : this.props.match.params.id,
            customer : {}
        }
    }//constructor close

    componentDidMount(){
        CustomerService.getCustomerById(this.state.id).then(
            (res) => {
                this.setState({customer:res.data});
            }
        )
    }//componentDidMount Close

    render(){
        return(
            <div>
            <br /><br />
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Employee Details </h3>
                          <div className="card-body">
                                  <div className="row">
                                     <label>First Name</label>
                                     <div>{this.state.customer.firstName} </div>
                                  </div>
                                  <div className="row">
                                     <label>Last Name</label>
                                     <div>{this.state.customer.lastName} </div>
                                  </div>
                                  <div className="row">
                                     <label>Email</label>
                                     <div>{this.state.customer.email} </div>
                                  </div>
                           </div>
                </div>
            </div>
        )
    }

}

export default ViewCustomerComponent