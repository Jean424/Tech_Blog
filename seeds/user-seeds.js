const { User } = require('../models');

const userData = [{
    username: 'jean',
    password: 'testing1'

},
{
    username: 'jeanlee',
    password: 'testing2'
},
{
    username: 'jing',
    password: 'testing3'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;