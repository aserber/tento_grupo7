module.exports = (sequelize, dataTypes) => {
    let alias = 'sale';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        id_status: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        totalPrice: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: false
        },
        id_user: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        tableName: "Sale",
        timestamps: false,
    }
    const Sale = sequelize.define(alias, cols, config); 


    
    Sale.associate = function (models) {
        Sale.belongsToMany(models.Product, { 
            as: "product",
            through: 'product_sale',
            foreignKey: 'id_Sale',
            otherKey: 'id_Product',
            timestamps: false
        })
    }

    Sale.associate = function (models) {
        Sale.belongsTo(models.Status, { 
            as: "status",
            foreignKey: 'id_Status',
            otherKey: 'id_Sale',
            timestamps: false
        })
    }

    Sale.associate = function (models) {
        Sale.belongsTo(models.User, { 
            as: "user",
            foreignKey: 'id_User',
            otherKey: 'id_Sale',
            timestamps: false
        })
    }


    return Sale
};