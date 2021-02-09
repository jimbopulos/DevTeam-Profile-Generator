// import Employee class
const Employee = require("./Employee");

// constructor to build engineer class with properties
// engineer class extends employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

    createIntern() {
        return `<div class="col-md-4">
        <!-- card for Intern -->
        <div class="card" style="width: 18rem;">
            <div class="intern-header">
                <!-- name -->
                <h2 class="card-title">${this.name}</h2>
                <!-- role -->
                <h3 class="card-title">Intern</h3>
            </div>
            <div class="role-info">
                <ul class="list-group list-group-flush">
                    <!-- id -->
                    <li class="list-group-item">ID: ${this.id}</li>
                    <!-- email -->
                    <li class="list-group-item">E-mail: <a href="mailto:${this.email}">${this.email}</a></li>
                    <!-- school -->
                    <li class="list-group-item">School: ${this.school}</li>
                </ul>
            </div>
        </div>
    </div>`
    }
}

module.exports = Intern;