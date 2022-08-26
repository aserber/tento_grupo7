module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        detail: {
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
        image: {
            type: dataTypes.STRING(500)
        },
        id_productCategory: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        tableName: "product",
        timestamps: false,
    }
    const Product = sequelize.define(alias, cols, config); 



    Product.associate = function (models) {
        Product.belongsTo(models.ProductCategory, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "ProductCategory",
            foreignKey: 'id_ProductCategory',
            timestamps: false
        })
    }

    Product.associate = function (models) {
        Product.belongsToMany(models.sale, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "sale",
            through: 'product_sale',
            foreignKey: 'id_Product',
            otherKey: 'id_Sale',
            timestamps: false
        })
    }


    return Product
};