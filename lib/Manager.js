
const Employee = require("./Employee");

//needed inputs for manager: 
//name, employee id, email, office number
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }
    getRole() {
      return "Manager";
    }

    getofficeNumber() {
       return this.officeNumber;
    }
  }
  module.exports = Manager;

