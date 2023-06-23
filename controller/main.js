import Student from "../model/student.js";
import ListPerson from "../model/listPerson.js";
import Employee from "../model/employee.js";
import Customer from "../model/customer.js";
import Validation from "../model/validation.js";

// const person = new Person();
const listPerson = new ListPerson();

const validation = new Validation();

const getEle = (id) => {
  return document.getElementById(id);
};

getEle("type").onchange = () => {
  const valueType = getEle("type").value;
  let htmlTitle = "";
  let htmlBtnAdd = "";
  let htmlTable = "";
  let htmlModal = "";
  if (valueType === "student") {
    htmlTitle = "<h1>Student List</h1>";
    htmlBtnAdd = `
    <button class="btn btn-success" onclick="orderStudent()">Order Name Asc</button>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" id="btnAddModal"><i class="fa-solid fa-circle-plus"></i> Add Student</button>`;
    htmlTable = `<thead class="text-primary text-center">
<tr>
    <th>Code</th>
    <th>Name</th>
    <th>Address</th>
    <th>Email</th>
    <th>Average Point</th>
    <th>
        <i class="fa-solid fa-gear"></i>
    </th>
</tr>

</thead>
<tbody id="tableStudent" class="text-center">
</tbody>`;
    htmlModal = `
<div class="modal-dialog">
  <div class="modal-content">
    <!-- Modal Header -->
    <div class="modal-header">
      <h3 class="modal-title">Student</h3>
    </div>
    <!-- Modal body -->
    <div class="modal-body">
      <div class="form-group">
        <input
          id="id"
          class="form-control"
          placeholder="Code"
          type="number"
        />
        <div id="errorId" class="text-danger" style="display: none"></div>
      </div>

      <div class="form-group">
        <input id="name" class="form-control" placeholder="Name" />
        <div
          id="errorName"
          class="text-danger"
          style="display: none"
        ></div>
      </div>

      <div class="form-group">
        <input id="email" class="form-control" placeholder="Email" />
        <div
          id="errorEmail"
          class="text-danger"
          style="display: none"
        ></div>
      </div>
      <div class="form-group">
        <input id="address" class="form-control" placeholder="Address" />
        <div
          id="errorAddress"
          class="text-danger"
          style="display: none"
        ></div>
      </div>
      <div class="form-group">
        <input
          id="mathPoint" type="number"
          class="form-control"
          placeholder="Math Point"
        />
        <div
          id="errorMathPoint"
          class="text-danger"
          style="display: none"
        ></div>
      </div>
      <div class="form-group">
        <input
          id="physicPoint" type="number"
          class="form-control"
          placeholder="Physic Point"
        />
        <div
          id="errorPhysicPoint"
          class="text-danger"
          style="display: none"
        ></div>
      </div>
      <div class="form-group">
        <input
          id="chemistryPoint" type="number"
          class="form-control"
          placeholder="Chemistry Point"
        />
        <div
          id="errorChemistryPoint"
          class="text-danger"
          style="display: none"
        ></div>
      </div>
    </div>
    <!-- Modal footer -->
    <div class="modal-footer">
    <button id="btnAdd" class="btn btn-primary">Add Student</button>
           <button id="btnUpdate" class="btn btn-success">Update Student</button>
           <button id="btnClose" class="btn btn-secondary" data-dismiss="modal">Close</button></div>
  </div>
</div>`;
  } else if (valueType === "employee") {
    htmlTitle = "<h1>Employee List</h1>";
    htmlBtnAdd = `<button class="btn btn-success" onclick="orderEmployee()">Order Name Asc</button><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" id="btnAddModal"><i class="fa-solid fa-circle-plus"></i> Add Employee</button>`;
    htmlTable = `<thead class="text-primary text-center">
    <tr>
        <th>Code</th>
        <th>Name</th>
        <th>Address</th>
        <th>Email</th>
        <th>Salary</th>
        <th>
            <i class="fa-solid fa-gear"></i>
        </th>
    </tr>

</thead>
<tbody id="tableStudent" class="text-center">
    
</tbody>`;
    htmlModal = `
<div class="modal-dialog">
  <div class="modal-content">
    <!-- Modal Header -->
    <div class="modal-header">
      <h3 class="modal-title">Employee</h3>
    </div>
    <!-- Modal body -->
    <div class="modal-body">
      <div class="form-group">
        <input
          id="id"
          class="form-control"
          placeholder="Code"
          type="number"
        />
        <div id="errorId" class="text-danger" style="display: none"></div>
      </div>

      <div class="form-group">
        <input id="name" class="form-control" placeholder="Name" />
        <div
          id="errorName"
          class="text-danger"
          style="display: none"
        ></div>
      </div>

      <div class="form-group">
        <input id="email" class="form-control" placeholder="Email" />
        <div
          id="errorEmail"
          class="text-danger"
          style="display: none"
        ></div>
      </div>
      <div class="form-group">
        <input id="address" class="form-control" placeholder="Address" />
        <div
          id="errorAddress"
          class="text-danger"
          style="display: none"
        ></div>
      </div>
      <div class="form-group">
        <input
          id="numberWorking" type="number"
          class="form-control"
          placeholder="Number Working Day"
        />
        <div
          id="errorNumberWorking"
          class="text-danger"
          style="display: none"
        ></div>
      </div>
      <div class="form-group">
        <input
          id="dailySalary" type="number"
          class="form-control"
          placeholder="Salary per Day"
        />
        <div
          id="errorDailySalary"
          class="text-danger"
          style="display: none"
        ></div>
      </div>
    </div>
    <!-- Modal footer -->
    <div class="modal-footer">
    <button id="btnAdd" class="btn btn-primary">Add Employee</button>
           <button id="btnUpdate" class="btn btn-success">Update Employee</button>
           <button id="btnClose" class="btn btn-secondary" data-dismiss="modal">Close</button></div>
  </div>
</div>
`;
  } else if (valueType === "customer") {
    htmlTitle = "<h1>Customer List</h1>";
    htmlBtnAdd = `<button class="btn btn-success" onclick="orderCustomer()">Order Name Asc</button><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" id="btnAddModal"><i class="fa-solid fa-circle-plus"></i> Add Customer</button>`;
    htmlTable = `<thead class="text-primary text-center">
    <tr>
        <th>Code</th>
        <th>Name</th>
        <th>Address</th>
        <th>Email</th>
        <th>Company</th>
        <th>Bill Value</th>
        <th>Evaluate</th>
        <th>
            <i class="fa-solid fa-gear"></i>
        </th>
    </tr>

</thead>
<tbody id="tableStudent" class="text-center">
</tbody>`;
    htmlModal = `
<div class="modal-dialog">
  <div class="modal-content">
    <!-- Modal Header -->
    <div class="modal-header">
      <h3 class="modal-title">Customer</h3>
    </div>
    <!-- Modal body -->
    <div class="modal-body">
      <div class="form-group">
        <input
          id="id"
          class="form-control"
          placeholder="Code"
          type="number"
        />
        <div id="errorId" class="text-danger" style="display: none"></div>
      </div>

      <div class="form-group">
        <input id="name" class="form-control" placeholder="Name" />
        <div
          id="errorName"
          class="text-danger"
          style="display: none"
        ></div>
      </div>

      <div class="form-group">
        <input id="email" class="form-control" placeholder="Email" />
        <div
          id="errorEmail"
          class="text-danger"
          style="display: none"
        ></div>
      </div>
      <div class="form-group">
        <input id="address" class="form-control" placeholder="Address" />
        <div
          id="errorAddress"
          class="text-danger"
          style="display: none"
        ></div>
      </div>
      <div class="form-group">
        <input
          id="company"
          class="form-control"
          placeholder="Company"
        />
        <div
          id="errorCompany"
          class="text-danger"
          style="display: none"
        ></div>
      </div>
      <div class="form-group">
        <input
          id="billValue" type="number"
          class="form-control"
          placeholder="Bill Value"
        />
        <div
          id="errorBillValue"
          class="text-danger"
          style="display: none"
        ></div>
      </div>
      <div class="form-group">
        <input
          id="evaluate"
          class="form-control"
          placeholder="Evaluate"
        />
        <div
          id="errorEvaluate"
          class="text-danger"
          style="display: none"
        ></div>
      </div>
    </div>
    <!-- Modal footer -->
    <div class="modal-footer">
    <button id="btnAdd" class="btn btn-primary">Add Customer</button>
           <button id="btnUpdate" class="btn btn-success">Update Customer</button>
           <button id="btnClose" class="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>
  </div>
</div>
`
  }

  getEle("title").innerHTML = htmlTitle;
  getEle("buttonModal").innerHTML = htmlBtnAdd;
  getEle("table").innerHTML = htmlTable;
  getEle("myModal").innerHTML = htmlModal;

  if (valueType === "student") {
    getEle('btnAdd').onclick = () => {
      const student = getStudentInfo(true);
      if (student !== null) {
        listPerson.addStudent(student);
        setLocalStorageForStudent();
        getLocalStorageForStudent();
      }
    }

    getEle('btnUpdate').onclick = () => {
      const student = getStudentInfo(false);
      if (student !== null) {
        listPerson.updateStudent(student);
        setLocalStorageForStudent();
        getLocalStorageForStudent();
      } 
    }

    getEle('btnAddModal').onclick = () => {
      getEle('id').value = '';
      getEle('name').value = '';
      getEle('email').value = '';
      getEle('address').value = '';
      getEle('mathPoint').value = '';
      getEle('physicPoint').value = '';
      getEle('chemistryPoint').value = '';
      getEle('btnAdd').style.display = 'inline-block';
      getEle('btnUpdate').style.display = 'none';
      getEle('id').disabled = false;

      getEle('errorId').innerHTML = '';
      getEle('errorName').innerHTML = '';
      getEle('errorEmail').innerHTML = '';
      getEle('errorAddress').innerHTML = '';
      getEle('errorMathPoint').innerHTML = '';
      getEle('errorPhysicPoint').innerHTML = '';
      getEle('errorChemistryPoint').innerHTML = '';
    }

    getLocalStorageForStudent();
  } else if (valueType === "employee") {
    getEle('btnAdd').onclick = () => {
      const employee = getEmployeeInfo(true);
      if (employee !== null) {
        listPerson.addEmployee(employee);
        setLocalStorageForEmployee();
        getLocalStorageForEmployee();
      }
    }

    getEle('btnUpdate').onclick = () => {
      const employee = getEmployeeInfo(false);
      if (employee !== null) {
        listPerson.updateEmployee(employee);
        setLocalStorageForEmployee();
        getLocalStorageForEmployee();
      }
    }

    getEle('btnAddModal').onclick = () => {
      getEle('id').value = '';
      getEle('name').value = '';
      getEle('email').value = '';
      getEle('address').value = '';
      getEle('numberWorking').value = '';
      getEle('dailySalary').value = '';
      getEle('btnAdd').style.display = 'inline-block';
      getEle('btnUpdate').style.display = 'none';
      getEle('id').disabled = false;

      getEle('errorId').innerHTML = '';
      getEle('errorName').innerHTML = '';
      getEle('errorEmail').innerHTML = '';
      getEle('errorAddress').innerHTML = '';
      getEle('errorNumberWorking').innerHTML = '';
      getEle('errorDailySalary').innerHTML = '';
    }

    getLocalStorageForEmployee();
  } else if (valueType === "customer") {
    getEle('btnAdd').onclick = () => {
      const customer = getCustomerInfo(true);
      if (customer !== null) {
        listPerson.addCustomer(customer);
        setLocalStorageForCustomer();
        getLocalStorageForCustomer();
      }
    }
    getEle('btnUpdate').onclick = () => {
      const customer = getCustomerInfo(false);
      if (customer !== null) {
        listPerson.updateCustomer(customer);
        setLocalStorageForCustomer();
        getLocalStorageForCustomer();
      }
    }
    getEle('btnAddModal').onclick = () => {
      getEle('id').value = '';
      getEle('name').value = '';
      getEle('email').value = '';
      getEle('address').value = '';
      getEle('company').value = '';
      getEle('billValue').value = '';
      getEle('evaluate').value = '';
      getEle('btnAdd').style.display = 'inline-block';
      getEle('btnUpdate').style.display = 'none';
      getEle('id').disabled = false;

      getEle('errorId').innerHTML = '';
      getEle('errorName').innerHTML = '';
      getEle('errorEmail').innerHTML = '';
      getEle('errorAddress').innerHTML = '';
      getEle('errorCompany').innerHTML = '';
      getEle('errorBillValue').innerHTML = '';
      getEle('errorEvaluate').innerHTML = '';
    }
    getLocalStorageForCustomer();
  }
};

// Student
const getStudentInfo = (isAdd) => {
  const id = getEle('id').value;
  const name = getEle('name').value;
  const email = getEle('email').value;
  const address = getEle('address').value;
  const mathPoint = getEle('mathPoint').value * 1;
  const physicPoint = getEle('physicPoint').value * 1;
  const chemistryPoint = getEle('chemistryPoint').value * 1;

  let isValid = [];
  let indexOfValidField = 0;
  if (isAdd) {
    isValid[indexOfValidField++] = validation.emptyTest(id, "errorId", "(*) This field can't be empty") && validation.characterLengthTest(id, "errorId", "(*) Please enter maximum of 4-6 digits", 4, 6) && validation.accountExistsTest(id, "errorId", "(*) Code already exists", listPerson.arrStudent);
  }

  isValid[indexOfValidField++] = validation.emptyTest(name, "errorName", "(*) This field can't be empty") && validation.characterStringTest(name, "errorName", "(*) Please enter a string of characters");
  isValid[indexOfValidField++] = validation.emptyTest(email, "errorEmail", "(*) This field can't be empty") && validation.patternTest(email, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "errorEmail", "(*) Email is not valid");
  isValid[indexOfValidField++] = validation.emptyTest(address, "errorAddress", "(*) This field can't be empty");
  isValid[indexOfValidField++] = validation.emptyTest(mathPoint, "errorMathPoint", "(*) This field can't be empty");
  isValid[indexOfValidField++] = validation.emptyTest(physicPoint, "errorPhysicPoint", "(*) This field can't be empty");
  isValid[indexOfValidField++] = validation.emptyTest(chemistryPoint, "errorChemistryPoint", "(*) This field can't be empty");
  if (isValid.includes(false)) {
    return null;
  }
  const student = new Student(id, name, email, address, mathPoint, physicPoint, chemistryPoint);
  student.calculateAverage();
  return student;
}
window.getStudentInfo = getStudentInfo;

// Employee
const getEmployeeInfo = (isAdd) => {
  const id = getEle('id').value;
  const name = getEle('name').value;
  const email = getEle('email').value;
  const address = getEle('address').value;
  const numberWorking = getEle('numberWorking').value * 1;
  const dailySalary = getEle('dailySalary').value * 1;

  let isValid = [];
  let indexOfValidField = 0;
  if (isAdd) {
    isValid[indexOfValidField++] = validation.emptyTest(id, "errorId", "(*) This field can't be empty") && validation.characterLengthTest(id, "errorId", "(*) Please enter maximum of 4-6 digits", 4, 6) && validation.accountExistsTest(id, "errorId", "(*) Code already exists", listPerson.arrEmployee);
  }

  isValid[indexOfValidField++] = validation.emptyTest(name, "errorName", "(*) This field can't be empty") && validation.characterStringTest(name, "errorName", "(*) Please enter a string of characters");
  isValid[indexOfValidField++] = validation.emptyTest(email, "errorEmail", "(*) This field can't be empty") && validation.patternTest(email, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "errorEmail", "(*) Email is not valid");
  isValid[indexOfValidField++] = validation.emptyTest(address, "errorAddress", "(*) This field can't be empty");
  isValid[indexOfValidField++] = validation.emptyTest(numberWorking, "errorNumberWorking", "(*) This field can't be empty");
  isValid[indexOfValidField++] = validation.emptyTest(dailySalary, "errorDailySalary", "(*) This field can't be empty");
  if (isValid.includes(false)) {
    return null;
  }

  const employee = new Employee(id, name, email, address, numberWorking, dailySalary);
  employee.calculateSalary();
  return employee;
}
window.getEmployeeInfo = getEmployeeInfo;

// Customer
const getCustomerInfo = (isAdd) => {
  const id = getEle('id').value;
  const name = getEle('name').value;
  const email = getEle('email').value;
  const address = getEle('address').value;
  const company = getEle('company').value;
  const billValue = getEle('billValue').value * 1;
  const evaluate = getEle('evaluate').value;

  let isValid = [];
  let indexOfValidField = 0;
  if (isAdd) {
    isValid[indexOfValidField++] = validation.emptyTest(id, "errorId", "(*) This field can't be empty") && validation.characterLengthTest(id, "errorId", "(*) Please enter maximum of 4-6 digits", 4, 6) && validation.accountExistsTest(id, "errorId", "(*) Code already exists", listPerson.arrCustomer);
  }

  isValid[indexOfValidField++] = validation.emptyTest(name, "errorName", "(*) This field can't be empty") && validation.characterStringTest(name, "errorName", "(*) Please enter a string of characters");
  isValid[indexOfValidField++] = validation.emptyTest(email, "errorEmail", "(*) This field can't be empty") && validation.patternTest(email, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "errorEmail", "(*) Email is not valid");
  isValid[indexOfValidField++] = validation.emptyTest(address, "errorAddress", "(*) This field can't be empty");
  isValid[indexOfValidField++] = validation.emptyTest(company, "errorCompany", "(*) This field can't be empty");
  isValid[indexOfValidField++] = validation.emptyTest(billValue, "errorBillValue", "(*) This field can't be empty");
  isValid[indexOfValidField++] = validation.emptyTest(evaluate, "errorEvaluate", "(*) This field can't be empty");
  if (isValid.includes(false)) {
    return null;
  }
  const customer = new Customer(id, name, email, address, company, billValue, evaluate);
  return customer;
}
window.getCustomerInfo = getCustomerInfo;

const setLocalStorageForStudent = () => {
  let dataString = JSON.stringify(listPerson.arrStudent);
  localStorage.setItem("Student", dataString);
}
window.setLocalStorageForStudent = setLocalStorageForStudent;

const setLocalStorageForEmployee = () => {
  let dataString = JSON.stringify(listPerson.arrEmployee);
  localStorage.setItem("Employee", dataString);
}
window.setLocalStorageForEmployee = setLocalStorageForEmployee;

const setLocalStorageForCustomer = () => {
  let dataString = JSON.stringify(listPerson.arrCustomer);
  localStorage.setItem("Customer", dataString);
}
window.setLocalStorageForCustomer = setLocalStorageForCustomer;

const renderTableForStudent = (students) => {
  var content = ``;
  for (let student of students) {
    content += `
      <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.address}</td>
        <td>${student.email}</td>
        <td>${student.averagePoint}</td>
        <td><button class="btn btn-success" onclick="editStudent('${student.id}')" data-toggle="modal" data-target="#myModal">Edit</button></td>
        <td><button class="btn btn-danger" onclick="deleteStudent('${student.id}')">Delete</button></td>
      </tr>
    `;
  }
  getEle('tableStudent').innerHTML = content;
}
window.renderTableForStudent = renderTableForStudent;

const renderTableForEmployee = (employees) => {
  var content = ``;
  for (let employee of employees) {
    content += `
      <tr>
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.address}</td>
        <td>${employee.email}</td>
        <td>${employee.salary}</td>
        <td><button class="btn btn-success" onclick="editEmployee('${employee.id}')" data-toggle="modal" data-target="#myModal">Edit</button></td>
        <td><button class="btn btn-danger" onclick="deleteEmployee('${employee.id}')">Delete</button></td>
      </tr>
    `;
  }
  getEle('tableStudent').innerHTML = content;
}
window.renderTableForEmployee = renderTableForEmployee;

const renderTableForCustomer = (customers) => {
  var content = ``;
  for (let customer of customers) {
    content += `
      <tr>
        <td>${customer.id}</td>
        <td>${customer.name}</td>
        <td>${customer.address}</td>
        <td>${customer.email}</td>
        <td>${customer.company}</td>
        <td>${customer.billValue}</td>
        <td>${customer.evaluate}</td>
        <td><button class="btn btn-success" onclick="editCustomer('${customer.id}')" data-toggle="modal" data-target="#myModal">Edit</button></td>
        <td><button class="btn btn-danger" onclick="deleteCustomer('${customer.id}')">Delete</button></td>
      </tr>
    `;
  }
  getEle('tableStudent').innerHTML = content;
}
window.renderTableForCustomer = renderTableForCustomer;

const getLocalStorageForStudent = () => {
  if (localStorage.getItem("Student")) {
    let dataString = localStorage.getItem("Student");
    listPerson.arrStudent = JSON.parse(dataString);
    renderTableForStudent(listPerson.arrStudent);
  }
}
window.getLocalStorageForStudent = getLocalStorageForStudent;

const getLocalStorageForEmployee = () => {
  if (localStorage.getItem("Employee")) {
    let dataString = localStorage.getItem("Employee");
    listPerson.arrEmployee = JSON.parse(dataString);
    renderTableForEmployee(listPerson.arrEmployee);
  }
}
window.getLocalStorageForEmployee = getLocalStorageForEmployee;

const getLocalStorageForCustomer = () => {
  if (localStorage.getItem("Customer")) {
    let dataString = localStorage.getItem("Customer");
    listPerson.arrCustomer = JSON.parse(dataString);
    renderTableForCustomer(listPerson.arrCustomer);
  }
}
window.getLocalStorageForCustomer = getLocalStorageForCustomer;

const deleteStudent = (id) => {
  listPerson.deleteStudent(id);
  setLocalStorageForStudent();
  renderTableForStudent(listPerson.arrStudent);
}
window.deleteStudent = deleteStudent;

const deleteEmployee = (id) => {
  listPerson.deleteEmployee(id);
  setLocalStorageForEmployee();
  renderTableForEmployee(listPerson.arrEmployee);
}
window.deleteEmployee = deleteEmployee;

const deleteCustomer = (id) => {
  listPerson.deleteCustomer(id);
  setLocalStorageForCustomer();
  renderTableForCustomer(listPerson.arrCustomer);
}
window.deleteCustomer = deleteCustomer;

const editStudent = (id) => {
  let student = listPerson.getStudent(id);
  if (student != null) {
    getEle('id').value = student.id;
    getEle('name').value = student.name;
    getEle('email').value = student.email;
    getEle('address').value = student.address;
    getEle('mathPoint').value = student.mathPoint;
    getEle('physicPoint').value = student.physicPoint;
    getEle('chemistryPoint').value = student.chemistryPoint;
    getEle('btnAdd').style.display = 'none';
    getEle('btnUpdate').style.display = 'inline-block';
    getEle('id').disabled = true;
    getEle('errorId').innerHTML = '';
    getEle('errorName').innerHTML = '';
    getEle('errorEmail').innerHTML = '';
    getEle('errorAddress').innerHTML = '';
    getEle('errorMathPoint').innerHTML = '';
    getEle('errorPhysicPoint').innerHTML = '';
    getEle('errorChemistryPoint').innerHTML = '';
  }
}
window.editStudent = editStudent;

const editEmployee = (id) => {
  let employee = listPerson.getEmployee(id);
  if (employee != null) {
    getEle('id').value = employee.id;
    getEle('name').value = employee.name;
    getEle('email').value = employee.email;
    getEle('address').value = employee.address;
    getEle('numberWorking').value = employee.numberWorking;
    getEle('dailySalary').value = employee.dailySalary;
    getEle('btnAdd').style.display = 'none';
    getEle('btnUpdate').style.display = 'inline-block';
    getEle('id').disabled = true;
    getEle('errorId').innerHTML = '';
    getEle('errorName').innerHTML = '';
    getEle('errorEmail').innerHTML = '';
    getEle('errorAddress').innerHTML = '';
    getEle('errorNumberWorking').innerHTML = '';
    getEle('errorDailySalary').innerHTML = '';
  }
}
window.editEmployee = editEmployee;

const editCustomer = (id) => {
  let customer = listPerson.getCustomer(id);
  if (customer != null) {
    getEle('id').value = customer.id;
    getEle('name').value = customer.name;
    getEle('email').value = customer.email;
    getEle('address').value = customer.address;
    getEle('company').value = customer.company;
    getEle('billValue').value = customer.billValue;
    getEle('evaluate').value = customer.evaluate;
    getEle('btnAdd').style.display = 'none';
    getEle('btnUpdate').style.display = 'inline-block';
    getEle('id').disabled = true;
    getEle('errorId').innerHTML = '';
    getEle('errorName').innerHTML = '';
    getEle('errorEmail').innerHTML = '';
    getEle('errorAddress').innerHTML = '';
    getEle('errorCompany').innerHTML = '';
    getEle('errorBillValue').innerHTML = '';
    getEle('errorEvaluate').innerHTML = '';
  }
}
window.editCustomer = editCustomer;

const orderStudent = () => {
  const students = listPerson.arrStudent;
  if (students.length !== 0) {
    for(let i = 0; i < students.length - 1; i++) {
      let minIndex = i;
      for(let j = i + 1; j < students.length; j++) {
        if (students[j].name < students[minIndex].name) {
          minIndex = j;
        }
      }
      let temp = students[minIndex];
      students[minIndex] = students[i];
      students[i] = temp;
    }
  }
  renderTableForStudent(students);
}
window.orderStudent = orderStudent;

const orderEmployee = () => {
  const employees = listPerson.arrEmployee;
  if (employees.length !== 0) {
    for(let i = 0; i < employees.length - 1; i++) {
      let minIndex = i;
      for(let j = i + 1; j < employees.length; j++) {
        if (employees[j].name < employees[minIndex].name) {
          minIndex = j;
        }
      }
      let temp = employees[minIndex];
      employees[minIndex] = employees[i];
      employees[i] = temp;
    }
  }
  renderTableForEmployee(employees);
}
window.orderEmployee = orderEmployee;

const orderCustomer = () => {
  const customers = listPerson.arrCustomer;
  if (customers.length !== 0) {
    for(let i = 0; i < customers.length - 1; i++) {
      let minIndex = i;
      for(let j = i + 1; j < customers.length; j++) {
        if (customers[j].name < customers[minIndex].name) {
          minIndex = j;
        }
      }
      let temp = customers[minIndex];
      customers[minIndex] = customers[i];
      customers[i] = temp;
    }
  }
  renderTableForCustomer(customers);
}
window.orderCustomer = orderCustomer;