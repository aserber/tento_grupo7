module.exports = (sequelize, dataTypes) => {
    let alias = 'UserCategory';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        tableName: "usercategory",
        timestamps: false,
    }
    const UserCategory = sequelize.define(alias, cols, config); 

    UserCategory.associate = function (models) {
        UserCategory.hasMany(models.User, { 
            as: "user",
            foreignKey: 'id_usercategory',
        })
    }

    return UserCategory
};