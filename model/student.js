import Person from "./person.js";

class Student extends Person {
    constructor(_id, _name, _email, _address, _mathPoint, _physicPoint, _chemistryPoint) {
        super(_id, _name, _email, _address)
        this.mathPoint = _mathPoint;
        this.physicPoint = _physicPoint;
        this.chemistryPoint = _chemistryPoint;
        this.averagePoint = 0;
    }

    calculateAverage() {
        this.averagePoint = (this.mathPoint + this.physicPoint + this.chemistryPoint) / 3;
    }

}
export default Student;