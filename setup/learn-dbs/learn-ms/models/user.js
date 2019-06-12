//step1

const Sequelize = require('sequelize');
const Model = Sequelize.Model;


//step2

class User extends Model {}
User.init({
  // attributes
  firstName: {
    type: Sequelize.STRING,  // datatypes
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  sequelize,
  modelName: 'user'  //model name of db
  // options
});

//step3

module.exports =User;