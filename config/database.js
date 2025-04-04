const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(
    config.db.name,
    config.db.user,
    config.db.password,
    {
        host: config.db.host,
        dialect: 'mysql',
        port: config.db.port,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        logging: config.env === 'development' ? console.log : false
    }
);

// Test the connection
sequelize.authenticate()
    .then(() => console.log('Database connection established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;