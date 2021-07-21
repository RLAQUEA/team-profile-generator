//Manager Card

const generateHTML = (data) => {
  function generateMgr(data) {
    return `<h1 class="card-manager">${data.name}</h1>
  <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
  <p class="lead"> ${data.id}.</p>
  <p class="lead"> ${data.email}.</p>
  <ul class="list-group">
  <li class="list-group-item">My GitHub username is ${data.getName()}</li>
    <li class="list-group-item">My GitHub username is ${data.getEmail()}</li>
    <li class="list-group-item">: ${data.getRole()}</li>
  </ul>`
  };


  // Engineer Card
  const newEngineer = (data) => {
    return `<h1 class="card-engineer">${data.name}</h1>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <p class="lead"> ${data.id}.</p>
    <p class="lead"> ${data.email}.</p>
    <ul class="list-group">
    <li class="list-group-item">My GitHub username is ${data.getName()}</li>
      <li class="list-group-item">My GitHub username is ${data.getEmail()}</li>
      <li class="list-group-item">LinkedIn: ${data.getRole()}</li>
    </ul>`
  }

  // Intern Card
  const newIntern = (data) => {
    return `<h1 class="title">My Team</></h1>
<h1 class="card-intern">${data.name}</h1>
  <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
  <p class="lead"> ${data.id}.</p>
  <p class="lead"> ${data.email}.</p>
  <ul class="list-group">
  <li class="list-group-item">My GitHub username is ${data.getName()}</li>
    <li class="list-group-item">My GitHub username is ${data.getEmail()}</li>
    <li class="list-group-item">: ${data.getRole()}</li>
    <li class="list-group-item">: ${data.getSchool()}</li>
  </ul>`;
  }
}

module.exports = data => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Profile Generator</title>
  </head>
  <body>
  <div class="card">
  <div class="container">
    <h1 class="title">My Team</></h1>
    ${generateHTML(data)}
</div>
</div>
</body>
</html>`}