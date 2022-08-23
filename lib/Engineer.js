const Employee = require('./Employee.js')
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github
    this.getRole = function () {
      return "Engineer"
    }
    this.getGithub = function () {
      return this.github
    }
  }
}

module.exports = Engineer