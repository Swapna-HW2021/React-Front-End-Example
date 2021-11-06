import axios from 'axios';
const baseURL = "http://localhost:6969/api/v1/customers";
class CustomerService{

    

    getAllCustomers(){
        return axios.get(baseURL);
    }

    createCustomer(customer){
        return axios.post(baseURL,customer);
    }

    getCustomerById(customerId){
        return axios.get(baseURL+'/' + customerId);
    }

    updateCustomer(customer,customerId){
        return axios.put(baseURL+'/' +customerId,customer);
    }

    deleteCustomer(customerId){
        return axios.delete(baseURL+'/'+ customerId);
    }


}

export default new CustomerService();