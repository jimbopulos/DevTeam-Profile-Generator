// import Employee class
const Employee = require("./Employee");

// constructor to build engineer class with properties
// engineer class extends employee class
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
      super(name, id, email);
      this.gitHub = gitHub;
    }

    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }

    createEngineer() {
        return `<div class="col-md-4">
        <!-- card for Engineer -->
        <div class="card" style="width: 18rem;">
            <div class="engineer-header">
                <!-- name -->
                <h2 class="card-title">${this.name}</h2>
                <!-- role -->
                <h3 class="card-title">Engineer</h3>
            </div>
            <div class="role-info">
                <ul class="list-group list-group-flush">
                    <!-- id -->
                    <li class="list-group-item">ID: ${this.id}</li>
                    <!-- email -->
                    <li class="list-group-item">E-mail: <a href="mailto:${this.email}">${this.email}</a></li>
                    <!-- github -->
                    <li class="list-group-item">GitHub: <a href="http://github.com/${this.gitHub}" target="_blank" rel="noopener noreferrer">${this.gitHub}</a></li>
                </ul>
            </div>
        </div>
    </div>`;
    }
}

module.exports = Engineer;