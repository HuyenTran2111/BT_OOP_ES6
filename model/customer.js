import Person from "./person.js";

class Customer extends Person{
    constructor(_id, _name,_email, _address, _company, _billValue, _evaluate){
        super(_id, _name,_email, _address)
        this.company = _company;
        this.billValue = _billValue;
        this.evaluate = _evaluate;

    }
}
export default Customer;