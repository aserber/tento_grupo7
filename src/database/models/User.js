module.exports = (sequelize, dataTypes) => {
    let alias = 'user';
    let cols = {
        id: {
            type: dataTypes.INT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
        lastName: {
            type: dataTypes.VARCHAR(400),
            allowNull: false
        },
        email: {
            type: dataTypes.text(50),
            allowNull: false
        },
        image: {
            type: dataTypes.TINYINT(10).UNSIGNED
        },
        password: {
            type: dataTypes.VARCHAR(10),
        },
        id_usercategory: {
            type: dataTypes.INT(10),
            allowNull: false
        }
    };
    let config = {
        tableName: "user",
        timestamps: false,
    }
    const user = sequelize.define(alias, cols, config); 

    user.associate = function (models) {
        user.belongsToMany(models.sale, { // models.Movie -> Movies es el valor de alias en movie.js
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