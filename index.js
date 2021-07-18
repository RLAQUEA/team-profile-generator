const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (data) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${data.get.name}</h1>
    <p class="lead">I am from ${data.get.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${data.get.github}</li>
      <li class="list-group-item">LinkedIn: ${data.get.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;



//needed inputs for manager: 
//name, employee id, email, office number

inquirer
  .prompt([
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
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your GitHub ',
    },

    //needed inputs for intern:
    //name, id, email school & return to menu

  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(data);

    fs.writeFileSync('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created new profile!')
    );
  });