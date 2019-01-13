const Sequelize = require('sequelize')

const db = new Sequelize('postgres://localhost:5432/api_boilerplate_db')

const users = db.define('users', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING,
  },
}, {
  getterMethods: {
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  }
})

module.exports = {
  users,
  db
}