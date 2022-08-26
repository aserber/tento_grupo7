module.exports = (sequelize, dataTypes) => {
    let alias = 'status';
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
        tableName: "status",
        timestamps: false,
    }
    const status = sequelize.define(alias, cols, config); 

    status.associate = function (models) {
        status.hasMany(models.sale, { 
            as: "product",
            foreignKey: 'id_status',

        })
    }

    return status
};