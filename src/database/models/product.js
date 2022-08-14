module.exports = (sequelize, dataTypes) => {
    let alias = 'product';
    let cols = {
        id: {
            type: dataTypes.INT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        productName: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        detail: {
            type: dataTypes.TEXT(400),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: false
        },
        image: {
            type: dataTypes.TINYINT(10).UNSIGNED
        },
        id_category: {
            type: dataTypes.INT(10),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
    }
    const Product = sequelize.define(alias, cols, config); 



    Product.associate = function (models) {
        Product.manyToOne(models.productCategory, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "productCategory",
            foreignKey: 'id_category',
            timestamps: false
        })
    }

    Product.associate = function (models) {
        Product.belongsToMany(models.Sale, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "sale",
            through: 'product_sale',
            foreignKey: 'id_product',
            otherKey: 'id_sale',
            timestamps: false
        })
    }


    return Product
};