class ListPerson {
    arrStudent = [];
    arrEmployee = [];
    arrCustomer = [];

    addStudent(student) {
        this.arrStudent.push(student);
    };

    addEmployee(employee) {
        this.arrEmployee.push(employee);
    };

    addCustomer(customer) {
        this.arrCustomer.push(customer);
    };

    findIndexStudent(id) {
        let index = -1;
        for(let i = 0; i < this.arrStudent.length; i++) {
            let student = this.arrStudent[i];
            if (student.id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    deleteStudent(id) {
        let index = this.findIndexStudent(id);
        if (index !== -1) {
            this.arrStudent.splice(index, 1);
        }
    }

    findIndexEmployee(id) {
        let index = -1;
        for(let i = 0; i < this.arrEmployee.length; i++) {
            let emp = this.arrEmployee[i];
            if (emp.id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    deleteEmployee(id) {
        let index = this.findIndexEmployee(id);
        if (index !== -1) {
            this.arrEmployee.splice(index, 1);
        }
    }

    findIndexCustomer(id) {
        let index = -1;
        for(let i = 0; i < this.arrCustomer.length; i++) {
            let customer = this.arrCustomer[i];
            if (customer.id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    deleteCustomer(id) {
        let index = this.findIndexCustomer(id);
        if (index !== -1) {
            this.arrCustomer.splice(index, 1);
        }
    }

    getStudent(id) {
        let index = this.findIndexStudent(id);

        if (index !== -1) {
            return this.arrStudent[index];
        }
        return null;
    }

    updateStudent(student) {
        let index = this.findIndexStudent(student.id);
        
        if (index !== -1) {
            this.arrStudent[index] = student;
        }
    }

    getEmployee(id) {
        let index = this.findIndexEmployee(id);

        if (index !== -1) {
            return this.arrEmployee[index];
        }
        return null;
    }

    updateEmployee(employee) {
        let index = this.findIndexEmployee(employee.id);
        
        if (index !== -1) {
            this.arrEmployee[index] = employee;
        }
    }

    getCustomer(id) {
        let index = this.findIndexCustomer(id);

        if (index !== -1) {
            return this.arrCustomer[index];
        }
        return null;
    }

    updateCustomer(customer) {
        let index = this.findIndexCustomer(customer.id);
        
        if (index !== -1) {
            this.arrCustomer[index] = customer;
        }
    }
}

export default ListPerson;