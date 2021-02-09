// DEPENDENCIES
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");

// DATA 

// FUNCTIONS/USER INTERACTIONS

// create function to write MyTeam file

// questions for user regarding Manager
const managerQuestions = [
        {
            // manager name
            type: "input",
            message: "What is your manager's name?",
            name: "managerName",
        },
        {
            // manager id
            type: "input",
            message: "What is your manager's employee id?",
            name: "managerId",
        },
        {
            // manager email
            type: "input",
            message: "What is your manager's e-mail?",
            name: "managerEmail",
        },
        {
            // office number
            type: "input",
            message: "What is your manager's office number?",
            name: "managerOfficeNumber",
        },
    ]

// questions for user regarding Engineer
const engineerQuestions = [
    {
        // engineer name
        type: "input",
        message: "What is your engineer's name?",
        name: "engineerName",
    },
    {
        // engineer id
        type: "input",
        message: "What is your engineer's employee id?",
        name: "engineerId",
    },
    {
        // engineer email
        type: "input",
        message: "What is your engineer's e-mail?",
        name: "engineerEmail",
    },
    {
        // GitHub
        type: "input",
        message: "What is your engineer's GitHub username?",
        name: "engineerGitHub",
    },
]

// questions for user regarding Intern
const internQuestions = [
    {
        // intern name
        type: "input",
        message: "What is your intern's name?",
        name: "internName",
    },
    {
        // intern id
        type: "input",
        message: "What is your intern's employee id?",
        name: "internId",
    },
    {
        // intern email
        type: "input",
        message: "What is your intern's e-mail?",
        name: "internEmail",
    },
    {
        // school
        type: "input",
        message: "What is your intern's school?",
        name: "internSchool",
    },
]

// ask for role after taking user through Manager questions first
function askRole() {
    inquirer.prompt([{
        type: "list",
        message: "Which role would you like to add?",
        choices: ["Engineer", "Intern"],
        name: "roles"
    }]).then((response) => {
        // console.log(response);
        if(response.roles === "Engineer") {
            inquirer.prompt(engineerQuestions).then((response) => {
            console.log(response.engineerName);
            console.log(response.engineerId);
            console.log(response.engineerEmail);
            console.log(response.engineerGitHub);
            })
        } else {
            inquirer.prompt(internQuestions).then((response) => {
            console.log(response.internName);
            console.log(response.internId);
            console.log(response.internEmail);
            console.log(response.internSchool);
            })
        }
    })
    // ask for another role
        // add?
        // if yes, run askRole
        // if not, writeFileSync
}

// Create function to write 


function init() {
    // prompt user for intial manager questions
    inquirer.prompt(managerQuestions).then((response) => {
            console.log(response.managerName);
            console.log(response.managerId);
            console.log(response.managerEmail);
            console.log(response.managerOfficeNumber);
            askRole();
            // write to new file
            // writeToFile("dist/myTeam.html", generateMarkdown(response));
        })
    }

// Function to initialize app
init();
