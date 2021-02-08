const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialize", () => {
        // should have a full name, id, and email
        it("should have a full name, id, email", () => {
            // arrange/act
            const employee = new Employee("Tom", "Riddle", "holcrux@darkmagic.com");
            // assert 
            expect("fullName" in employee).toEqual(true);
            expect("id" in employee).toEqual(true);
            expect("email" in employee).toEqual(true);
        })
    })
})