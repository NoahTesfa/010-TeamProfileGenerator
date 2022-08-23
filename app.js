const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employee = []

let employeeFunction = () => {
  inquirer.prompt([{
    type: 'list',
    name: 'Roles',
    message: 'Select role',
    choices: ['Manager', 'Engineer', 'Intern']
  }])

.then(res => {
  let role = res.Roles
  if (role === 'Manager') {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Write name here:'
      }, {
        type: 'input',
        name: 'id',
        message: 'Write ID here:'
      }, {
        type: 'input',
        name: 'email',
        message: 'Write email here:'
      }, {
        type: 'input',
        name: 'officeNumber',
        message: 'Write office number here:'
      }
    ])
    .then(res => {
      let name = res.name
      let id = res.id
      let email = res.email
      let officeNumber = res.officeNumber
      let newManager = new Manager(name, id, email, officeNumber)
      employee.push(newManager)
      fs.writeFile(outputPath, render(employee), err => {
        if (err) {console.log(err)}
      })
      inquirer.prompt([{
        type: 'list',
        name: 'continue',
        message: 'Do you wish to add another employee?',
        choices: ['Yes', 'No']
      }])
      .then(res => {
        if (res.continue === 'Yes') {
          employeeFunction ()
        } else {
          console.log('Finish')
        }
      })
      .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
  }
  if (role === 'Engineer') {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Write name here:'
      }, {
        type: 'input',
        name: 'id',
        message: 'Write ID here:'
      }, {
        type: 'input',
        name: 'email',
        message: 'Write Email here:'
      }, {
        type: 'input',
        name: 'github',
        message: 'Write GitHub username here:'
      }
    ])
    .then (res => {
      let name = res.name
      let id = res.id
      let email = res.email
      let github = res.github
      let newEngineer = new Engineer(name, id, email, github)
      employee.push(newEngineer)
      fs.writeFile(outputPath, render(employee), err => {
        if (err) {console.log(err)}
      })
      inquirer.prompt([{
        type: 'list',
        name: 'continue',
        message: 'Do you wish to add another employee?',
        choices: ['Yes', 'No']
      }])
      .then (res => {
        if (res.continue === 'Yes') {
          employeeFunction()
        } else {
          console.log('Finish')
        }
      })
      .catch(err => console.log(err))
    })
    .catch(err => console.logg(err))
  }
  if (role === 'Intern') {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Write name here:'
      }, {
        type: 'input',
        name: 'id',
        message: 'Write ID here:'
      }, {
        type: 'input',
        name: 'email',
        message: 'Write Email here:'
      }, {
        type: 'input',
        name: 'school',
        message: 'Write what school you went to here:'
      }
    ])
    .then(res => {
      let name = res.name
      let id = res.id
      let email = res.email
      let school = res.school
      let newIntern = new Intern(name, id, email, school)
      employee.push(newIntern)
      fs.writeFile(outputPath, render(employee), err => {
        if (err) {console.log(err)}
      })
      inquirer.prompt([{
        type: 'list',
        name: 'continue',
        message: 'Do you wish to add another employee?',
        choices: ['Yes', 'No']
      }])
      .then(res => {
        if (res.continue === 'Yes') {
          employeeFunction()
        } else {
          console.log('Finish')
        }
      })
      .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
  }
})
.catch(err => console.log(err))
}

employeeFunction()