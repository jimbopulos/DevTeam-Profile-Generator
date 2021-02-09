// import Employee class
const Employee = require("./Employee");

// constructor to build engineer class with properties
// engineer class extends employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }

    createManager() {
        return `<div class="col-md-4">
        <!-- card for Manager -->
        <div class="card" style="width: 18rem;">
            <div class="manager-header">
                <!-- name -->
                <h2 class="card-title">${this.name}</h2>
                <!-- role -->
                <h3 class="card-title">Manager</h3>
            </div>
            <div class="role-info">
                <ul class="list-group list-group-flush">
                    <!-- id -->
                    <li class="list-group-item">ID: ${this.id}</li>
                    <!-- email -->
                    <li class="list-group-item">E-mail: <a href="mailto:${this.email}">${this.email}</a></li>
                    <!-- office number -->
                    <li class="list-group-item">Office Number: ${this.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>`
    }
}

module.exports = Manager;