module.exports = (sequelize, dataTypes) => {
    let alias = 'userCategory';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.VARCHAR(50),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
    }
    const userCategory = sequelize.define(alias, cols, config); 

    userCategory.associate = function (models) {
        userCategory.belongsToMany(models.user, { 
            as: "user",
            foreignKey: 'id_userCategory',
        })
    }

    return userCategory
};