//Manager Card

const generateHTML = (data) => {
  function newMgr(data) {
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
    return `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <p class="card-text">${data.id}</p>
      <p class="card-text">${data.email}</p>
      <p class="list-group-item">My GitHub username is <a href=“https://github.com/${data.getGithub()}">${data.getGithub()}</a></p>
      <p class="list-group-item">My GitHub username is ${data.getEmail()}</p>
      <p class="list-group-item">Role: ${data.getRole()}</p>
    </div>
  </div>`
  }

  // Intern Card
  const newIntern = (data) => {
    return `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <p class="card-text">${data.id}</p>
      <p class="card-text">${data.email}</p>
      <p class="list-group-item">My GitHub username is <${data.getName()}</p>
      <p class="list-group-item">My email is ${data.getEmail()}</p>
      <p class="list-group-item">Role: ${data.getRole()}</p>
      <p class="list-group-item">School: ${data.getSchool()}</p>
    </div>
  </div>`
  }

  //this function is run once cards are created
  const html = [];
 html.push(data
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => newMgr(manager))
        .join("")
    );
    html.push(data
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => newEngineer(engineer))
      .join("")
  );html.push(data
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => newIntern(intern))
    .join("")
);
    //add Manager and Intern
     return html.join("");
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