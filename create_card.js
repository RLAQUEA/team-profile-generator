const Engineer = require("./Engineer")
//import other classes
//array that will take whatver team members you push to it
const teamMembers = [];
//function that runs everything
appMenu(){
//inquirer prompt that interacts with a switch case or conditional to select what team member you want and fires a function to create that team member
function selectTeam() {
    inquirer.prompt([
      {
        type: "list",
        name: "userInput",
        message: "Which type of team member would you like to add?",
        choices: [
        "Manager",
          "Engineer",
          "Intern",
          "No More people for God sake!"
        ]
      }
    ]).then(response => {
      switch(response.userInput) {
      case "Engineer":
        addEngineer();//fires if you select "Engineer"
       //etc for other team members
      default:
        renderTeam();//default when done adding members ie when i answer no more team members, fire renderTeam()
      }
    });
  }
// function to add a type of team member as a New instance, push to teamMembers array, and refire selectTeam function as many times as needed
function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's id?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's GitHub username?",
      }
    ]).then(response => {
      const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
      teamMembers.push(engineer)
      selectTeam();
    });
  }
//renderTeam places your teamMembers array into your template literal render function and writes it to your (index?).html file
function renderTeam(){
   
    fs.writeFileSync("pathToYourHTML file", htmlRendererfunction(teamMembers), "utf-8");
  }
}
}