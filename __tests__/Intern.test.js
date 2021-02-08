const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialize", () => {
        // should have a full name, id, and email
        it("should have a name, id, email, and a school", () => {
            // arrange/act
            const intern = new Intern("Tom Riddle", 4567, "triddle@holcrux.com", "Slitherin University");
            // assert 
            expect("name" in intern).toEqual(true);
            expect("id" in intern).toEqual(true);
            expect("email" in intern).toEqual(true);
            expect("school" in intern).toEqual(true);
        })

        // should not have a missing value for name
        it("should not have a missing value name", () => {
            // arrange/act
            const intern = new Intern("Tom Riddle", 4567, "triddle@holcrux.com", "Slitherin University");
            // assert
            expect(intern.name).not.toEqual(undefined);
        });

        // should have an employee id that is a number, not a string
        it("should have an employee id that is a number, not a string", () => {
            // arrange/act
            const intern = new Intern("Tom Riddle", 4567, "triddle@holcrux.com", "Slitherin University");
            // assert
            expect(typeof intern.id).toEqual("number");
        })

        // should have a valid e-mail address format
        it("should have a valid e-mail address format", () => {
            // arrange/act
            const intern = new Intern("Tom Riddle", 4567, "triddle@holcrux.com", "Slitherin University");

            // assert
            expect(intern.email).toEqual("triddle@holcrux.com");
        })

        // should have a GitHub username
        it("should have a school", () => {
            // arrange/act
            const intern = new Intern("Tom Riddle", 4567, "triddle@holcrux.com", "Slitherin University")

            // assert
            expect(intern.school).toEqual("Slitherin University");
        })
    })
});