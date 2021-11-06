import React ,{ Component } from 'react';
import CustomerService from '../services/CustomerService'

class ListCustomerComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            customers:[]
        }
        //Register the Methods
        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.viewCustomer = this.viewCustomer.bind(this);
    }//constructor close

    componentDidMount(){
        CustomerService.getAllCustomers().then(
            (res) => {
                console.log(res.data)
                this.setState({customers:res.data});
            });
    }//componentDidMount Close

    addCustomer(){
        this.props.history.push('/add-customer/_add');
    }

    editCustomer(id){
        this.props.history.push(`/add-customer/${id}`);
    }

    deleteCustomer(id){
        CustomerService.deleteCustomer(id).then(res =>{
            this.setState({
                customers:this.state.customers.filter(customer => customer.id !== id)
            });
        });
    }

    viewCustomer(id){
        this.props.history.push(`/view-customer/${id}`);
    }

        render(){
            return(
                <div>
                    <h2 className="text-center">Customers List</h2>
                    <div className="row">
                        <button type="button" className="btn btn-primary" onClick={this.addCustomer}>Add Customer</button>
                    </div>
                    <br />
                    <br/>
                    <div className="row">
                        <table className="table table-striped table-inverse table-bordered table-responsive">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email Id</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.customers.map(
                                            mapcustomer =>
                                        <tr key={mapcustomer.id}>
                                                    <td>{mapcustomer.firstName}</td>
                                                    <td>{mapcustomer.lastName}</td>
                                                    <td>{mapcustomer.email}</td>
                                                    <td>
                                                        <button type="button" className="btn btn-info"
                                                            onClick = { () => this.editCustomer(mapcustomer.id)}>Update</button>
                                                        <button type="button" className="btn btn-info"
                                                        style={{marginLeft : "10px"}} onClick = {() => this.viewCustomer(mapcustomer.id)}>View</button>
                                                        <button type="button" className="btn btn-danger"
                                                        style={{marginLeft : "10px"}}onClick = {() => this.deleteCustomer(mapcustomer.id)}>Delete</button>
                                                    </td>
                                        </tr>
                                        )
                                    }
                                </tbody>
                        </table>
                    </div>
                </div>
            );
    }
}

export default ListCustomerComponent