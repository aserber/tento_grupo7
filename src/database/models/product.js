module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        productName: {
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
    const product = sequelize.define(alias, cols, config); 



    product.associate = function (models) {
        product.belongsTo(models.productCategory, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "productCategory",
            foreignKey: 'id_productCategory',
            timestamps: false
        })
    }

    product.associate = function (models) {
        product.belongsToMany(models.sale, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "sale",
            through: 'product_sale',
            foreignKey: 'id_product',
            otherKey: 'id_sale',
            timestamps: false
        })
    }


    return product
};