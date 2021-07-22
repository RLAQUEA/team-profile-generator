const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/template")
//Empty array ready for user input, which creates team member profiles
const teamMembers = [];

//Main function to trigger the others to run chain of inquirer prompts
function appMenu() {
//Function to create Employee profile based on user input, which then is extended using other classes
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
          getEngInfo();
          break;
        case "Manager":
          getMgrInfo();
          break;
        case "Intern":
          getInternInfo();
        default:
          constructTeam();
      }
    });
  }

  //Function to create Manager profile based on user input
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
      //Response will return all information from inquirer prompts to create a new instance of a manager
    ]).then(response => {
      const manager = new Manager(response.name, response.id, response.email, response.number);
      teamMembers.push(manager)
      createTeam();
    });
  }

  //Function to create Engineer profile based on user input
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
      //Response will return all information from inquirer prompts to create a new instance of an engineer
    ]).then(response => {
      const engineer = new Engineer(response.name, response.id, response.email, response.github);
      teamMembers.push(engineer)
      createTeam();
    });
  }

  //Function to create Intern profile based on user input
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
//Response will return all information from inquirer prompts to create a new instance of an intern
    ]).then(function (data) {
      const intern = new Intern(data.name, data.id, data.email, data.school)
      teamMembers.push(intern)
      createTeam();
    })
  }
  //Function that creates the team based on user input and writes it to an html file 
  function constructTeam() {
    let HTMLContent = generateHTML(teamMembers)
    const filePath = "./dist/index.html";
    fs.writeFileSync(filePath, HTMLContent, "utf-8")
  }
  createTeam();
}

//calls main function 
appMenu();












