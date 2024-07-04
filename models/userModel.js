const DataTypes = require('sequelize');

module.exports = (sequelize) => {
    // user is a table name
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        accessToken: {
            type: DataTypes.STRING
        },
    }, {
        tableName: 'user',
        schema: '',
        timestamps: false,
        paranoid: false
    })
}
