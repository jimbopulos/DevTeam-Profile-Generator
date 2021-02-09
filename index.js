// DEPENDENCIES
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const generateFile = require("./lib/generateFile");

// DATA 
// empty array to receive role card templates
employeeArray = [];

// FUNCTIONS/USER INTERACTIONS
// get the template
const renderFile = () => {
    let teamTemplate = fs.readFileSync("./src/template.html", "utf-8");
    // locate placeholder in template.html {{ employeeCards }}

    // replace it with employeeArray
    writeFileSync("./dist/myTeam.html", teamTemplate);
}

// write to new file
// create function to write MyTeam file
function writeFileSync(fileName, response) {
    fs.writeFile(fileName, response, (error) => {
        error ? console.error(error) : console.log("Your file has been generated.");
    });
}

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
        choices: ["Engineer", "Intern", "Finish and generate"],
        name: "role"
    }]).then(async response => {
        // console.log(response);
        switch(response.role) {
            case "Engineer":
            await inquirer.prompt(engineerQuestions).then( async response => {
                    const newEngineer = new Engineer (
                        response.engineerName,
                        response.engineerId,
                        response.engineerEmail,
                        response.engineerGitHub
                    );
                    // push it to employeeArray
                    employeeArray.push(newEngineer.createEngineer());
                    console.log(employeeArray);
                })
                askRole();
                break;
            case "Intern":
            await inquirer.prompt(internQuestions).then( async response => {
                    const newIntern = new Intern (
                        response.internName,
                        response.internId,
                        response.internEmail,
                        response.internSchool
                    );
                    // push it to employeeArray
                    employeeArray.push(newIntern.createIntern());
                    console.log(employeeArray);
                })
                askRole();
                break;
            default:
            // write file
            renderFile();
            // writeFileSync("./dist/myTeam.html", generateFile(response));
            }
        })
}

function init() {
    // prompt user for intial manager questions
    inquirer.prompt(managerQuestions).then((response) => {
        const newManager = new Manager (
            response.managerName,
            response.managerId,
            response.managerEmail,
            response.managerOfficeNumber
        );  
            // push it to employeeArray
            employeeArray.push(newManager.createManager());
            console.log(employeeArray);
            askRole();
        })
    }

// Function to initialize app
init();