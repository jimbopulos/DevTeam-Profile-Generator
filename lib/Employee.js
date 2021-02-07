class Employee {
    constructor(firstName, lastName, role) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.role = role;
      this.id = 1;
      this.email = `${this.firstName}.${this.lastName}@devsol.com`;
    }
}

module.exports = Employee