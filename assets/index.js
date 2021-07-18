const fs = require('fs');
const inquirer = require('inquirer');

// const generateHTML = (data) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Team Profile Generator</title>
// </head>
// <body>
// <div class="card">
//   <div class="container">
//     <h1 class="title">My Team</></h1>

//     <h1 class="card-manager">${data.name}</h1>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <p class="lead"> ${data.id}.</p>
//     <p class="lead"> ${data.email}.</p>
//     <ul class="list-group">
//     <li class="list-group-item">My GitHub username is ${data.getName()}</li>
//       <li class="list-group-item">My GitHub username is ${data.getEmail()}</li>
//       <li class="list-group-item">LinkedIn: ${data.getRole()}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;

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
  const employee = function (text) {
    if (typeof text !== 'string' || !text.trim().length) {
      throw new Error("Expected parameter 'text' to be a non empty string");
      this.text = text;
    };
    module.exports = employee;

    const engineer = {
      name: "John",
      id: 1111,
      email: 'noemail@email.com',
      role: 'engineer',
      getName: function () {
        return this.name + " " + this.id + this.email;
      },
      getId: function () {
        return this.id;
      },
      getEmail: function () {
        return this.email;
      },
      getRole: function () {
        return employee;
      },
    }
  };





