module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductCategory';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        id_product: { type: dataTypes.INTEGER
        },
    };
    let config = {
        tableName: "productcategory",
        timestamps: false,
    }
    const ProductCategory = sequelize.define(alias, cols, config); 

    ProductCategory.associate = function (models) {
        ProductCategory.hasMany(models.Product, { 
            as: "product",
            foreignKey: 'id_product',
        })
    }

    return ProductCategory
};