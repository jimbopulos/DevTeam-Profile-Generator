// import Employee class
const Employee = require("./Employee");

// constructor to build engineer class with properties
// engineer class extends employee class
class Intern extends Employee {
    constructor(firstName, lastName, id, email, school) {
      super(firstName, lastName, id, email);
      this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;