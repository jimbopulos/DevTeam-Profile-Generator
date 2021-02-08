const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialize", () => {
        // should have a full name, id, and email
        it("should have a name, id, email, and an office number", () => {
            // arrange/act
            const manager = new Manager("Tom Riddle", 4567, "triddle@holcrux.com", 116);
            // assert 
            expect("name" in manager).toEqual(true);
            expect("id" in manager).toEqual(true);
            expect("email" in manager).toEqual(true);
            expect("officeNumber" in manager).toEqual(true);
        })

        // should not have a missing value for name
        it("should not have a missing value name", () => {
            // arrange/act
            const manager = new Manager("Tom Riddle", 4567, "triddle@holcrux.com", 116);
            // assert
            expect(manager.name).not.toEqual(undefined);
        });

        // should have an employee id that is a number, not a string
        it("should have an employee id that is a number, not a string", () => {
            // arrange/act
            const manager = new Manager("Tom Riddle", 4567, "triddle@holcrux.com", 116);
            // assert
            expect(typeof manager.id).toEqual("number");
        })

        // should have a valid e-mail address format
        it("should have a valid e-mail address format", () => {
            // arrange/act
            const manager = new Manager("Tom Riddle", 4567, "triddle@holcrux.com", 116);

            // assert
            expect(manager.email).toEqual("triddle@holcrux.com");
        })

        // should have an office number
        it("should have a school", () => {
            // arrange/act
            const manager = new Manager("Tom Riddle", 4567, "triddle@holcrux.com", 116)

            // assert
            expect(manager.officeNumber).toEqual(116);
        })

        // should have an office number that is a number, not a string
        it("should have an office number that is a number, not a string", () => {
            // arrange/act
            const manager = new Manager("Tom Riddle", 4567, "triddle@holcrux.com", 116);
            // assert
            expect(typeof manager.officeNumber).toEqual("number");
        })
    })
});