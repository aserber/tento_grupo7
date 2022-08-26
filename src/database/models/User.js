module.exports = (sequelize, dataTypes) => {
    let alias = 'user';
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
        lastName: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        image: {
            type: dataTypes.TINYINT(10).UNSIGNED
        },
        password: {
            type: dataTypes.STRING(100),
        },
        id_usercategory: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        tableName: "user",
        timestamps: false,
    }
    const user = sequelize.define(alias, cols, config); 

    user.associate = function (models) {
        user.hasMany(models.sale, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "sale",
            foreignKey: 'id_user'
        })
    }

    user.associate = function (models) {
        user.belongsTo(models.userCategory, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "userCategory",
            foreignKey: 'id_userCategory'
        })
    }


    return user
};