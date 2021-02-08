// import Employee class
const Employee = require("./Employee");

// constructor to build engineer class with properties
// engineer class extends employee class
class Manager extends Employee {
    constructor(firstName, lastName, id, email, officeNumber) {
      super(firstName, lastName, id, email);
      this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;