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
    defaultValue: 1,
  },
  location: {
    type: Sequelize.STRING,
  },
}, {
  getterMethods: {
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
  hooks: {
    beforeValidate: function() {

    }
  }
})

// Class Method
users.associate = function () {

};

// Instance method
users.prototype.bio = () => {
  return `${this.fullName}  from  ${this.location}`;
}

module.exports = {
  users,
  db
}