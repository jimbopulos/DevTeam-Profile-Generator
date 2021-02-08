const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialize", () => {
        // should have a full name, id, and email
        it("should have a name, id, email, and github username", () => {
            // arrange/act
            const engineer = new Engineer("Tom Riddle", 4567, "triddle@holcrux.com", "codemort");
            // assert 
            expect("name" in engineer).toEqual(true);
            expect("id" in engineer).toEqual(true);
            expect("email" in engineer).toEqual(true);
            expect("gitHub" in engineer).toEqual(true);
        })

        // should not have a missing value for name
        it("should not have a missing value name", () => {
            // arrange/act
            const engineer = new Engineer("Tom Riddle", 4567, "triddle@holcrux.com", "codemort");
            // assert
            expect(engineer.name).not.toEqual(undefined);
        });

        // should have an employee id that is a number, not a string
        it("should have an employee id that is a number, not a string", () => {
            // arrange/act
            const engineer = new Engineer("Tom Riddle", 4567, "triddle@holcrux.com", "codemort");
            // assert
            expect(typeof engineer.id).toEqual("number");
        })

        // should have a valid e-mail address format
        it("should have a valid e-mail address format", () => {
            // arrange/act
            const engineer = new Engineer("Tom Riddle", 4567, "triddle@holcrux.com", "codemort")

            // assert
            expect(engineer.email).toEqual("triddle@holcrux.com");
        })

        // should have a GitHub username
        it("should have a GitHub username", () => {
            // arrange/act
            const engineer = new Engineer("Tom Riddle", 4567, "triddle@holcrux.com", "codemort")

            // assert
            expect(engineer.gitHub).toEqual("codemort");
        })
    })
});
