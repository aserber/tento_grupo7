module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(50),
            notEmpty: true
        },
        description: {
            type: dataTypes.STRING(400),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: false
        },
        discount: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING(500)
        }
    };
    let config = {
        tableName: "product",
        timestamps: false,
    }
    const Product = sequelize.define(alias, cols, config); 

    Product.associate = function (models) {
        Product.belongsTo(models.ProductCategory, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "productCategory",
            foreignKey: 'id_ProductCategory',
            timestamps: false
        })
    }

    //Product.associate = function (models) {
    //    Product.belongsToMany(models.sale, { // models.Movie -> Movies es el valor de alias en movie.js
    //        as: "sale",
    //        through: 'product_sale',
    //        foreignKey: 'id_Product',
    //        otherKey: 'id_Sale',
    //        timestamps: false
    //    })
    //}


    return Product
};