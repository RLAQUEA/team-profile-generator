//Manager Card

const generateHTML = (data) => {
  function newMgr(data) {
    return `<div class="card-manager" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title text-light bg-primary">${data.name}</h5>
      <p class="card-text">${data.id}</p>
      <p class="card-text">${data.email}</p>
    <p class="list-group-item">My email is ${data.getEmail()}</p> 
    <p class="list-group-item">Office number: ${data.officeNumber}</p>
    <p class="list-group-item">Role: ${data.getRole()}</p>
  </ul>`
  };

  // Engineer Card
  const newEngineer = (data) => {
    return `<div class="card-engineer" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title text-light bg-primary">${data.name}</h5>
      <p class="card-text">${data.id}</p>
      <p class="card-text">${data.email}</p> 
      <p class="list-group-item">My email is ${data.getEmail()}</p>
      <p class="list-group-item">My GitHub username is <a href=“https://github.com/${data.getGithub()}">${data.getGithub()}</a></p>
      <p class="list-group-item">Role: ${data.getRole()}</p>
    </div>
  </div>`
  }

  // Intern Card
  const newIntern = (data) => {
    return `<div class="card-intern" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title text-light bg-primary">${data.name}</h5>
      <p class="card-text">${data.id}</p>
      <p class="card-text">${data.email}</p>
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
  <div class="card-body">
  <div class="container">
    <h1 class="title text-center text-light bg-danger">My Team</></h1>
    ${generateHTML(data)}
</div>
</div>
</div>
</body>
</html>`}
