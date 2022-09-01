module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(255)
        },
        password: {
            type: dataTypes.STRING(255),
        },
        id_usercategory: {
            type: dataTypes.INTEGER(11),
            foreignKey: true
        },
        
    };
    let config = {
        tableName: "user",
        timestamps: false,
    }
    const User = sequelize.define(alias, cols, config); 

    //User.associate = function (models) {
    //    User.hasMany(models.Sale, { // models.Movie -> Movies es el valor de alias en movie.js
    //        as: "sale",
    //        foreignKey: 'id_User'
    //    })
    //}

    User.associate = function (models) {
        User.belongsTo(models.UserCategory, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "usercategory",
            foreignKey: 'id_usercategory'
        })
    }


    return User
};