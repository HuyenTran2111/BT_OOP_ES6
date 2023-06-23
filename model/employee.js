import Person from "./person.js";

class Employee extends Person {
    constructor(_id, _name,_email, _address, _numberWorking, _dailySalary) {
        super(_id, _name,_email, _address)
        this.numberWorking = _numberWorking;
        this.dailySalary = _dailySalary;
        this.salary = 0;
    }
    calculateSalary(){
        this.salary = this.numberWorking * this.dailySalary;
    }

}
export default Employee;