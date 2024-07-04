const DataTypes = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('', {
        Customer_Name: {
            type: DataTypes.STRING,
        },
    }, {
        tableName: '',
        timestamps: false,
        paranoid: false
    })
}

