module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING,
            notEmpty: true
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        image: {
            type: dataTypes.STRING(500)

        },
        id_ProductCategory: { 
            type: dataTypes.INTEGER
        },


        }

    };
    let config = {
        tableName: "product",
        timestamps: false,
    }
    const Product = sequelize.define(alias, cols, config); 

    Product.associate = function (models) {
        Product.belongsTo(models.ProductCategory, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "productcategory",
            foreignKey: 'id_productcategory',
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
