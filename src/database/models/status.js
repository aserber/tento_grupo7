module.exports = (sequelize, dataTypes) => {
    let alias = 'Status';
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
        tableName: "Status",
        timestamps: false,
    }
    const Status = sequelize.define(alias, cols, config); 

    Status.associate = function (models) {
        Status.hasMany(models.sale, { 
            as: "product",
            foreignKey: 'id_Status',

        })
    }

    return Status
};