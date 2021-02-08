// import Employee class
const Employee = require("./Employee");

// constructor to build engineer class with properties
// engineer class extends employee class
class Engineer extends Employee {
    constructor(firstName, lastName, id, email, gitHub) {
      super(firstName, lastName, id, email);
      this.gitHub = gitHub;
    }

    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;