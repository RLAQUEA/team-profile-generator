const fs = require('fs');
const inquirer = require('inquirer');


//needed inputs for manager: 
//name, employee id, email, office number
const getProfileInfo = () => {
  return inquirer.prompt([
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

   

   //needed inputs for engineer:
    // name, ID, email, github username & return to menu

    {
      type: 'input',
      name: 'name',
      message: 'Enter name of engineer:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter link to LinkedIn profile',
    },

    //needed inputs for intern:
    //name, id, email school & return to menu

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
    },
  ]).then(function (data) {
    let HTMLContent = generateHTML(data)
    const filePath = "index.html";
    fs.writeFileSync(filePath, HTMLContent)
  })
    .then(function () {
      console.log("Success!");
  })
  .catch(function (error) {
      console.log(error);
  })
}
getProfileInfo()


//Employee Profile Section
class Employee { 
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}
module.exports = Employee;

//Manager Profile Section
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;

//Engineer Profile Section
const Employee = require("./Employee");
​
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;

//Intern Profile Section
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
​  getSchool() {
    return this.school;
  }  
  getRole() {
    return "Intern";
  }  
}
module.exports = Engineer;













