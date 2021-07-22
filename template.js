//Manager Card

const generateHTML = (data) => {
  function newMgr(data) {
    return `<div class="mx-auto card-group border-dark mb-3" style="width: 18rem;">
    <span class="border">
    <div class="card-body">
      <h5 class="card-title text-light bg-primary">${data.name}<br>
      <span style="font-size: 1em; margin-right:1em;">
<i class="fas fa-coffee"></i>${data.getRole()}</h5>
</span> 
      <p class="list-group-item">${data.id}</p>
      <p class="list-group-item">${data.email}</p>
      <p class="list-group-item">Email: ${data.getEmail()}</p> 
      <p class="list-group-item">Office number: ${data.officeNumber}</p>
  </ul>
  </div>
 </span>
  </div>`
  };

  // Engineer Card
  const newEngineer = (data) => {
    return `<div class=" mx-auto card-group border-dark mb-3" style="width: 18rem;">
    <span class="border">
    <div class="card-body">
      <h5 class="card-title text-light bg-primary">${data.name}<br>
      <span style="font-size: 1em; margin-right:1em;">
      <i class="fas fa-glasses"></i>
    </span>${data.getRole()}</h5>
      <p class="list-group-item">${data.id}</p>
      <p class="list-group-item">${data.email}</p> 
      <p class="list-group-item">Email: ${data.getEmail()}</p>
      <p class="list-group-item">GitHub username: <a href=“https://github.com/${data.getGithub()}">${data.getGithub()}</a></p>
    </div>
    </span>
  </div>`
  }

  // Intern Card
  const newIntern = (data) => {
    return `<div class=" mx-auto card-group border-dark mb-3" style="width: 18rem;">
    <span class="border">
    <div class="card-body">
      <h5 class="card-title text-light bg-primary">${data.name}<br>
      <span style="font-size: 1em; margin-right:1em;">
      <i class="fas fa-user-graduate"></i>
    </span>${data.getRole()}</h5>
      <p class="list-group-item">${data.id}</p>
      <p class="list-group-item">${data.email}</p>
      <p class="list-group-item">Email: ${data.getEmail()}</p>
      <p class="list-group-item">School: ${data.getSchool()}</p>
    </div>
    </span>
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
  ); html.push(data
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
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
  <title>Team Profile Generator</title>
  </head>
  <body>
  <div class="card">
  <h1 class="title text-center text-light bg-danger">My Team</></h1>
  <div class="container display-flex justify-content flex-direction row">
    
    ${generateHTML(data)}
</div>
</div>
</body>
</html>`}
