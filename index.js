const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateHTML = require("./template")

const teamMembers = [];

//Function to run chain of inquirer prompts used to create profiles based on user input 

function appMenu() {

  function createTeam() {
    inquirer.prompt([
      {
        type: 'list',
        name: 'userInput',
        message: 'What employee would you like to create?',
        choices: ["Engineer", "Manager", "Intern", "Finished adding employees"]
      },

    ]).then(response => {
      switch (response.userInput) {
        case "Engineer":
          getEngInfo();//will run if engineer 
          break;
        case "Manager":
          getMgrInfo();
          break;
        case "Intern":
          getInternInfo();
        default:
          constructTeam();//default when done adding members ie when i answer no more team members, fire renderTeam()
      }
    });
  }

  // //Manager Profile Sections
  //name, employee id, email, office number
  const getMgrInfo = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter name of team manager:',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter employee ID:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter email address:',
      },
      {
        type: 'input',
        name: 'number',
        message: 'Enter office number:',
      },
    ]).then(response => {
      const manager = new Manager(response.name, response.id, response.email, response.number);
      teamMembers.push(manager)
      createTeam();
    });
  }

  //Engineer Profile Section:
  //name, ID, email, github username, linkedin & return to menu
  const getEngInfo = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter name of engineer:',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter employee ID:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter email:',
      },

    ]).then(response => {
      const engineer = new Engineer(response.name, response.id, response.email, response.github);
      teamMembers.push(engineer)
      createTeam();
    });
  }

  //Intern Section
  //name, id, email school & return to menu
  const getInternInfo = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter name of intern:',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter id:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter email:',
      },
      {
        type: 'input',
        name: 'school',
        message: 'Enter school:',
      }

    ]).then(function (data) {
      const intern = new Intern(data.name, data.id, data.email, data.school)
      teamMembers.push(intern)
      createTeam();
    })
  }
  function constructTeam() {
    let HTMLContent = generateHTML(teamMembers)
    const filePath = "index.html";
    fs.writeFileSync(filePath, HTMLContent, "utf-8")
  }
  createTeam();
}


appMenu();












