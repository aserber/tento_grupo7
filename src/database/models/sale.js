module.exports = (sequelize, dataTypes) => {
    let alias = 'sale';
    let cols = {
        id: {
            type: dataTypes.INT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        id_status: {
            type: dataTypes.INT(50),
            allowNull: false
        },
        totalPrice: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: false
        },
        id_user: {
            type: dataTypes.INT(10),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
    }
    const Sale = sequelize.define(alias, cols, config); 


    
    Sale.associate = function (models) {
        Sale.belongsToMany(models.Product, { 
            as: "product",
            through: 'product_sale',
            foreignKey: 'id_sale',
            otherKey: 'id_product',
            timestamps: false
        })
    }

    Sale.associate = function (models) {
        Sale.manyToOne(models.status, { 
            as: "status",
            foreignKey: 'id_status',
            otherKey: 'id_sale',
            timestamps: false
        })
    }

    Sale.associate = function (models) {
        Sale.manyToOne(models.user, { 
            as: "user",
            foreignKey: 'id_user',
            otherKey: 'id_sale',
            timestamps: false
        })
    }


    return Sale
};