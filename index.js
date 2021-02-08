// DEPENDENCIES
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");

// DATA 

// FUNCTIONS/USER INTERACTIONS
// questions for user regarding Manager
function managerQuestions() {
    inquirer.prompt([
        {
            // manager name
            // manager id
            // 
            type: "input",
            message
        }
    ])
}

// questions for user regarding Engineer
function engineerQuestions() {
    // ask for another role
        // add?
}

// questions for user regarding Intern
function internQuestions() {
    // ask for another role
        // add?
}

// ask for role after taking user through Manager questions first
function askRole() {
    inquirer.prompt([{
        type: "list",
        message: "Which employee would you like to add?",
        choices: ["Engineer", "Intern"],
        name: "roles"
    }]).then(userResponse, function() {
        if(userResponse.roles === "Engineer") {
            engineerQuestions
        } else {
            internQuestions
        }
    })
}
