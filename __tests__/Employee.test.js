const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialize", () => {
        // should have a full name, id, and email
        it("should have a name, id, email", () => {
            // arrange/act
            const employee = new Employee("Tom Riddle", 4567, "triddle@holcrux.com");
            // assert 
            expect("name" in employee).toEqual(true);
            expect("id" in employee).toEqual(true);
            expect("email" in employee).toEqual(true);
        })

        // should not have a missing value for name
        it("should not have a missing value name", () => {
            // arrange/act
            const employee = new Employee("Tom Riddle", 4567, "triddle@holcrux.com");
            // assert
            expect(employee.name).not.toEqual(undefined);
        });

        // should have an employee id that is a number, not a string
        it("should have an employee id that is a number, not a string", () => {
            // arrange/act
            const employee = new Employee ("Tom Riddle", 4567, "triddle@holcrux.com");
            // assert
            expect(typeof employee.id).toEqual("number");
        })

        // should have a valid e-mail address format
        it("should have a valid e-mail address format", () => {
            // arrange/act
            const employee = new Employee("Tom Riddle", 4567, "triddle@holcrux.com")

            // assert
            expect(employee.email).toEqual("triddle@holcrux.com");
        })
    })
});

    // describe("getRole", () => {
    //     // should be an employee of the company
    //     it("should be an employee of the company", () => {
    //         // arrange
    //         const employee = new Employee("Tom", "Riddle", 4567, "triddle@holcrux.com");

    //         // act
    //         employee.getRole();

    //         // assert
    //         expect(employee.getRole()).toEqual("Employee");
    //     })
    // })
